/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumePage() {
  const [isOpen, setIsOpen] = useState(false);

  // Đóng modal khi nhấn phím "Esc"
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="w-full">
      <h1 className="text-[40px] font-mono font-[550] leading-[48px]">
        Resume
      </h1>
      <p>Resume cá nhân của tớ cho các nhà tuyển dụng.</p>
      <hr className="hrlight" />
      <article>
        <div className="resume">
          {/* Nhấp vào ảnh để mở modal */}
          <img
            src="https://khoanguyen.codes/image/cv.svg"
            alt="resume"
            className="cursor-pointer transition-transform duration-200"
            onClick={() => setIsOpen(true)}
          />
        </div>
        <a
          href=""
          download="letiendat-resume"
          className="font-semibold text-blue-600"
        >
          Download CV?
        </a>
        <div className="cursor-pointer mt-1">← Quay lại</div>
      </article>

      {/* Modal hiển thị ảnh phóng to với hiệu ứng */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.img
              src="https://khoanguyen.codes/image/cv.svg"
              alt="resume"
              className="max-w-[100%] max-h-[100%] rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
