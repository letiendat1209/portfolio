"use client";

import { motion } from "framer-motion";
import { Code, Brush, Database, Figma, Github } from "lucide-react";

const skillIcons = {
    CSS: <Brush className="w-4 h-4 mr-2" />,
    MySQL: <Database className="w-4 h-4 mr-2" />,
    GitHub: <Github className="w-4 h-4 mr-2" />,
    Figma: <Figma className="w-4 h-4 mr-2" />,
};

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "MySQL",
    "GitHub",
    "Figma",
];

export const SkillSection = () => {
    return (
        <section>
        <h1 className="mb-2 text-2xl font-bold">Kỹ năng</h1>
        <motion.div
            className="flex flex-wrap gap-3 mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // chỉ chạy 1 lần khi 20% phần tử vào viewport
            transition={{ staggerChildren: 0.1 }}
            variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
            }}
        >
            {skills.map((skill, index) => (
            <motion.span
                key={index}
                variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center border border-neutral-300 dark:border-neutral-700 px-4 py-2 rounded-full shadow-sm bg-neutral-50 dark:bg-neutral-800 text-sm font-medium hover:shadow-md transition"
            >
                {skillIcons[skill] || <Code className="w-4 h-4 mr-2" />}
                {skill}
            </motion.span>
            ))}
        </motion.div>
        </section>
    );
};
