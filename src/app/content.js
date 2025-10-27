"use client";

import {motion} from "motion/react";
import BookCover from "@/app/bookcover";
import ArticleCard from "@/app/articlecard";
import { FaArrowRight, FaLink } from "react-icons/fa";

const articles = [
  {
    title: "Book aims to help girls identify signs of domestic violence",
    date: "October 20, 2025",
    publisher: "The Expositor",
    image: "/TheExpositor.png",
    link: "https://www.brantfordexpositor.ca/news/local-news/book-aims-to-help-girls-identify-signs-of-domestic-violence",
    description:
      "Red Flags and Butterflies is the first published fiction book for Sheryl Azzam, a trained medical writer who penned research articles and grants for the University Health Network in Toronto.",
  },
  {
    title: "Sheryl Azzam reveals the insidious nature of emotional abuse in Red Flags and Butterflies",
    date: "October 14, 2025",
    image: "/QuillAndQuire.png",
    publisher: "Quill & Quire",
    link: "https://quillandquire.com/authors/sheryl-azzam-reveals-the-insidious-nature-of-emotional-abuse-in-red-flags-and-butterflies/",
    description:
      "Sheryl Azzam was tinkering with fiction for the first time. Her intention was to write about reading disabilities, because her son was having some difficulties, but as Azzam worked to help a friend and their children escape domestic violence, that focus changed.",
  },
];


export default function Content() {
  return (
    <>
      <section className="flex md:mt-20 flex-col justify-center">
        <div
          className="md:flex md:flex-row md:justify-between md:items-center md:h-full md:my-auto pt-6 md:pt-0"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{delay: 0, duration: 0.2}}
            variants={{
              visible: {opacity: 1, x: 0},
              hidden: {opacity: 0, x: -100},
            }}
            className="text-center md:w-3/5 md:text-left py-2 md:pb-0"
          >
            <h2
              className="text-4xl xl:text-5xl py-2 font-extrabold "
            >
              Red Flags and Butterflies
            </h2>

            <h3 className="text-xl sm:text-xl font-bold py-2 text-gray-800">
              Written By <a className="text-sky-600 hover:text-sky-800 hover:underline inline" target="_blank" href="https://sherylazzam.com">Sheryl Azzam <FaLink className="inline"/></a>
            </h3>

            <p
              // bg-linear-to-b from-sky-300 to-sky-600 p-10 rounded-2xl
              className="text-md sm:text-lg md:text-xl text-gray-800 w-full max-w-[600] mx-auto md:max-w-full md:pr-10 md:mx-0 "
            >
              Straight A student, swim team star, talented painter — tenth-grader Lexie has worked hard to become the
              perfect applicant for Sunridge High’s prestigious fine art program. She’s even got a shot at a swimming
              scholarship. Everyone she loves is supportive of her application.
              Everyone, that is, except her dad.

              Lexie’s dad doesn’t see the point of some overpriced art school. He wants Lexie and her brother, Jonah, at
              home to help launch his new renovation business. The work will cut into Lexie’s already overloaded schedule,
              but the idea of refusing her dad makes her stomach churn with anxiety. So she agrees to help, just for a
              little while. If she supports his plan, then he’ll have to support hers, right? It’s only fair.
              But Lexie and her dad have different definitions of fair. Soon, Lexie must make an impossible choice between
              being who her dad wants her to be, and being true to herself.
            </p>

            <div className="mt-5">
              <a className="text-2xl text-sky-600 hover:text-sky-800 hover:underline inline" target="_blank" href="https://www.google.ca/books/edition/Red_Flags_and_Butterflies/e78t0QEACAAJ?kptab=getbook">
                Find on Google Books <FaArrowRight className="inline"/>
              </a>
            </div>

          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{delay: 0, duration: 0.2}}
            variants={{
              visible: {opacity: 1, x: 0},
              hidden: {opacity: 0, x: 100},
            }}
            className="flex justify-center md:justify-end mx-auto md:mx-0 relative pt-2 w-9/10 sm:w-3/5 md:w-1/2"
          >
            <BookCover/>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{delay: 0.1, duration: 0.4}}
        variants={{
          visible: {opacity: 1, y: 0},
          hidden: {opacity: 0, y: 100},
        }}
        className="max-w-8xl mx-auto pt-10">
        <h2 className="mt-12 md:mt-0 text-4xl text-center font-bold text-gray-900 mb-8">In the News</h2>

        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between items-center gap-8">
          {articles.map((article, index) => (
            <div key={index} className="w-full flex justify-center">
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
}