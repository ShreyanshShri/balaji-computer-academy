"use client";
import Link from "next/link";
import {
	FiPhone,
	FiMail,
	FiMapPin,
	FiFacebook,
	FiInstagram,
	FiYoutube,
} from "react-icons/fi";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="container-max section-padding">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					{/* Academy Info */}
					<div className="col-span-1 md:col-span-2 space-y-6">
						<div className="flex items-center space-x-4">
							<div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
								<span className="text-white font-bold text-xl">B</span>
							</div>
							<div>
								<h3 className="text-2xl font-bold">Balaji Computer Academy</h3>
								<p className="text-gray-400">
									Excellence in Education Since 2014
								</p>
							</div>
						</div>

						<p className="text-gray-300 leading-relaxed text-lg max-w-md">
							Established in 2014, we've been providing quality computer
							education in Gopalganj, Bihar. Join our community and discover new
							opportunities for your future.
						</p>

						<div className="space-y-4">
							<div className="flex items-center space-x-4">
								<div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
									<FiPhone className="w-5 h-5" />
								</div>
								<span className="text-lg">+91 7070528027</span>
							</div>
							<div className="flex items-center space-x-4">
								<div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
									<FiMail className="w-5 h-5" />
								</div>
								<span className="text-lg">balajicomputer2014@gmail.com</span>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mt-1">
									<FiMapPin className="w-5 h-5" />
								</div>
								<span className="text-lg leading-relaxed">
									Near Kamla Rai College, Next to Dr. Captain Jha,
									<br />
									Gopalganj, Bihar
								</span>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-6">
						<h4 className="text-xl font-bold">Quick Links</h4>
						<ul className="space-y-4">
							<li>
								<Link
									href="/"
									className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/gallery"
									className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
								>
									Gallery
								</Link>
							</li>
							<li>
								<Link
									href="/inquiry"
									className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
								>
									Inquiry Form
								</Link>
							</li>
						</ul>
					</div>

					{/* Popular Courses */}
					<div className="space-y-6">
						<h4 className="text-xl font-bold">Popular Courses</h4>
						<ul className="space-y-3 text-gray-300">
							<li className="text-lg">• ADCA (1 Year)</li>
							<li className="text-lg">• DCA (6 Months)</li>
							<li className="text-lg">• Tally Prime with GST</li>
							<li className="text-lg">• Safety Officer Training</li>
							<li className="text-lg">• English Spoken Course</li>
							<li className="text-lg">• DTP Course</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<p className="text-gray-300 text-lg">
						&copy; 2024 Balaji Computer Academy. All rights reserved.
					</p>
					<div className="flex items-center space-x-6">
						<a
							href="#"
							className="text-gray-400 hover:text-white transition-colors duration-200"
						>
							<FiFacebook className="w-6 h-6" />
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-white transition-colors duration-200"
						>
							<FiInstagram className="w-6 h-6" />
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-white transition-colors duration-200"
						>
							<FiYoutube className="w-6 h-6" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
