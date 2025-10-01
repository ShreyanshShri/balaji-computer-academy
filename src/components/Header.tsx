"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiPhone, FiMail } from "react-icons/fi";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/gallery", label: "Gallery" },
		{ href: "/inquiry", label: "Inquiry" },
	];

	return (
		<header className="bg-white shadow-lg sticky top-0 z-50">
			{/* Top Info Bar */}
			<div className="bg-primary-600 text-white py-3 px-4 text-sm">
				<div className="container-max flex justify-between items-center">
					<div className="flex items-center space-x-8">
						<div className="flex items-center space-x-3">
							<FiPhone className="w-4 h-4" />
							<span className="font-medium">+91 7070528027</span>
						</div>
						<div className="hidden md:flex items-center space-x-3">
							<FiMail className="w-4 h-4" />
							<span className="font-medium">balajicomputer2014@gmail.com</span>
						</div>
					</div>
					<div className="hidden lg:block">
						<span className="font-semibold">
							🚀 Admissions Open! Enroll Now! 📢
						</span>
					</div>
				</div>
			</div>

			{/* Main Navigation */}
			<nav className="container-max py-4 px-8 flex justify-between items-center">
				<Link href="/" className="flex items-center space-x-4">
					<div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
						<span className="text-white font-bold text-2xl">B</span>
					</div>
					<div>
						<h1 className="text-2xl font-bold text-gray-900">
							Balaji Computer Academy
						</h1>
						<p className="text-sm text-gray-600 font-medium">
							Excellence in Computer Education Since 2014
						</p>
					</div>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center space-x-8">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-gray-700 hover:text-primary-600 font-semibold text-lg transition-colors duration-200"
						>
							{link.label}
						</Link>
					))}
					<Link href="/inquiry" className="btn-primary">
						Enroll Now
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMenu}
					className="md:hidden p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
				>
					{isMenuOpen ? (
						<FiX className="w-6 h-6" />
					) : (
						<FiMenu className="w-6 h-6" />
					)}
				</button>
			</nav>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					className="md:hidden bg-white border-t border-gray-200 py-6 shadow-lg"
				>
					<div className="container-max space-y-6">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="block py-3 text-gray-700 hover:text-primary-600 font-semibold text-lg transition-colors duration-200"
								onClick={() => setIsMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
						<Link
							href="/inquiry"
							className="btn-primary w-full text-center block"
							onClick={() => setIsMenuOpen(false)}
						>
							Enroll Now
						</Link>
					</div>
				</motion.div>
			)}
		</header>
	);
}
