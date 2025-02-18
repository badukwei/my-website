"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./section.module.css";

const tpiSequence = [
	"TPI SOFTWARE INTRO ------------",
    "TPI Software (Ticker: 7781) is a publicly listed company in Taiwan, specializing in digital transformation software solutions",
	"ACHIEVEMENTS ------------",
	"Developed a comprehensive driver management system for Yoxi, valued at $1,000,000 USD",
	"Increased team development efficiency by 50% through the creation of shared components",
	"Designed various Proof of Concept cases, aiding the sales team in selling the product valued at $300,000 USD",
];

const TPISection = () => {
	const [logs, setLogs] = useState<string[]>([]);
	const isFinished = logs.length === tpiSequence.length;

	return (
		<div className="flex justify-center items-center bg-gray-900 p-4 w-full">
			<motion.div
				className="relative w-full max-w-[95vw] h-[500px] bg-gray-800 rounded-lg shadow-2xl border border-gray-700 flex flex-col"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<div className="w-full h-10 bg-gray-700 rounded-t-lg flex items-center justify-between px-3">
					<h2 className="ml-2 text-gray-300 hover:text-teal-500 rounded-md font-medium transition-colors font-mono">
						TPI Software | 2022.12 - 2024.10 | Full Stack Developer
					</h2>
					<div className="flex items-center">
						<div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
						<div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
						<div className="w-3 h-3 bg-green-500 rounded-full"></div>
					</div>
				</div>

				<div className="flex-grow overflow-y-auto font-mono text-green-400 w-full p-2">
					<div className="bg-gray-900 w-full h-full border-t border-gray-700 shadow-inner flex flex-col p-2">
						{logs.map((log, index) => (
							<div key={index}>
								<span className="text-teal-300 font-mono">
									user@macbook:
								</span>
								<span className="text-gray-400 mr-2 font-mono">
									~$
								</span>
								<span className="font-mono">{log}</span>
							</div>
						))}

						{logs.length < tpiSequence.length && (
							<div>
								<span className="text-teal-300 font-mono">
									user@macbook:
								</span>
								<span className="text-gray-400 mr-2 font-mono">
									~$
								</span>
								<TypeAnimation
									sequence={tpiSequence.flatMap((cmd) => [
										cmd,
										1000,
										() => setLogs((prev) => [...prev, cmd]),
									])}
									wrapper="span"
									speed={80}
									repeat={0}
									cursor={true}
									omitDeletionAnimation={true}
									className="font-mono"
								/>
							</div>
						)}

						{isFinished && (
							<div className="flex">
								<span className="text-teal-300 font-mono">
									user@macbook:
								</span>
								<span className="text-gray-400 mr-2 font-mono">
									~$
								</span>
								<a
									href="#unirep-tw"
									className={`${styles.animateBlink} text-teal-300 hover:text-teal-500 transition-colors font-mono`}
								>
									→ Click here to learn more
								</a>
							</div>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default TPISection;
