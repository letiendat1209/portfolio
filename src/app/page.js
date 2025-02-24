import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="text-[40px] font-mono font-[550] leading-[48px]">
          Lê Tiến Đạt
        </h1>
        <p className="leading-[26px]">Frontend Developer / Software Engineer</p>
      </header>
      <article>
        <div className="brcx w-[160px]"></div>
        <p className="leading-[24px]">
          Xin chào, tớ là Lê Tiến Đạt (bot), sinh viên chuyên ngành Kỹ thuật
          phần mềm tại Đại học Nguyễn Tất Thành. Hiện tại tớ đang là sinh viên
          năm cuối và đang cố gắng trở thành Frontend Developer. Tương lai tớ
          muốn trở thành 1 Fullstack Developer và thực hiện thêm nhiều ước mơ
          phía trước. Đây là portfolio và cũng là dự án đầu tiên sử dụng NextJS
          của tớ XD, tớ thích những công nghệ mới và luôn tìm tòi để áp dụng.
        </p>
        <br />
        <i className="flex italic">
          <span className="keyboard border rounded px-[6px] py[5px] mr-1">
            ⌘
          </span>
          <span className="keyboard border rounded px-[8px] py[5px] mr-1">
            d
          </span>
          <p>để khám phá...</p>
        </i>
        <div className="flex brcx w-[160px]"></div>
        <Footer />
        <div className="brcx w-[50px]"></div>
        <p className="italic">Dùng máy tính để trải nghiệm tốt nhất</p>
        <br />
        <footer>
          <p>
            <strong>Lê Tiến Đạt</strong>
          </p>
          <p>
            © 2025 Lê Tiến Đạt. All rights reserved! • Base on template{" "}
            <a href="https://github.com/yunkhngn" target="_blank">
              <strong>yun.khngn</strong>
            </a>
          </p>
        </footer>
      </article>
    </main>
  );
}
