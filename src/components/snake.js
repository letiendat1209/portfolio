"use client";

import { useEffect, useState } from "react";
export default function Snake() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Kiểm tra nếu class "dark" có trên <html>
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setTheme(isDarkMode ? "dark" : "light");
    };

    // Kiểm tra khi component mount
    checkTheme();

    // Theo dõi sự thay đổi của class "dark" trên <html>
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const snakeSrc =
    theme === "dark"
      ? "https://raw.githubusercontent.com/letiendat1209/letiendat1209/output/github-snake-dark.svg"
      : "https://raw.githubusercontent.com/letiendat1209/letiendat1209/output/github-snake.svg";

  return (
    <div className="snake">
      <img src={snakeSrc} alt="snake" width="100%" />
    </div>
  );
}
