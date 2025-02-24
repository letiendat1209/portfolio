export default function WritingPage() {
  return (
    <main className="w-full">
      <header>
        <h1 className="text-[40px] font-mono font-[550] leading-[48px]">
          Blogs - Viết linh tinh
        </h1>
      </header>
      <article>
        <p className="space">Những cảm xúc hoặc chỉ đơn giản là viết.</p>
        <hr className="hrlight" />
        <div className="space"></div>
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
                  src="https://khoanguyen.codes/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fylftmc9jqqoq%2F4PWu74WACz3uCEcFjjmuru%2F2a4042bee337df0750a4380b4efadd94%2FIMG_2984.PNG&w=1920&q=75"
                  alt=""
                />
              </div>
              <hr className="brcx" />
              <div className="flex-start w-full items-center inline-block">
                <div className="flex items-center">
                  <p className="leading-[30px] text-left mr-[17px] text-black font-[450] text-[17px]">
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
                    tớ không viết gì cả, tớ muốn cầm tay người yêu tớ qua năm
                    mới. Chắc vậy là đủ,những điều tổn thương, nỗi đau chực chờ,
                    những con người cũ, ...
                  </p>
                  <div className="flex items-center">
                    <p>
                      <strong>@Author: </strong>
                    </p>
                    <p className="ml-1 mr-4">@yun.ng</p>
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
