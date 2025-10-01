"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
	FiUsers,
	FiAward,
	FiBook,
	FiTrendingUp,
	FiArrowRight,
	FiCheck,
} from "react-icons/fi";

export default function Home() {
	const courses = [
		{
			name: "ADCA",
			fullName: "Advance Diploma in Computer Application",
			duration: "1 year",
			// fee: "₹6000 (one-time) / ₹600 (monthly)",
			fee: "Contact for details",
			description:
				"Comprehensive computer training with practical skills and industry-relevant curriculum.",
			features: [
				"MS Office Suite",
				"Programming Basics",
				"Web Development",
				"Database Management",
			],
		},
		{
			name: "DCA",
			fullName: "Diploma in Computer Application",
			duration: "6 months",
			// fee: "₹2500 (one-time) / ₹600 (monthly)",
			fee: "Contact for details",
			description:
				"Foundation course covering computer fundamentals, software, and basic programming.",
			features: [
				"Computer Basics",
				"MS Office",
				"Internet Skills",
				"Basic Programming",
			],
		},
		{
			name: "Tally Prime with GST",
			fullName: "Certificate in Financial Accounting & GST",
			duration: "3 months",
			// fee: "₹2500 (one-time) / ₹1000 (monthly)",
			fee: "Contact for details",
			description:
				"Master financial accounting software with GST compliance and practical training.",
			features: [
				"Tally Prime",
				"GST Filing",
				"Accounting",
				"Financial Reports",
			],
		},
		{
			name: "Safety Officer Training",
			fullName: "Certified Safety Officer Program",
			duration: "Varies",
			fee: "Contact for details",
			description:
				"Industry-aligned safety training for construction and manufacturing sectors.",
			features: [
				"Risk Management",
				"Safety Protocols",
				"First Aid",
				"Industrial Safety",
			],
		},
		{
			name: "English Spoken Course",
			fullName: "Comprehensive English Communication",
			duration: "6 months",
			// fee: "₹600 (monthly)",
			fee: "Contact for details",
			description:
				"Improve your English speaking skills for better career opportunities.",
			features: [
				"Grammar",
				"Vocabulary",
				"Pronunciation",
				"Conversation Skills",
			],
		},
		{
			name: "DTP Course",
			fullName: "Desktop Publishing",
			duration: "3 months",
			// fee: "₹2500 (one-time) / ₹1000 (monthly)",
			fee: "Contact for details",
			description:
				"Learn to create professional documents, brochures, and marketing materials.",
			features: ["Photoshop", "CorelDraw", "PageMaker", "Design Principles"],
		},
	];

	const stats = [
		{
			icon: FiUsers,
			number: "1000+",
			label: "Students Trained",
			color: "text-blue-600",
		},
		{
			icon: FiAward,
			number: "11+",
			label: "Years Experience",
			color: "text-green-600",
		},
		{
			icon: FiBook,
			number: "8+",
			label: "Courses Offered",
			color: "text-purple-600",
		},
		{
			icon: FiTrendingUp,
			number: "95%",
			label: "Success Rate",
			color: "text-orange-600",
		},
	];

	const whyChooseUs = [
		"Expert Faculty with 10+ Years Industry Experience",
		"Modern Computer Lab with Latest Software & Hardware",
		"Flexible Payment Options - Monthly & One-time",
		"Job-Oriented Training with Real-world Projects",
		"Small Batch Sizes for Personalized Attention",
		"Regular Mock Tests and Practical Assessments",
	];

	return (
		<div className="min-h-screen bg-white">
			<Header />

			{/* Hero Section */}
			<section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
				<div className="container-max section-padding">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="space-y-8"
						>
							<div className="space-y-6">
								<h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
									Shape Your Career with
									<span className="block text-yellow-300">
										Industry-Relevant Skills
									</span>
								</h1>
								<p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
									Join Balaji Computer Academy and learn from expert faculty.
									Quality computer education in Gopalganj, Bihar since 2014.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-6">
								<Link
									href="/inquiry"
									className="btn-primary inline-flex items-center justify-center gap-3 bg-white text-primary-600 hover:bg-gray-50"
								>
									Enroll Now <FiArrowRight className="w-5 h-5" />
								</Link>
								<Link
									href="/gallery"
									className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600"
								>
									View Gallery
								</Link>
							</div>

							<div className="pt-8">
								<p className="text-blue-200 text-sm font-medium mb-4">
									🚀 ADMISSIONS OPEN - LIMITED SEATS!
								</p>
								<div className="flex items-center gap-8 text-blue-100">
									<div className="text-center">
										<div className="text-2xl font-bold text-white">1000+</div>
										<div className="text-sm">Students</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-white">11+</div>
										<div className="text-sm">Years</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-white">95%</div>
										<div className="text-sm">Success</div>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative"
						>
							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
								<h3 className="text-3xl font-bold mb-8 text-center">
									Why Choose Us?
								</h3>
								<div className="space-y-6">
									{whyChooseUs.slice(0, 4).map((feature, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.4 + index * 0.1 }}
											className="flex items-start gap-4"
										>
											<div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
												<FiCheck className="w-4 h-4 text-primary-800" />
											</div>
											<span className="text-lg leading-relaxed">{feature}</span>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="bg-cream-25 border-t border-gray-100">
				<div className="container-max section-padding">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
						{stats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="text-center group"
							>
								<div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow duration-300">
									<stat.icon className={`w-10 h-10 ${stat.color}`} />
								</div>
								<h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
									{stat.number}
								</h3>
								<p className="text-lg text-gray-600 font-medium">
									{stat.label}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="bg-white">
				<div className="container-max section-padding">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="space-y-8"
						>
							<div className="space-y-6">
								<h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
									About Balaji Computer Academy
								</h2>
								<p className="text-xl text-gray-600 leading-relaxed">
									Established on{" "}
									<span className="font-semibold text-primary-600">
										October 6, 2014
									</span>
									, in Gopalganj, Bihar, we are a leading computer education
									institute dedicated to providing quality training in a
									friendly and supportive environment.
								</p>
								<p className="text-lg text-gray-600 leading-relaxed">
									Our comprehensive programs are designed to enhance your skills
									and boost career prospects. From basic computer literacy to
									advanced professional certifications, we offer courses that
									meet industry standards and market demands.
								</p>
							</div>

							<div className="space-y-4">
								{whyChooseUs.slice(4).map((feature, index) => (
									<div key={index} className="flex items-center gap-4">
										<div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
											<FiCheck className="w-4 h-4 text-primary-600" />
										</div>
										<span className="text-gray-700">{feature}</span>
									</div>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="bg-primary-50 rounded-2xl p-10"
						>
							<h3 className="text-2xl font-bold text-primary-800 mb-6">
								Our Mission
							</h3>
							<p className="text-lg text-primary-700 leading-relaxed mb-8">
								To empower students with practical computer skills and industry
								knowledge that enable them to excel in their chosen careers and
								contribute meaningfully to the digital economy.
							</p>

							<div className="grid grid-cols-2 gap-6">
								<div className="text-center p-6 bg-white rounded-xl">
									<div className="text-3xl font-bold text-primary-600 mb-2">
										₹600
									</div>
									<div className="text-sm text-gray-600">
										Monthly Fee Options
									</div>
								</div>
								<div className="text-center p-6 bg-white rounded-xl">
									<div className="text-3xl font-bold text-primary-600 mb-2">
										100%
									</div>
									<div className="text-sm text-gray-600">
										Practical Training
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Courses Section */}
			<section className="bg-cream-25">
				<div className="container-max section-padding">
					<div className="text-center mb-16 space-y-6">
						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="text-4xl lg:text-5xl font-bold text-gray-900"
						>
							Our Computer Courses
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
						>
							Choose from our comprehensive range of courses designed to enhance
							your skills and boost your career prospects in today's digital
							world.
						</motion.p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{courses.map((course, index) => (
							<motion.div
								key={course.name}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
							>
								<div className="space-y-6">
									<div className="space-y-4">
										<div className="flex items-center justify-between">
											<h3 className="text-2xl font-bold text-primary-600">
												{course.name}
											</h3>
											<div className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
												{course.duration}
											</div>
										</div>
										<h4 className="text-lg font-semibold text-gray-800 leading-snug">
											{course.fullName}
										</h4>
									</div>

									<p className="text-gray-600 leading-relaxed">
										{course.description}
									</p>

									<div className="space-y-3">
										<p className="text-sm font-medium text-gray-500">
											Course Features:
										</p>
										<div className="grid grid-cols-2 gap-2">
											{course.features.map((feature, idx) => (
												<div key={idx} className="flex items-center gap-2">
													<div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
													<span className="text-sm text-gray-600">
														{feature}
													</span>
												</div>
											))}
										</div>
									</div>

									<div className="pt-4 border-t border-gray-100 space-y-4">
										<div>
											<p className="text-sm font-medium text-gray-500 mb-1">
												Course Fee:
											</p>
											<p className="text-lg font-bold text-gray-900">
												{course.fee}
											</p>
										</div>

										<Link
											href="/inquiry"
											className="btn-primary w-full text-center inline-flex items-center justify-center gap-3 group-hover:bg-primary-700"
										>
											Enroll Now <FiArrowRight className="w-4 h-4" />
										</Link>
									</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="text-center mt-16"
					>
						<Link
							href="/inquiry"
							className="btn-primary text-xl px-12 py-5 inline-flex items-center gap-4"
						>
							View All Courses & Enroll <FiArrowRight className="w-6 h-6" />
						</Link>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
