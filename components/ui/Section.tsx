"use client";

import classNames from 'classnames';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SectionProps extends HTMLMotionProps<"section"> {
    container?: boolean;
    className?: string;
    children: React.ReactNode;
}

export function Section({
    container = true,
    className,
    children,
    ...props
}: SectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={classNames('py-12 md:py-16', className)}
            {...props}
        >
            {container ? (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            ) : (
                children
            )}
        </motion.section>
    );
}
