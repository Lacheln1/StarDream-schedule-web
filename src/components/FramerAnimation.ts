import { Variants } from "framer-motion";

export const pageVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
        },
    },
};
