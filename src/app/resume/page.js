/* eslint-disable @next/next/no-img-element */
export default function ResumePage() {
  return (
    <main>
      <h1>Resume</h1>
      <p>Resume cá nhân của tớ cho các nhà tuyển dụng.</p>
      <hr className="hrlight" />
      <article>
        <div className="resume">
          {/* Nhấp vào ảnh để mở modal */}
          <img
            src="/LeTienDatResume.png"
            alt="resume"
            className="cursor-pointer transition-transform duration-200"
          />
        </div>
        <a
          href="/LeTienDatResume.pdf"
          download="letiendat-resume"
          className="font-semibold text-blue-600"
        >
          Download CV?
        </a>
        <div className="cursor-pointer mt-1">← Quay lại</div>
      </article>
    </main>
  );
}
