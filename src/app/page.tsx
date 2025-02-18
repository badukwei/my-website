"use client";
import Header from "@/components/layouts/Header";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/layouts/Footer";
import IntroSection from "@/components/sections/IntroSection";
import { useEffect, useState } from "react";
import SkillSection from "@/components/sections/SkillSection";
import { homeTabs, workTabs } from "@/constants/tab";
import EducationSection from "@/components/sections/EducationSection";

export default function Home() {
	const [currentSection, setCurrentSection] = useState("intro");

	useEffect(() => {
		const handleHashChange = () => {
			let hash = window.location.hash.replace("#", "").toLowerCase();

			if (!hash) {
				window.location.hash = "#intro";
				hash = "intro";
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
		<div className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
			<Header />
			{currentSection === "intro" && <IntroSection />}
			{currentSection === "about" && <AboutSection />}
			{currentSection === "skills" && <SkillSection />}
			{currentSection === "education" && <EducationSection />}
			<Footer tabs={homeTabs} nextRoute={{ path: "/work-experience", tabs: workTabs }} />
		</div>
	);
}
