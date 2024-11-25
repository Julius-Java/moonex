import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import moonexLogo from "/logo.png";
import uniswapLogo from "/uniswap-logo.svg";
import checkicon from "/coolicon.svg";
import xicon from "/xicon.svg";
import { InView } from "./motion-ui/in-view";
import { motion } from "motion/react";

const TABLE_DATA = [
	{
		comparison: "Point one",
		moonex: true,
		uniswap: false,
	},

	{
		comparison: "Point two",
		moonex: true,
		uniswap: false,
	},

	{
		comparison: "Point three",
		moonex: true,
		uniswap: false,
	},

	{
		comparison: "Point four",
		moonex: true,
		uniswap: false,
	},

	{
		comparison: "Point five",
		moonex: true,
		uniswap: false,
	},
];

export default function ComparisonTable() {
	return (
		<InView
			viewOptions={{ once: true }}
			variants={{
				hidden: {
					opacity: 0,
				},
				visible: {
					opacity: 1,
					transition: {
						staggerChildren: 0.15,
                                                duration: 0.8
					},
				},
			}}
		>
			<div className="bg-white/[.07] backdrop-blur-lg p-3 lg:p-4 rounded-2xl no-scrollbar">
				<div className="overflow-x-auto no-scrollbar">
					<div className="min-w-[768px] ">
						<Table className="[&_tr]:border-[#D9D9D9]/10 w-full">
							<TableHeader>
								<TableRow>
									<TableHead className="font-conthrax font-semibold text-brand-yellow py-4 text-center border-r border-[#D9D9D9]/10 lg:text-2xl">
										Comparison
									</TableHead>
									<TableHead className="py-4 border-r border-[#D9D9D9]/10">
										<div className="flex items-center justify-center w-full">
											<img
												src={moonexLogo}
												alt="Moonex logo"
												width={100}
												height={100}
												className="block lg:w-[160px]"
											/>
										</div>
									</TableHead>
									<TableHead className="py-4">
										<div className="flex items-center justify-center w-full">
											<img
												src={uniswapLogo}
												alt="Uniswap logo"
												width={100}
												height={100}
												className="block lg:w-[160px]"
											/>
										</div>
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody className="text-[#F0F0F0] ">
								{TABLE_DATA.map((item, index) => {
									return (
										<motion.tr
											key={item.comparison}
											variants={{
												hidden: {
													opacity: 0,
                                                                                                        y: -100,
													filter: "blur(10px)",
												},
												visible: {
													opacity: 1,
													scale: 1,
                                                                                                        y: 0,
													filter: "blur(0px)",
												},
											}}
											className="border-b "
										>
											<TableCell className="border-r border-[#D9D9D9]/10 py-4 lg:text-xl">
												{index + 1}. {item.comparison}
											</TableCell>
											<TableCell className="border-r border-[#D9D9D9]/10 py-4">
												{item.moonex ? (
													<img
														src={checkicon}
														alt="Check icon"
														width={20}
														height={20}
														className="mx-auto"
													/>
												) : (
													<img
														src={xicon}
														alt="X icon"
														width={15}
														height={15}
														className="mx-auto"
													/>
												)}
											</TableCell>
											<TableCell className="py-4">
												{item.uniswap ? (
													<img
														src={checkicon}
														alt="Check icon"
														width={20}
														height={20}
														className="mx-auto"
													/>
												) : (
													<img
														src={xicon}
														alt="X icon"
														width={15}
														height={15}
														className="mx-auto"
													/>
												)}
											</TableCell>
										</motion.tr>
									);
								})}
							</TableBody>
						</Table>
					</div>
				</div>
			</div>
		</InView>
	);
}
