import Image from "next/image"
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Red Flags and Butterflies",
  description: "Website for Sheryl Azzam's Red Flags and Butterflies",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >

    <Image
      src="/Texture.jpg"
      alt="Background"
      className="w-full h-full fixed bg-cover z-0 opacity-30 object-cover"
      width={2344}
      height={1560}
      priority
    />

    <div className="w-full absolute">

      {/*CONTENT*/}
      {children}

      <footer className="pt-20 md:pt-0 md:fixed bottom-0 w-full">
        <p className="text-lg text-center m-8 md:m-4 md:mx-auto">
          Made with ❤ by the Azzam family
        </p>
      </footer>
    </div>

    </body>
    </html>
  );
}
