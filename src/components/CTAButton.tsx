"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CTAButtonProps = Omit<HTMLMotionProps<"a">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
};

export function CTAButton({
  className,
  children,
  variant = "primary",
  icon,
  ...props
}: CTAButtonProps) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 text-sm font-extrabold transition-colors focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2 focus:ring-offset-porcelain",
        variant === "primary" &&
          "bg-charcoal text-porcelain hover:bg-espresso",
        variant === "secondary" &&
          "border border-charcoal/20 bg-transparent text-charcoal hover:border-charcoal hover:bg-porcelain",
        variant === "ghost" &&
          "bg-transparent px-0 text-charcoal underline decoration-espresso/35 underline-offset-8 hover:text-espresso",
        className
      )}
      whileHover={reduce ? undefined : { y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      {...props}
    >
      {icon}
      {children}
      {!icon && variant !== "ghost" ? <ArrowRight aria-hidden size={17} /> : null}
    </motion.a>
  );
}
