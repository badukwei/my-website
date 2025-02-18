"use client";
import React, { useState, useEffect } from "react";
import ContactSection from "@/components/sections/ContactSection";
const Page = () => {
	const [currentSection, setCurrentSection] = useState("contact");

    useEffect(() => {
		const handleHashChange = () => {
			let hash = window.location.hash.replace("#", "").toLowerCase();

			if (!hash) {
				window.location.hash = "#contact";
				hash = "contact";
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
			{currentSection === "contact" && <ContactSection />}
		</>
	);
};

export default Page;
