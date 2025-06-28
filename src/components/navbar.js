"use client";

import "@/app/styles/navbar.css";
import {
  AboutIcon,
  ContactIcon,
  FacebookIcon,
  GithubIcon,
  HomeIcon,
  InstagramIcon,
  LibraryIcon,
  LinkedinIcon,
  PhotoIcon,
  ProjectIcon,
  ScrollIcon,
  SettingIcon,
  WritingIcon,
} from "@/icon";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Component cho mỗi icon trong navbar
const NavIcon = ({
  href,
  icon: Icon,
  label,
  isExternal = false,
  onClick = null,
  isActive = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  // Hàm xuất hành khi click icon
  const handleClick = async (e) => {
    if (onClick) {
      setIsLoading(true);
      try {
        await onClick(e);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    }
  };

  // Hàm xuất hành khi click link
  const handleLinkClick = (e) => {
    if (
      href &&
      (href.startsWith("http") ||
        href.includes("") ||
        href.includes("about") ||
        href.includes("project") ||
        href.includes("photo") ||
        href.includes("writing") ||
        href.includes("library"))
    ) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  const IconElement = (
    <div className="Bar-section" aria-label={label} role="Navigation">
      <div
        className={`Icon-container ${isActive ? "Icon-bounce" : ""}`}
        alt={label}
      >
        <div className="icon2">
          <span className={`Icon ${isLoading ? "loading" : ""}`}>
            <Icon />
            <span className="tooltip cc">{label}</span>
          </span>
        </div>
        {isActive && <svg className="false-color dot display-true"></svg>}
      </div>
    </div>
  );

  if (onClick) {
    return <div onClick={handleClick}>{IconElement}</div>;
  }

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLinkClick}
      >
        {IconElement}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleLinkClick}>
      {IconElement}
    </Link>
  );
};

// Component cho mỗi phần của navbar
const NavSection = ({ children }) => (
  <>
    <div className="Bar-section">{children}</div>
    <div className="bar-y"></div>
  </>
);

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("Home");
    } else {
      const section = pathname.substring(1);
      setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
    }
  }, [pathname]);

  if (!mounted) return null;

  const menuItems = [
    { href: "/about", icon: AboutIcon, label: "About" },
    { href: "/project", icon: ProjectIcon, label: "Project" },
    { href: "/library", icon: LibraryIcon, label: "Library" },
    { href: "/photo", icon: PhotoIcon, label: "Photo" },
    { href: "/writing", icon: WritingIcon, label: "Writing" },
  ];

  const socialLinks = [
    {
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL,
      icon: FacebookIcon,
      label: "Facebook",
      isExternal: true,
    },
    // { href: "", icon: InstagramIcon, label: "Instagram", isExternal: true },
    {
      href: process.env.NEXT_PUBLIC_GITHUB_URL,
      icon: GithubIcon,
      label: "Github",
      isExternal: true,
    },
    {
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
      icon: LinkedinIcon,
      label: "Linkedin",
      isExternal: true,
    },
    { href: "", icon: ContactIcon, label: "Contact", isExternal: true },
  ];

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("Scroll");
  };

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setActiveSection(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="Bar-container">
      <div className="Bar">
        <NavSection>
          <NavIcon
            href="/"
            icon={HomeIcon}
            label="Home"
            isActive={activeSection === "Home"}
          />
        </NavSection>

        <NavSection>
          {menuItems.map((item) => (
            <NavIcon
              key={item.label}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={activeSection === item.label}
            />
          ))}
        </NavSection>

        <NavSection>
          {socialLinks.map((item) => (
            <NavIcon
              key={item.label}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isExternal={item.isExternal}
              isActive={activeSection === item.label}
            />
          ))}
        </NavSection>

        <div className="Bar-section">
          <NavIcon
            icon={SettingIcon}
            label={theme}
            onClick={handleToggleTheme}
            isActive={activeSection === theme}
          />
          <NavIcon
            href="#"
            icon={ScrollIcon}
            label="Scroll"
            onClick={handleScrollToTop}
            isActive={activeSection === "Scroll"}
          />
        </div>
      </div>
    </nav>
  );
}
