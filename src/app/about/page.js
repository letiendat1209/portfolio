import "@/app/styles/about.css";
import Footer from "@/components/footer";
import Snake from "@/components/snake";
import Image from "next/image";
export default function AboutPage() {
  return (
    <main className="w-full">
      <header>
        <h1 className="text-[40px] font-mono font-[550] leading-[48px]">
          Giới thiệu
        </h1>
      </header>
      <article>
        <p className="space">Một chút điều thú vị về tớ và những trải lòng.</p>
        <hr className="hrlight" />
        <div className="space"></div>
        <div className="titleGroup">
          <div className="avatar">
            <Image
              className="avatar"
              src="/about.svg" // Không cần "public/"
              alt="Avatar"
              width={200}
              height={200}
            />
          </div>
          <div className="titleName">Lê Tiến Đạt</div>
          <p className="leading-[26px]">
            Frontend Developer / Software Engineer
          </p>
        </div>
        <div className="justify-items-center">
          <Footer />
        </div>
        <hr className="hrlight" />
        {/* About */}
        <div className="about-content">
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
        </div>
        <hr className="hrlight"></hr>
        <blockquote className="block-quote">
          Mr. Snake eating my contributions.
        </blockquote>
        {/* GitHub Snake */}
        <Snake />
        <div className="brcx"></div>
        {/* Experience */}
        <section className="pt-4">
          <div className="flex flex-wrap gap-y-2 items-center justify-between">
            <h1 className="mb-2 text-2xl font-bold dark:text-neutral-200">
              Dự án cá nhân
            </h1>
            <div className="px-5 py-5">
              {/* Experience item*/}
              <div className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                <div className="relative flex flex-col justify-start pl-12">
                  <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                    <img src="/about.svg" alt="project" className="w-8 h-8" />
                  </div>
                  <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">
                    {" "}
                    21/05/2024 - 30/07/2024{" "}
                  </p>
                  <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
                    E-commerce Shoe Selling Website
                  </h3>
                  <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                    Vị trí: Fullstack
                  </p>
                  <div className="ml-4 mb-1 text-sm font-light space-y-0.5">
                    <p>
                      Phát triển nền tảng quản lý bán giày toàn diện bằng
                      ReactJS, Node.js, và MySQL. Chịu trách nhiệm phát triển
                      fullstack và bảo trì hệ thống.
                    </p>
                    <p>
                      <strong>Frontend</strong>: Tạo giao diện người dùng (UI)
                      đáp ứng bằng ReactJS và SCSS, bao gồm hiển thị sản phẩm,
                      tìm kiếm, giỏ hàng, và thanh toán. Sử dụng React Router để
                      điều hướng và Redux để quản lý trạng thái. Tích hợp
                      RESTful API để quản lý dữ liệu sản phẩm, người dùng, và
                      đơn hàng.
                    </p>
                    <p>
                      <strong>Backend</strong>: Phát triển RESTful API với
                      Node.js và Express, xử lý các dịch vụ liên quan đến sản
                      phẩm, đơn hàng, và người dùng. Quản lý thiết kế cơ sở dữ
                      liệu MySQL. Triển khai JWT cho xác thực và bcrypt cho bảo
                      mật mật khẩu.
                    </p>
                    <p className="mb-1 text-sm">
                      <b className="font-medium dark:text-neutral-300">
                        Technologies:
                      </b>
                      <span className="font-light text-neutral-600 dark:text-neutral-400">
                        {" "}
                        ReactJS, Node.js, Express, MySQL, JWT, Redux, Axios,
                        SCSS. Code Review GPT{" "}
                      </span>
                      <b className="font-medium dark:text-neutral-300">
                        Github:
                      </b>
                      <span className="font-light text-neutral-600 dark:text-neutral-400">
                        <a
                          href="https://github.com/letiendat1209/SProject_ShoeVibe"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          https://github.com/letiendat1209/SProject_ShoeVibe
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                <div className="relative flex flex-col justify-start pl-12">
                  <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                    <img src="/about.svg" alt="project" className="w-8 h-8" />
                  </div>
                  <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">
                    {" "}
                    October 6th - November 19th.{" "}
                  </p>
                  <h3 className="my-1 text-lg font-bold dark:text-neutral-100">
                    BOT Movie Website
                  </h3>
                  <p className="mb-1 text-sm font-medium dark:text-neutral-300">
                    Vị trí: Fullstack
                  </p>
                  <div className="ml-4 mb-1 text-sm font-light space-y-0.5">
                    <p>
                      Phát triển nền tảng xem phim trực tuyến và quản lý phim
                      toàn diện bằng ReactJS, Node.js, và MySQL. Chịu trách
                      nhiệm phát triển fullstack và bảo trì hệ thống.
                    </p>
                    <p>
                      <strong>Frontend</strong>: Tạo giao diện người dùng (UI)
                      đáp ứng bằng ReactJS và SCSS, bao gồm hiển thị sản phẩm,
                      tìm kiếm, giỏ hàng, và thanh toán. Sử dụng React Router để
                      điều hướng và Redux để quản lý trạng thái. Tích hợp
                      RESTful API để quản lý dữ liệu sản phẩm, người dùng, và
                      đơn hàng.
                    </p>
                    <p>
                      <strong>Backend</strong>: Phát triển RESTful API với
                      Node.js và Express, xử lý các dịch vụ liên quan đến sản
                      phẩm, đơn hàng, và người dùng. Quản lý thiết kế cơ sở dữ
                      liệu MySQL. Triển khai JWT cho xác thực và bcrypt cho bảo
                      mật mật khẩu.
                    </p>
                    <p className="mb-1 text-sm">
                      <b className="font-medium dark:text-neutral-300">
                        Technologies:
                      </b>
                      <span className="font-light text-neutral-600 dark:text-neutral-400">
                        {" "}
                        ReactJS, Node.js, Express, MySQL, JWT, Redux, Axios,
                        SCSS. Code Review GPT{" "}
                      </span>
                      <b className="font-medium dark:text-neutral-300">
                        Github:
                      </b>
                      <span className="font-light text-neutral-600 dark:text-neutral-400">
                        <a
                          href="https://github.com/letiendat1209/bot-movie"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          https://github.com/letiendat1209/bot-movie
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
