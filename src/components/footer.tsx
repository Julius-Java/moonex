import logo from "/logo.png";
import telegram from "/telegram.svg";
import reddit from "/reddit.svg";
import twitter from "/twitter.svg";

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

export default function Footer() {
	return (
		<footer className="px-4  bg-brand-dark py-6 border-t border-white/20 font-raleway">
			<div className="flex flex-col md:flex-row md:gap-x-4 md:justify-between w-full items-center justify-center gap-y-7 lg:container lg:mx-auto">
				<img
					src={logo}
					alt="Moonex logo"
					width={120}
					className="md:w-[150px] lg:w-[170px]"
				/>
				<nav>
					<ul className=" flex flex-col md:flex-row md:gap-4 items-center gap-2 text-white font-extrabold text-lg">
						{NAV_LINKS.map((link) => {
							return (
								<li key={link.href}>
									<a href={link.href}>{link.title}</a>
								</li>
							);
						})}
					</ul>
				</nav>
				<div className="space-y-6 lg:space-y-3">
					<h4 className="font-extrabold text-white text-xl ">
						Contact <span className="text-brand-yellow">Us</span>
					</h4>
					<div className="flex items-center justify-center gap-x-7">
						<a href="#" target="_blank" className="block">
							<img src={telegram} alt="Telegram" />
						</a>
						<a href="#" target="_blank" className="block">
							<img src={reddit} alt="Reddit" />
						</a>
						<a href="#" target="_blank" className="block">
							<img src={twitter} alt="Twitter" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
