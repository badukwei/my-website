"use client";
import React, { useState, useEffect } from "react";
import SuiHackathonSection from "@/components/sections/SuiHackathonSection";
import EthglobalBangkokSection from "@/components/sections/EthglobalBangkokSection";
import Devcon7VolunteerSection from "@/components/sections/Devcon7VolunteerSection";

const Page = () => {
	const [currentSection, setCurrentSection] = useState("sui-hackathon");

    useEffect(() => {
		const handleHashChange = () => {
			let hash = window.location.hash.replace("#", "").toLowerCase();

			if (!hash) {
				window.location.hash = "#sui-hackathon";
				hash = "sui-hackathon";
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
			{currentSection === "sui-hackathon" && <SuiHackathonSection />}
			{currentSection === "ethglobal-bangkok" && <EthglobalBangkokSection />}
			{currentSection === "devcon-7-volunteer" && <Devcon7VolunteerSection />}
		</>
	);
};

export default Page;
