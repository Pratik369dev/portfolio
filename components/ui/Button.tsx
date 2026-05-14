import Link from "next/link";
import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white shadow-md hover:shadow-lg hover:brightness-110",
  outline:
    "border border-[var(--border)] bg-transparent hover:bg-[var(--muted)]",
  ghost: "bg-transparent hover:bg-[var(--muted)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-7 py-3 text-base rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `glass-btn inline-flex items-center justify-center ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
