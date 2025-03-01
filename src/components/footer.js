import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "@/icon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex">
        <div className="flex">
          <Link href="/resume">
            <button className="c-btn keyboard">Resume</button>
          </Link>
        </div>
        <div className="brcy"></div>
        <div className="flex w-[170px] justify-between items-center">
          <FacebookIcon />
          <InstagramIcon />
          <GithubIcon />
          <LinkedinIcon />
        </div>
      </div>
    </footer>
  );
}
