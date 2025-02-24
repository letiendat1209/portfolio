import "./styles/globals.css";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors ease-out duration-[300ms]">
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
