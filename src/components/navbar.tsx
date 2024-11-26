import logo from "/logo.png";
import { Bars2Icon } from "@heroicons/react/24/outline";
import Button from "./button-main";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import MobileMenu from "./mobile-menu";
import { cn } from "@/lib/utils";
import { useAppKitAccount, useAppKit } from "@reown/appkit/react";

// import { Link } from "react-router-dom";
const NAV_LINKS = [
	{
		title: "Home",
		href: "/home",
	},

	{
		title: "About Us",
		href: "/about-us",
	},

	{
		title: "Roadmap",
		href: "/roadmap",
	},

	{
		title: "FAQs",
		href: "/faqs",
	},

	{
		title: "Contact Us",
		href: "/contact-us",
	},
];

export default function Navbar() {
	const [navOpen, setNavOpen] = useState(false);

	const [scrolled, setScrolled] = useState(false);

	const { open } = useAppKit();

	const { isConnected } = useAppKitAccount();

	function toggleNav() {
		setNavOpen(!navOpen);
	}

	useEffect(() => {
		function triggerScrolled() {
			if (window.scrollY >= 30) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		}

		window.addEventListener("scroll", triggerScrolled);

		return () => {
			window.removeEventListener("scroll", triggerScrolled);
		};
	}, []);

	return (
		<nav
			className={cn(
				"transition-all duration-300 ease-in-out  w-full fixed top-0 left-0 z-[70]",
				scrolled && "bg-black/50 backdrop-blur-sm"
			)}
		>
			<div className="flex items-center justify-between  py-5  px-2 font-raleway lg:px-4 lg:container w-full lg:mx-auto">
				<img
					src={logo}
					alt="Moonex Logo"
					width={120}
					height={120}
					className="lg:w-[170px]"
				/>
				<Bars2Icon
					className="w-7 h-7 text-white lg:hidden"
					onClick={toggleNav}
				/>
				{/* Mobile Menu */}
				<AnimatePresence>
					{navOpen && (
						<MobileMenu
							navItems={NAV_LINKS}
							setNavStatus={setNavOpen}
						/>
					)}
				</AnimatePresence>

				{/* Desktop Menu */}
				<ul className="hidden lg:flex lg:items-center lg:gap-x-4 text-white font-extrabold text-lg">
					{NAV_LINKS.map((link) => {
						return (
							<li key={link.href}>
								<a href={link.href}>{link.title}</a>
							</li>
						);
					})}
				</ul>
				{isConnected && (
					<div className="hidden lg:block">
						<appkit-button/>
					</div>
				)}
				{!isConnected && (
					<Button
						variant="primary"
						size="md"
						className="text-black font-extrabold text-sm hidden lg:block px-[20px] h-10"
						onClick={() => open()}
					>
						Connect Wallet
					</Button>
				)}
			</div>
		</nav>
	);
}
