import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Button as BaseButton } from "@/components/ui/button";
import Spinner from "@/components/svg/spinner";

interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant?: "primary" | "outline" | "danger" | "plain";
	size?: "sm" | "md" | "lg";
	loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, size, variant, ...props }, ref) => {
		return (
			<BaseButton
				ref={ref}
				{...props}
				disabled={props.disabled || props.loading}
				className={cn(buttonVariants({ variant, size }), className)}
			>
				{props.loading ? (
					<Spinner className="w-6 h-6" />
				) : (
					props.children
				)}
			</BaseButton>
		);
	}
);

Button.displayName = "Button";

const buttonVariants = cva(
	"font-medium rounded-md hover:opacity-80 active:opacity-100 py-0 rounded-[2.04594rem] block",
	{
		variants: {
			variant: {
				primary:
					"text-white  px-[0.97606rem] bg-gradient-to-r from-brand-yellow to-[#FFE68F] to-[100%]",
				outline: "bg-transparent border-2 border-brand-yellow text-white",
				danger: "bg-deep-red text-white",
				plain: "bg-transparent text-gray-300 border-2 border-white/40",
			},
			size: {
				sm: "h-8 px-[10px]",
				md: "h-12 px-[14px]",
				lg: "h-16 px-[18px]",
			},
		},
		defaultVariants: {
			variant: "plain",
			size: "sm",
		},
	}
);

export default Button;
