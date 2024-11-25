import { XCircleIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Button from "./button-main";

const MotionDiv = motion.div;

export default function MobileMenu({
	navItems,
	setNavStatus,
}: {
	navItems: { title: string; href: string }[];
	setNavStatus: (value: boolean) => void;
}) {
	const loginBtnFunc = () => {
		setNavStatus(false);
	};

	const menuVariants = {
		initial: {
			scaleY: 0,
		},
		animate: {
			scaleY: 1,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			scaleY: 0,
			transition: {
				delay: 0.5,
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const navLinkContainerVariants = {
		initial: {
			transition: {
				staggerChildren: 0.09,
				staggerDirection: -1,
			},
		},
		open: {
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.09,
				staggerDirection: 1,
			},
		},
	};
	return (
		<MotionDiv
			variants={menuVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			className="fixed left-0 top-0 w-full h-screen bg-brand-dark text-white py-10 px-8 origin-top z-[100]"
		>
			<div className="flex h-full flex-col">
				<div className="flex justify-between items-center">
					<h1 className="text-xl font-bold font-neue-machina">Menu</h1>
					<XCircleIcon
						className="h-8 w-8 cursor-pointer text-primaryBlue"
						onClick={() => setNavStatus(false)}
					/>
				</div>
				<motion.ul
					variants={navLinkContainerVariants}
					initial="initial"
					animate="open"
					exit={"initial"}
					className="flex flex-col h-full justify-center font-extrabold items-center gap-4"
				>
					{navItems.map(({ title, href }, _) => (
						<li key={_} className="overflow-hidden">
							<MobileNavLink
								title={title}
								href={href}
								setNavStatus={setNavStatus}
							/>
						</li>
					))}
					<Button
						variant="primary"
						size="md"
						onClick={loginBtnFunc}
						className="text-black font-extrabold text-sm  px-[20px] mt-8"
					>
						Connect Wallet
					</Button>
				</motion.ul>
			</div>
		</MotionDiv>
	);
}

function MobileNavLink({
	title,
	href,
	setNavStatus,
}: {
	title: string;
	href: string;
	setNavStatus: (value: boolean) => void;
}) {
	const linkVariants = {
		initial: {
			y: "30vh",
			transition: {
				duration: 0.5,
				ease: [0.37, 0, 0.63, 1],
			},
		},
		open: {
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0, 0.55, 0.45, 1],
			},
		},
	};

	return (
		<MotionDiv
			variants={linkVariants}
			className={cn(
				"text-lg uppercase hover:text-primaryBlue relative group text-white"
			)}
		>
			<span
				className={cn(
					"h-[2px] group-hover:w-1/2 bg-primaryBlue absolute bottom-0 left-0 rounded-lg transition-width duration-200"
				)}
			/>
			<a href={href} onClick={() => setNavStatus(false)}>
				{title}
			</a>
		</MotionDiv>
	);
}
