import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-[40px] font-mono font-[550] leading-[48px]">Opps!</h1>
      <hr className="hrlight" />
      <p>Có vẻ trang bạn tìm không có hoặc không cho phép.</p>
      <Link href="/">Hãy trở về trang chính!</Link>
      <div>
        <strong>Error code: 404</strong>
      </div>
      <Link href="/">
        <p>← Quay lại</p>
      </Link>
    </div>
  );
};

export default NotFound;
