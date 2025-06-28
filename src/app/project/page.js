"use client";

import { SearchInput } from "@/components/search-input";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function ProjectPage() {
  const [repos, setRepos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_GITHUB_API, {})
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(query.toLowerCase())
  );
  
  const sortedRepos = filteredRepos.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}>
      <header>
        <h1>Dự Án</h1>
      </header>

      <article>
        <p className="mb-[1.7em]">
          Những dự án lập trình cá nhân/pet projects của tớ từ Github. .
        </p>

        <hr className="hrlight" />

        <div>
          <SearchInput onChange={(e) => setQuery(e.target.value)} />
          <hr className="hrlight" />
          <div>
            <div className="repo">
              {filteredRepos.length === 0 ? (
                <p className="text-gray-500">Không tìm thấy repository nào.</p>
              ) : (
                filteredRepos.map((repo) => (
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
                ))
              )}
            </div>
          </div>
        </div>
      </article>
    </motion.main>
  );
}
