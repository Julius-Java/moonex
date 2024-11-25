import dollar from "/dollar.svg";
import shield from "/shield-check.svg";
import noCall from "/no-call.svg";
import toggle from "/toggle.svg";
import FeatureCard from "./feature-card";
import { InView } from "./motion-ui/in-view";
import { motion, Variants } from "motion/react";

const FEATURES = [
	{
		icon: dollar,
		title: "Cheapest TXs",
		description:
			"Exchange popular digital currencies at the cheapest possible transaction price",
	},

	{
		icon: shield,
		title: "CerTIK",
		description:
			"We are Audited by Certik. CertiK is the leading security-focused ranking platform to ",
	},

	{
		icon: noCall,
		title: "No Contract Sells",
		description: "No contract sells to fund the marketing wallets",
	},

	{
		icon: toggle,
		title: "CrossDex Support",
		description:
			"Exchange popular digital currencies at the cheapest possible transaction price",
	},
];

const defaultItemVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

export default function Features() {
	return (
		<InView
			variants={{
				hidden: { opacity: 0 },
				visible: {
					opacity: 1,
					transition: {
						staggerChildren: 0.2,
					},
				},
			}}
			viewOptions={{ margin: "0px 0px -200px 0px", once: true }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			<div className="space-y-4  lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-5">
				{FEATURES.map((feat) => {
					return (
						<motion.div
							key={feat.title}
							className="w-full mx-auto h-full"
							variants={defaultItemVariants}
						>
							<FeatureCard
								title={feat.title}
								iconSrc={feat.icon}
								description={feat.description}
							/>
						</motion.div>
					);
				})}
			</div>
		</InView>
	);
}
