export const SearchInput = ({ onChange }) => {
    return (
        <div>
            <p className="leading-[30px] text-[17px] text-[#171717] font-[450] dark:text-white">
            Tìm kiếm repository Github
            </p>
            <p className="leading-[26px] text-[14px] text-[#6f6f6f] font-[450] dark:text-[#A0A0A0]">
            Các pet project/public repository sử dụng Node.js, React...
            </p>
            <div className="flex mb-[21px] mt-[14px]">
            <input
                type="text"
                placeholder="Tìm kiếm repository..."
                onChange={onChange}
                autoComplete="on"
                className="w-full bg-[#f9f9f9] border border-[#f1f2f4] font-medium h-14 px-3 rounded-[12px] leading-[30px] text-[17px] text-[#6f6f6f] dark:bg-[#141414] dark:border-[#171717] dark:text-[#A0A0A0]"
            />
            </div>
        </div>
    );
}