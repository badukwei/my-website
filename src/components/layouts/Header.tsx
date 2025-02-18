"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"; 
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { navTabs } from "@/constants/tab";

const Header = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="w-full bg-gray-900 fixed top-0 left-0 z-50 border-gray-800 shadow-lg">
			<div className="hidden md:flex items-center justify-between h-12 bg-gray-800 px-4 border-b border-gray-700">
				<div className="flex items-center space-x-2">
					{navTabs.map((item) => {
						const tabPath =
							item.toLowerCase() === "home"
								? "/#intro"
								: `/${item.toLowerCase()}`;
						const isActive =
							(item.toLowerCase() === "home" &&
								pathname === "/") ||
							pathname === tabPath;

						return (
							<Link
								key={item}
								href={tabPath}
								className={`block px-4 py-2 rounded-t-md text-sm font-mono cursor-pointer transition-colors 
							${
								isActive
									? "bg-gray-900 text-teal-400 border-t-2 border-teal-500"
									: "text-gray-300 hover:text-teal-500"
							}`}
								onClick={() => setIsOpen(false)}
							>
								{item}
							</Link>
						);
					})}
				</div>
			</div>

			<div className="md:hidden flex justify-between p-4 bg-gray-800">
				<button
					type="button"
					className="text-gray-400 hover:text-white focus:outline-none"
					aria-controls="mobile-menu"
					aria-expanded={isOpen}
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? (
						<FiX className="h-6 w-6" />
					) : (
						<svg
							className="h-6 w-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>
			</div>

			<motion.div
				initial={false}
				animate={isOpen ? "open" : "closed"}
				variants={{
					open: { opacity: 1, height: "auto", display: "block" },
					closed: {
						opacity: 0,
						height: 0,
						transitionEnd: { display: "none" },
					},
				}}
				className="md:hidden bg-gray-800"
				id="mobile-menu"
			>
				<div className="px-2 pt-2 pb-3 space-y-1">
					{navTabs.map((item) => {
						const tabPath =
							item.toLowerCase() === "home"
								? "/#intro"
								: `/${item.toLowerCase()}`;
						const isActive =
							(item.toLowerCase() === "home" &&
								pathname === "/") ||
							pathname === tabPath;

						return (
							<Link
								key={item}
								href={tabPath}
								className={`block px-4 py-2 rounded-t-md text-sm font-mono cursor-pointer transition-colors 
							${
								isActive
									? "bg-gray-900 text-teal-400 border-t-2 border-teal-500"
									: "text-gray-300 hover:text-teal-500"
							}`}
								onClick={() => setIsOpen(false)}
							>
								{item}
							</Link>
						);
					})}
				</div>
			</motion.div>
		</header>
	);
};

export default Header;
