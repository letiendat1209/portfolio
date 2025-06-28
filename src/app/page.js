"use client";

import Footer from "@/components/footer";
import ShinyText from "./custom/ShinyText";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
    >
      {/* Header */}
      <header>
        <motion.h1
          className="text-[40px] font-mono font-[550] leading-[48px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Lê Tiến Đạt
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ShinyText
            text="Frontend Developer / Software Engineer"
            disabled={false}
            speed={3}
            className="leading-[26px] text-[#6F6F6F]"
          />
        </motion.div>
      </header>
      {/* Article */}
      <article>
        <div className="brcx w-[160px]"></div>
        <motion.p
          className="leading-[24px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Xin chào, tớ là Lê Tiến Đạt (bot), sinh viên chuyên ngành Kỹ thuật
          phần mềm tại Đại học Nguyễn Tất Thành. Hiện tại tớ đang là sinh viên
          năm cuối và đang cố gắng trở thành Frontend Developer. Tương lai tớ
          muốn trở thành 1 Fullstack Developer và thực hiện thêm nhiều ước mơ
          phía trước. Đây là portfolio và cũng là dự án đầu tiên sử dụng NextJS
          của tớ XD, tớ thích những công nghệ mới và luôn tìm tòi để áp dụng.
        </motion.p>
        <br />
        <motion.div
          className="flex italic items-center gap-1 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="keyboard border rounded px-[6px] py-[5px]">⌘</span>
          <span className="keyboard border rounded px-[8px] py-[5px]">d</span>
          <span>để khám phá...</span>
        </motion.div>

        <div className="flex brcx w-[160px]"></div>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Footer />
        </motion.div>

        <div className="brcx w-[50px]"></div>
        <motion.div
          className="mt-6 space-y-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p>
            <strong>Ngày sinh:</strong> 09/12/2003
          </p>
          <p>
            <strong>Địa chỉ:</strong> Quang Trung, Gò Vấp, TP.HCM
          </p>
          <p>
            <strong>Gmail:</strong> letiendat1209@gmail.com
          </p>
          <p>
            <strong>SDT:</strong> 0868 804 528
          </p>
        </motion.div>
        <div className="brcx"></div>
        <motion.p
          className="italic mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        >
          Dùng máy tính để trải nghiệm tốt nhất
        </motion.p>
        <br />
        <motion.footer
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <p>
            <strong>Lê Tiến Đạt</strong>
          </p>
          <p>© 2025 Lê Tiến Đạt. All rights reserved!</p>
        </motion.footer>
      </article>
    </motion.main>
  );
}
