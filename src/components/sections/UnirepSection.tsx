"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./section.module.css";
import Link from "next/link";

const unirepSequence = [
	"UNIREP TW INTRO ------------",
	"Unirep Taiwan is a project under the Ethereum Foundation, focusing on decentralized reputation and privacy-preserving social applications.",
	"ACHIEVEMENTS ------------",
	"Developed and integrated a decentralized login system leveraging Unirep Protocol, enhancing user privacy and security",
	"Resolved over 50+ issues in the Unirep codebase, contributing to protocol stability and adoption",
	"Wrote and executed unit tests, increasing test coverage by 80%, ensuring higher reliability of smart contract interactions",
];

const UnirepSection = () => {
	const [logs, setLogs] = useState<string[]>([]);
	const isFinished = logs.length === unirepSequence.length;

	return (
		<div className="flex justify-center items-center bg-gray-900 p-4 w-full">
			<motion.div
				className="relative w-full max-w-[95vw] h-[500px] bg-gray-800 rounded-lg shadow-2xl border border-gray-700 flex flex-col"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<div className="w-full h-40 md:h-10 bg-gray-700 rounded-t-lg flex items-center justify-between px-3">
					<h2 className="ml-2 text-gray-300 hover:text-teal-500 rounded-md font-medium transition-colors font-mono">
						Unirep Taiwan | 2023.05 - 2025.01 | Frontend Developer
					</h2>
					<div className="flex items-center">
						<div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
						<div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
						<div className="w-3 h-3 bg-green-500 rounded-full"></div>
					</div>
				</div>

				<div className="flex-grow overflow-y-auto font-mono text-green-400 w-full p-2">
					<div className="bg-gray-900 w-full md:h-full border-t border-gray-700 shadow-inner flex flex-col p-2">
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

						{logs.length < unirepSequence.length && (
							<div>
								<span className="text-teal-300 font-mono">
									user@macbook:
								</span>
								<span className="text-gray-400 mr-2 font-mono">
									~$
								</span>
								<TypeAnimation
									sequence={unirepSequence.flatMap((cmd) => [
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
							<div className="flex flex-col">
								<div>
									<span className="text-teal-300 font-mono">
										user@macbook:
									</span>
									<span className="text-gray-400 mr-2 font-mono">
										~$
									</span>
								</div>
								<Link
									href="https://github.com/social-tw/social-tw-website"
									className="text-red-500 hover:text-red-700 transition-colors font-mono underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									→ Check out the repository
								</Link>
							</div>
						)}

						{isFinished && (
							<div className="flex flex-col">
								<div>
									<span className="text-teal-300 font-mono">
										user@macbook:
									</span>
									<span className="text-gray-400 mr-2 font-mono">
										~$
									</span>
								</div>
								<Link
									href="/web3-experience"
									className={`${styles.animateBlink} text-teal-300 hover:text-teal-500 transition-colors font-mono`}
								>
									→ Click here to learn more
								</Link>
							</div>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default UnirepSection;
