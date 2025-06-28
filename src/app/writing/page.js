export const metadata = {
  title: "Writing",
  description: "About",
};
export default function WritingPage() {
  return (
    <main>
      <header>
        <h1>Blogs - Viết linh tinh</h1>
      </header>
      <article>
        <p className="mb-[1.7em]">Những cảm xúc hoặc chỉ đơn giản là viết.</p>
        <hr className="hrlight" />
        <div className="mb-[1.7em]"></div>
        <p className="leading-[30px] text-[17px] text-[#171717] font-[450] dark:text-white">
          Tìm kiếm các bài viết của tớ
        </p>
        <p className="leading-[26px] text-[14px] text-[#6f6f6f] font-[450] dark:text-[#A0A0A0]">
          Viết linh tinh về cuộc sống, lập trình, nghệ thuật,...
        </p>
        <div className="flex mb-[21px] mt-[14px]">
          <input
            type="text"
            placeholder="Tìm kiếm post..."
            className="w-full bg-[#f9f9f9] border border-[#f1f2f4] font-medium h-14 px-3 rounded-[12px] leading-[30px] text-[17px] text-[#6f6f6f] dark:bg-[#141414] dark:border-[#171717] dark:text-[#A0A0A0]"
          />
        </div>
        <hr className="hrlight" />

        <div className="">
          <a href="">
            <div className="flex-col p-[25px] mx[-25px] mx-[-24px] rounded-3xl justify-between hover:bg-[#F7F8F9] dark:hover:bg-[#222222]">
              <div className="relative w-full h-[200px] overflow-hidden cursor-pointer mb-4 rounded-[12px]">
                <img
                  src="https://images.unsplash.com/photo-1739980873400-3cb5c566df2f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="forest"
                />
              </div>
              <hr className="brcx" />
              <div className="flex-start w-full items-center inline-block">
                <div className="flex items-center">
                  <p className="leading-[30px] text-left mr-[17px] text-black dark:text-white font-[450] text-[17px]">
                    <strong>Viết cho năm mới 2025</strong>
                  </p>
                  <p className="text-[17px] mr-4">Viết linh tinh</p>
                  <hr className="hrlight" />
                  <p className="ml-4 mr-2">
                    <strong>Ngày đăng:</strong>
                  </p>
                  <p>12/12/2025</p>
                </div>
                <div className="my-1">
                  <p>
                    / Năm nào cũng viết một cái bài gì đó trước tết. / Năm nay
                    tớ không viết gì cả, tớ lười, tớ sẽ suy nghĩ và phát triển
                    phần này sau, ...
                  </p>
                  <div className="flex items-center">
                    <p>
                      <strong>@Author: </strong>
                    </p>
                    <p className="ml-1 mr-4">@ledat.09</p>
                    <hr className="hrlight" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </article>
    </main>
  );
}
