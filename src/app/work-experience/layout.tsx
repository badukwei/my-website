"use client";
import React from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { workTabs, homeTabs, web3Tabs } from "@/constants/tab";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
			<Header />
			{children}
			<Footer tabs={workTabs} prevRoute={{ path: "/", tabs: homeTabs }} nextRoute={{ path: "/web3-experience", tabs: web3Tabs }} />
		</div>
	);
};

export default Layout;
