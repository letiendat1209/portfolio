import "./styles/globals.css";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: {
    default: "Lê Tiến Đạt",
    template: "%s | Lê Tiến Đạt",
  },
  description: "Portfolio by LeTienDat.",
  icons: {
    icon: "/about.svg",
  },
  openGraph: {
    title: "My Website",
    description: "Website cung cấp dịch vụ tốt nhất.",
    url: "https://mywebsite.com",
    siteName: "My Website",
    images: [
      {
        url: "https://mywebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@letiendat1209",
    title: "My Website",
    description: "Portfolio by LeTienDat.",
    images: ["https://letiendat1209.vercel.app/"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors ease-out duration-[300ms] antialiased">
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="flex h-full mx-auto max-w-[720px] pt-[100px] p-4 mb-[168px]">
            {children}
            <Navbar />
            <div className="blur-overlay"></div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
