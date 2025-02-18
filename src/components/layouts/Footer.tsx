"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
	MdOutlineKeyboardDoubleArrowLeft,
	MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

interface FooterProps {
	tabs: string[];
	prevRoute?: { path: string; tabs: string[] };
	nextRoute?: { path: string; tabs: string[] };
}

const Footer: React.FC<FooterProps> = ({ tabs, prevRoute, nextRoute }) => {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState(tabs[0] || "");

	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash.replace("#", "").toLowerCase();
			if (tabs.includes(hash)) {
				setActiveTab(hash);
			} else {
				setActiveTab(tabs[0] || "");
			}
		};

		window.addEventListener("hashchange", handleHashChange);
		handleHashChange();

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, [tabs]);

	const handlePrev = () => {
		const currentIndex = tabs.indexOf(activeTab);
		if (currentIndex > 0) {
			// 切換到前一個 tab
			const prevTab = tabs[currentIndex - 1];
			window.location.hash = `#${prevTab.toLowerCase()}`;
		} else if (prevRoute) {
			// 如果在第一個 tab，且 prevRoute 存在，導航到 prevRoute 的最後一個 tab
			router.push(
				`${prevRoute.path}#${prevRoute.tabs[prevRoute.tabs.length - 1]}`
			);
		}
	};

	const handleNext = () => {
		const currentIndex = tabs.indexOf(activeTab);
		if (currentIndex < tabs.length - 1) {
			// 切換到下一個 tab
			const nextTab = tabs[currentIndex + 1];
			window.location.hash = `#${nextTab.toLowerCase()}`;
		} else if (nextRoute) {
			// 如果在最後一個 tab，且 nextRoute 存在，導航到 nextRoute 的第一個 tab
			router.push(`${nextRoute.path}#${nextRoute.tabs[0]}`);
		}
	};

	if (tabs.length === 0) return null;

	return (
		<div className="flex justify-around items-center bg-gray-900 border-t border-gray-800 shadow-lg fixed bottom-0 w-full py-3">
			<button
				className={`flex flex-col items-center text-gray-400 hover:text-teal-300 ${
					!prevRoute && activeTab === tabs[0]
						? "opacity-50 cursor-not-allowed"
						: ""
				}`}
				onClick={handlePrev}
				disabled={!prevRoute && activeTab === tabs[0]}
			>
				<MdOutlineKeyboardDoubleArrowLeft size={24} />
			</button>

			<span className="text-md font-mono text-teal-400">{activeTab}</span>

			<button
				className={`flex flex-col items-center text-gray-400 hover:text-teal-300 ${
					!nextRoute && activeTab === tabs[tabs.length - 1]
						? "opacity-50 cursor-not-allowed"
						: ""
				}`}
				onClick={handleNext}
				disabled={!nextRoute && activeTab === tabs[tabs.length - 1]}
			>
				<MdOutlineKeyboardDoubleArrowRight size={24} />
			</button>
		</div>
	);
};

export default Footer;
