"use client";
import { motion } from "framer-motion";

import "@/app/styles/about.css";
import Footer from "@/components/footer";
import Snake from "@/components/snake";
import Image from "next/image";
import { SkillSection } from "./section/skill-section";
import { ExperienceSection } from "./section/experience-section";

// export const metadata = {
//   title: "About",
//   description: "About",
// };

export default function AboutPage() {
  return (
    <main>
      <header>
        <h1>Giới thiệu</h1>
      </header>

      <article>
        <p className="mb-[1.7em]">
          Một chút điều thú vị về tớ và những trải lòng.
        </p>
        <hr className="hrlight" />
        <div className="mb-[1.7em]"></div>
        <motion.div
          className="titleGroup"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="avatar">
            <Image
              className="avatar"
              src="/about.svg"
              alt="Avatar"
              width={200}
              height={200}
            />
          </div>
          <div className="titleName">Lê Tiến Đạt</div>
          <p className="leading-[26px]">
            Frontend Developer / Software Engineer
          </p>
        </motion.div>

        <div className="justify-items-center">
          <Footer />
        </div>
        <hr className="hrlight" />
        {/* About */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>
            Xin chào, tớ là Lê Tiến Đạt (bot), sinh viên chuyên ngành Kỹ thuật
            phần mềm tại Đại học Nguyễn Tất Thành. Hiện tại tớ đang là sinh viên
            năm cuối và đang cố gắng trở thành Frontend Developer. Tương lai tớ
            muốn trở thành 1 Fullstack Developer và thực hiện thêm nhiều ước mơ
            phía trước. Đây là portfolio và cũng là dự án đầu tiên sử dụng
            NextJS của tớ XD, tớ thích những công nghệ mới và luôn tìm tòi để áp
            dụng.
          </p>
          <br />
          <blockquote className="about-quote">
            &quot;The best way to predict the future is to invent it.&quot;
          </blockquote>
          <br />
          <p>
            Mình là Lê Tiến Đạt, một Fresher Front-end Developer đam mê xây dựng
            giao diện web, mình thích sự đơn giản, mượt mà và tối ưu trải nghiệm
            người dùng. Mình có kinh nghiệm làm việc với HTML, CSS, JavaScript
            và các công nghệ như ReactJS, VueJS, NextJS. Trong quá trình thực
            tập, mình đã tham gia phát triển các module từ thiết kế đến hoàn
            thiện sản phẩm, làm việc với API và tối ưu hiệu suất giao diện. Mình
            luôn thích khám phá những công nghệ mới và không ngừng học hỏi để
            nâng cao kỹ năng. Mục tiêu của mình là tạo ra những sản phẩm web
            không chỉ đẹp mà còn dễ sử dụng, giúp người dùng có trải nghiệm tốt
            nhất. Rất vui khi được kết nối và học hỏi thêm từ mọi người! 🚀
          </p>
          <br />
          <footer>
            <p className="italic font-semibold">
              &quot;Simplicity is the ultimate sophistication and the soul of
              efficiency.&quot;
            </p>
          </footer>
          <br />
          <p>
            <strong>Lê Tiến Đạt</strong>
          </p>
          <p>© 2025 Lê Tiến Đạt. All rights reserved!</p>
        </motion.div>
        <hr className="hrlight" />
        <blockquote className="block-quote">
          Mr. Snake eating my contributions.
        </blockquote>
        {/* GitHub Snake */}
        <Snake />
        <div className="brcx"></div>
        {/* Experience */}
        <ExperienceSection />
        {/* Skills */}
        <SkillSection />

        <div className="brcx"></div>
        <a href="https://www.facebook.com/letiendat912" target="_blank">
          <div className="mt-3 font-semibold">
            Theo dõi tớ để biết thêm nhiều điều hay...
          </div>
        </a>
      </article>
    </main>
  );
}
