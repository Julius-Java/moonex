import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderTrail } from "./motion-ui/border-trail";

export default function FeatureCard({
	iconSrc,
	title,
	description,
}: {
	iconSrc: string;
	title: string;
	description: string;
}) {
	return (
		<Card className="relative text-[#ECF1F0] bg-white/[.07] backdrop-blur-lg border-none h-full block">
			<BorderTrail
				style={{
					boxShadow:
						"0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
				}}
				// size={100}
			/>

			<CardHeader className="space-y-4">
				<img src={iconSrc} alt={title} width={70} className="block" />
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className="text-[#B6B6B6]">{description}</CardContent>
		</Card>
	);
}
