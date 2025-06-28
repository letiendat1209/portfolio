"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    date: "21/05/2024 - 30/07/2024",
    title: "Multitenant Ecommerce",
    position: "Fullstack",
    description: [
      "• <strong>Kiến trúc đa người thuê:</strong> Mỗi người bán sở hữu không gian riêng biệt, không ảnh hưởng lẫn nhau.",
      "• <strong>Tính phí nền tảng tự động từ doanh thu người bán.</strong>",
      "• <strong>Hệ thống đánh giá sản phẩm & phản hồi người dùng</strong>",
      "• <strong>Thư viện đơn hàng cho người dùng theo dõi lịch sử mua hàng</strong>",
      "• <strong>Hệ thống phân quyền (RBAC):</strong> Phân biệt quyền truy cập giữa admin, merchant, customer",
      "• <strong>Admin dashboard:</strong> Quản lý toàn hệ thống, người dùng, báo cáo",
      "• <strong>Merchant dashboard: Người bán quản lý sản phẩm, đơn hàng, doanh thu.",
      "• <strong>Payload CMS:</strong> Dùng để tạo backend RESTful API, schema linh hoạt, hỗ trợ upload file.",
      "• <strong>Lọc theo danh mục, sản phẩm, gắn tag.</strong>",
      "• <strong>Chức năng tìm kiếm nâng cao</strong>",
    ],
    technologies:
      "Next.js 15, React 19, Tailwind CSS, Radix UI, Payload CMS, MongoDB, Stripe Connect, React Query, TRPC, Zod, Zustand, JWT, Vercel, Render.",
    github: {
      url: "https://github.com/letiendat1209/SProject_ShoeVibe",
      label: "SProject_ShoeVibe",
    },
  },
  {
    date: "06/06/2024 - 19/11/2024",
    title: "BOT Movie Website",
    position: "Fullstack",
    description: [
      "Phát triển nền tảng xem phim trực tuyến và quản lý phim toàn diện bằng ReactJS, Node.js, và MySQL. Chịu trách nhiệm phát triển fullstack và bảo trì hệ thống.",
      "<strong>Frontend</strong>: Tạo giao diện người dùng (UI) đáp ứng bằng ReactJS và SCSS, bao gồm hiển thị sản phẩm, tìm kiếm, giỏ hàng, và thanh toán. Sử dụng React Router để điều hướng và Redux để quản lý trạng thái. Tích hợp RESTful API để quản lý dữ liệu sản phẩm, người dùng, và đơn hàng.",
      "<strong>Backend</strong>: Phát triển RESTful API với Node.js và Express, xử lý các dịch vụ liên quan đến sản phẩm, đơn hàng, và người dùng. Quản lý thiết kế cơ sở dữ liệu MySQL. Triển khai JWT cho xác thực và bcrypt cho bảo mật mật khẩu.",
    ],
    technologies:
      "ReactJS, Node.js, Express, MySQL, JWT, Redux, Axios, SCSS. Code Review GPT",
    github: {
      url: "https://github.com/letiendat1209/bot-movie",
      label: "bot-movie",
    },
  },
];

export const ExperienceSection = () => {
  return (
    <motion.section
      className="pt-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex flex-wrap gap-y-2 items-center justify-between">
        <h1 className="mb-2 text-2xl font-bold dark:text-neutral-200">
          Dự án cá nhân
        </h1>
        <div className="px-5 py-5 w-full break-words">
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              className="pb-10 border-l border-gray-300 last:border-l-0 dark:border-neutral-700"
            >
              <div className="relative flex flex-col justify-start pl-12">
                <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                  <img src="/about.svg" alt="project" className="w-8 h-8" />
                </div>
                <p className="text-sm uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">
                  {exp.date}
                </p>
                <h3 className="my-1 text-lg font-bold dark:text-neutral-300">
                  {exp.title}
                </h3>
                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                  Vị trí: {exp.position}
                </p>
                <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                  Chức năng:
                </p>
                <div className="ml-4 mb-1 text-md font-light">
                  {exp.description.map((desc, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                  ))}
                  <div className="mb-1 text-sm">
                    <div>
                      <b className="font-medium dark:text-neutral-300">
                        Technologies:
                      </b>

                      <span className="font-light text-neutral-600 dark:text-neutral-400">
                        {exp.technologies}
                      </span>
                    </div>

                    <div className="mt-1">
                      <b className="font-medium dark:text-neutral-300">
                        Github:
                      </b>
                      <span className="font-light text-neutral-600 dark:text-neutral-400">
                        <a
                          href={exp.github.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-blue-600"
                        >
                          {" "}
                          {exp.github.url}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
