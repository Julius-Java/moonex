import "./App.css";
import Navbar from "./components/navbar";
import Button from "./components/button-main";
import { TextLoop } from "./components/motion-ui/text-loop";
import ComparisonTable from "./components/comparison-table";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "./components/motion-ui/accordion";
import Features from "./components/features";
import plus from "/plus.svg";
import chevDown from "/chev-down.svg";
import { InView } from "./components/motion-ui/in-view";
import Footer from "./components/footer";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { cn } from "./lib/utils";

function App() {
	const { open } = useAppKit();
	const { isConnected } = useAppKitAccount();

	return (
		<>
			<Navbar />
			<main className="mt-[120px]">
				<header
					id="hero"
					className="h-[calc(100vh_-_86px)] flex flex-col items-center justify-center px-4 lg:items-start lg:container lg:mx-auto"
				>
					<InView
						variants={{
							hidden: {
								opacity: 0,
								y: -100,
								filter: "blur(4px)",
							},
							visible: {
								opacity: 1,
								y: 0,
								filter: "blur(0px)",
							},
						}}
						viewOptions={{
							margin: "0px 0px 0px 0px",
							once: true,
						}}
						transition={{ duration: 0.6, ease: "easeInOut" }}
					>
						<div className="space-y-6 lg:text-left">
							<div className="space-y-2 lg:max-w-2xl xl:max-w-5xl lg:mx-0">
								<h1 className="text-white font-extrabold text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
									<TextLoop interval={2.8}>
										{"Trusted"}
										{"Secure"}
										{"Fast"}
									</TextLoop>{" "}
									Multi-Chain
									<span className="text-[#F9D423]">
										{" "}
										DEX{" "}
									</span>{" "}
									Platform
								</h1>
								<span className="text-[#9E9E9E] block text-sm md:text-base lg:text-lg xl:text-xl">
									Trade, earn, and own crypto on the
									all-in-one multi-chain DEX
								</span>
							</div>
							<div className="space-y-4 max-w-max mx-auto lg:max-w-none lg:mx-0 lg:flex lg:items-center lg:space-y-0 lg:gap-x-5">
								{isConnected && (
									<div className="">
										<appkit-button size="xxl" />
									</div>
								)}
								{!isConnected && (
									<Button
										variant={
											!isConnected ? "primary" : "plain"
										}
										className={cn(
											"h-10  px-[14px] text-black font-bold text-sm  w-[160px] lg:h-12 lg:px-[16px] lg:text-base lg:w-[180px]",
											isConnected && "text-gray-300"
										)}
										onClick={() => open()}
									>
										Connect Wallet
									</Button>
								)}

								<Button
									variant="outline"
									className="h-10  px-[14px] text-brand-yellow font-bold text-sm  w-[160px] lg:h-12 lg:px-[16px] lg:text-base lg:w-[180px]"
								>
									Trade Crypto
								</Button>
							</div>
						</div>
					</InView>
				</header>
				<div className="space-y-16 lg:space-y-44">
					<section className="space-y-6 text-white text-left px-4 lg:container lg:mx-auto relative">
						<div className="hidden md:block absolute top-[60%] left-[40%] lg:top-[80%]  -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[800px] lg:h-[800px] rounded-full bg-[#EDD955]/15 mix-blend-normal filter blur-2xl" />
						<h2 className="font-extrabold text-lg md:text-2xl lg:text-4xl xl:text-5xl">
							Why{" "}
							<span className="text-brand-yellow ">MoonEX</span> ?
						</h2>
						<ComparisonTable />
					</section>

					<section className="space-y-6 text-white text-left px-4 lg:container lg:mx-auto relative mb-20">
						<h2 className="font-extrabold text-lg md:text-2xl lg:text-4xl xl:text-5xl text-center">
							Our{" "}
							<span className="text-brand-yellow ">Features</span>
						</h2>
						<Features />
					</section>

					<section className="px-4 relative">
						<div className="hidden md:block absolute top-[60%] left-0 lg:top-[80%]  -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#EDD955]/10 mix-blend-normal filter blur-3xl" />
						<div className="hidden md:block absolute top-0 right-0 lg:top-[80%]  translate-x-1/2 -translate-y-[70%] w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#EDD955]/10 mix-blend-normal filter blur-3xl" />
						<InView
							variants={{
								hidden: {
									opacity: 0,
									y: 100,
									filter: "blur(4px)",
								},
								visible: {
									opacity: 1,
									y: 0,
									filter: "blur(0px)",
								},
							}}
							viewOptions={{
								margin: "0px 0px -200px 0px",
								once: true,
							}}
							transition={{ duration: 0.3, ease: "easeInOut" }}
						>
							<div className="rounded-xl bg-white/[.07] backdrop-blur-lg py-7 space-y-3 md:mx-auto md:max-w-4xl">
								<h2 className="font-extrabold text-lg md:text-2xl lg:text-4xl xl:text-5xl text-center space-y-0 text-brand-yellow">
									FAQs
								</h2>
								<Accordion
									className="flex w-full flex-col divide-y divide-white/10 font-raleway "
									transition={{
										duration: 0.2,
										ease: "easeInOut",
									}}
								>
									<AccordionItem
										value="token-rewards"
										className="py-3 px-3 lg:px-10"
									>
										<AccordionTrigger className="w-full text-left text-white font-medium lg:text-lg">
											<div className="flex items-center justify-between">
												<div>
													Do I get rewarded in tokens
													or ETH when I refer buyers?
												</div>
												<img
													src={chevDown}
													alt="Trigger"
													className="transition-transform duration-200 
												hidden
												group-data-[expanded]:block"
												/>
												<img
													src={plus}
													alt="Trigger"
													className="group-data-[expanded]:hidden block"
												/>
											</div>
										</AccordionTrigger>
										<AccordionContent className="py-4">
											<p className="text-[#BAB8B8] text-left">
												Discover the fundamental
												concepts of Motion-Primitives.
												This section guides you through
												the installation process and
												provides an overview of how to
												integrate these components into
												your projects. Learn about the
												core functionalities and how to
												set up your first animation
												effectively.
											</p>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem
										value="how-do-i-get-a-referral-code"
										className="py-3 px-3 lg:px-10"
									>
										<AccordionTrigger className="w-full text-left text-white font-medium lg:text-lg">
											<div className="flex items-center justify-between">
												<div>
													How do I get a Refferal Code
												</div>
												<img
													src={chevDown}
													alt="Trigger"
													className="transition-transform duration-200 
												hidden
												group-data-[expanded]:block"
												/>
												<img
													src={plus}
													alt="Trigger"
													className="group-data-[expanded]:hidden block"
												/>
											</div>
										</AccordionTrigger>
										<AccordionContent className="py-4">
											<p className="text-[#BAB8B8] text-left">
												Discover the fundamental
												concepts of Motion-Primitives.
												This section guides you through
												the installation process and
												provides an overview of how to
												integrate these components into
												your projects. Learn about the
												core functionalities and how to
												set up your first animation
												effectively.
											</p>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
						</InView>
					</section>

					<Footer />
				</div>
			</main>
		</>
	);
}

export default App;
