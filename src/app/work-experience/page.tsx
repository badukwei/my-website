"use client";
import React, { useState, useEffect } from "react";
import TPISection from "@/components/sections/TPISection";
import UnirepSection from "@/components/sections/UnirepSection";

const Page = () => {
	const [currentSection, setCurrentSection] = useState("tpi-software");

    useEffect(() => {
		const handleHashChange = () => {
			let hash = window.location.hash.replace("#", "").toLowerCase();

			if (!hash) {
				window.location.hash = "#tpi-software";
				hash = "tpi-software";
			}

			setCurrentSection(hash);
		};

		window.addEventListener("hashchange", handleHashChange);
		handleHashChange();

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	return (
		<>
			{currentSection === "tpi-software" && <TPISection />}
			{currentSection === "unirep-tw" && <UnirepSection />}
		</>
	);
};

export default Page;
