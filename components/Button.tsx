import Link from "next/link";
import { isJoinPagePath } from "@/lib/mailerlite";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-background hover:bg-gold-light border border-gold-dark/30",
  secondary:
    "bg-surface-elevated text-cream border border-border hover:border-gold/50 hover:bg-surface",
  outline:
    "bg-transparent text-cream border border-gold/40 hover:border-gold hover:bg-gold/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center rounded-sm px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${variantStyles[variant]} ${className}`;

  if (isJoinPagePath(href)) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
