import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function Highlight({ children, className }: HighlightProps) {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.2,
      }}
      style={{
        backgroundImage: "linear-gradient(to right, white, white)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline-flex",
        alignItems: "center",
        lineHeight: 1,
        verticalAlign: "middle",
        paddingTop: "0.14em",
        paddingBottom: "0.28em",
        paddingLeft: "0.38em",
        paddingRight: "0.38em",
        borderRadius: "0.28em",
        fontWeight: 400,
        fontSize: "0.82em",
      }}
      className={cn(
        "text-[#7F00FF]",
        className
      )}
    >
      {children}
    </motion.span>
  );
} 