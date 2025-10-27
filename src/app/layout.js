import Image from "next/image"
import {Crimson_Pro, Merriweather} from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson-pro',
  display: 'swap',
})

export const metadata = {
  title: "Red Flags and Butterflies",
  description: "Website for Sheryl Azzam's Red Flags and Butterflies",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className={crimsonPro.className}>
    <body className="antialiased">

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

      <footer className="pt-20">
        <p className="text-lg text-center m-8">
          Made with ❤ by the Azzam family
        </p>
      </footer>
    </div>

    </body>
    </html>
  );
}
