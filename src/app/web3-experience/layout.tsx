"use client";
import React from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { web3Tabs, workTabs, contactTabs } from "@/constants/tab";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
			<Header />
			{children}
			<Footer tabs={web3Tabs} prevRoute={{ path: "/work-experience", tabs: workTabs }} nextRoute={{ path: "/contact", tabs: contactTabs }} />
		</div>
	);
};

export default Layout;
