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
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition-colors focus:outline-none focus:ring-2 focus:ring-espresso focus:ring-offset-2 focus:ring-offset-ivory",
        variant === "primary" &&
          "bg-espresso text-ivory shadow-button hover:bg-charcoal",
        variant === "secondary" &&
          "border border-espresso/15 bg-porcelain text-espresso hover:border-espresso/35 hover:bg-white",
        variant === "ghost" &&
          "bg-transparent text-espresso underline decoration-rose/40 underline-offset-8 hover:text-rose",
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
