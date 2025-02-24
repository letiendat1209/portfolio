"use client";

import { useEffect, useState } from "react";

export default function ProjectPage() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/letiendat1209/repos", {})
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);
  console.log(repos);
  return (
    <main className="w-full">
      <header>
        <h1 className="text-[40px] font-mono font-[550] leading-[48px] dark:text-white">
          Dự Án
        </h1>
      </header>
      <article>
        <p className="space">
          Những dự án lập trình cá nhân/pet projects của tớ từ Github. .
        </p>
        <hr className="hrlight" />
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
              className="w-full bg-[#f9f9f9] border border-[#f1f2f4] font-medium h-14 px-3 rounded-[12px] leading-[30px] text-[17px] text-[#6f6f6f] dark:bg-[#141414] dark:border-[#171717] dark:text-[#A0A0A0]"
            />
          </div>
          <hr className="hrlight" />
          <div>
            <div className="repo">
              {repos.map((repo) => (
                <div key={repo.id}>
                  <a href={repo.clone_url} target="_blank" rel="noreferrer">
                    <div className="flex p-6 mx-[-24px] rounded-3xl justify-between hover:bg-[#F7F8F9] dark:hover:bg-[#222222]">
                      <div className="w-[80%]">
                        <p className="leading-[32px] text-[22px] text-[#171717] font-[450] dark:text-white">
                          <strong>{repo.name}</strong>
                        </p>
                        <p className="pb-[14px]">
                          {repo.description || "Không có mô tả"}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className={`border leading-[20px] text-[12px] text-center bg-transparent px-2 py-[0.125rem] rounded-[4px] font-medium inline-flex items-center justify-center
    ${
      repo.language === "JavaScript"
        ? "text-yellow-500 border-yellow-400"
        : repo.language === "Python"
        ? "text-blue-500 border-blue-400"
        : repo.language === "Unknown"
        ? "text-gray-500 border-gray-400"
        : "text-[#6FCAA8] border-[#A9DCC9]"
    }`}
                          >
                            {repo.language || "Unknown"}
                          </span>

                          <span
                            className={`border leading-[20px] text-[12px] text-center bg-transparent px-2 py-[0.125rem] rounded-[4px] font-medium inline-flex items-center justify-center
    ${
      repo.folk
        ? "text-green-500 border-green-400"
        : "text-red-500 border-red-400"
    }`}
                          >
                            {repo.folk ? "Forked" : "Not Forked"}
                          </span>

                          <span className="text-purple-500 border border-purple-400 leading-[20px] text-[12px] text-center bg-transparent px-2 py-[0.125rem] rounded-[4px] font-medium inline-flex items-center justify-center">
                            {new Date(repo.created_at).toLocaleDateString(
                              "vi-VN",
                              {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              }
                            )}
                          </span>

                          <span className="text-blue-500 border border-blue-400 leading-[20px] text-[12px] text-center bg-transparent px-2 py-[0.125rem] rounded-[4px] font-medium inline-flex items-center justify-center">
                            {repo.stars ? `⭐ ${repo.stars}` : "No Stars"}
                          </span>

                          <span className="text-orange-500 border border-orange-400 leading-[20px] text-[12px] text-center bg-transparent px-2 py-[0.125rem] rounded-[4px] font-medium inline-flex items-center justify-center">
                            {repo.license || "No License"}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p>
                          <strong>Star:</strong> {repo.stargazers_count}
                        </p>
                      </div>
                    </div>
                  </a>
                  <div className="brcx"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
