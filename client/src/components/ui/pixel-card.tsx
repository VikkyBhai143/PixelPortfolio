import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "pixel" | "doodle" | "gameboy";
  hover?: boolean;
}

export function PixelCard({ 
  children, 
  className, 
  variant = "pixel", 
  hover = true 
}: PixelCardProps) {
  const variants = {
    pixel: "pixel-border bg-white dark:bg-dark-gray",
    doodle: "doodle-border bg-white/95 dark:bg-dark-gray/95",
    gameboy: "gameboy-screen"
  };

  return (
    <motion.div
      className={cn(
        variants[variant],
        "transition-all duration-300",
        hover && "hover:scale-105 cursor-pointer",
        className
      )}
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
