import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  const mergedClassName = twMerge(
    "w-screen h-screen flex flex-col justify-center items-center bg-base-100",
    className
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.15 }}
      className={mergedClassName}
    >
      {children}
    </motion.div>
  );
}
