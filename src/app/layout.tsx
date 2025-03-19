import "./globals.css";
import ThemeProvider from "@/theme/ThemeProvider";

export const metadata = {
  title: "German Train Tracker",
  description: "Real-time train tracking across major German cities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
