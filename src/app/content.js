"use client";

import {motion} from "motion/react";
import BookCover from "@/app/bookcover";

export default function Content() {
  return (
    <section className="md:min-h-screen flex flex-col justify-center">
      <div
        className="md:flex md:flex-row md:justify-between md:items-center md:h-full md:my-auto"
      >
        <div className="text-center md:w-3/5 md:text-left py-2 md:pb-0">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{delay: 0, duration: 0.2}}
            variants={{
              visible: {opacity: 1, x: 0},
              hidden: {opacity: 0, x: -100},
            }}
            className="text-3xl sm:text-4xl xl:text-5xl py-2 font-extrabold "
          >
            Red Flags and Butterflies
          </motion.h2>

          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{delay: 0.05, duration: 0.2}}
            variants={{
              visible: {opacity: 1, x: 0},
              hidden: {opacity: 0, x: -100},
            }}
            className="text-md sm:text-lg lg:text-xl xl:text-2xl font-bold py-2 text-gray-800"
          >
            Written By <a className="text-sky-600 hover:text-sky-800" target="_blank" href="https://sherylazzam.com">Sheryl Azzam</a>
          </motion.h3>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{delay: 0.1, duration: 0.2}}
            variants={{
              visible: {opacity: 1, x: 0},
              hidden: {opacity: 0, x: -100},
            }}

            // bg-gradient-to-b from-sky-300 to-sky-600 p-10 rounded-2xl
            className=" sm:text-lg xl:text-xl text-gray-800 w-full md:max-w-full md:pr-10 md:mx-0 "
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
          </motion.p>

          <motion.div
            className="hidden my-8 md:flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{delay: 0.15, duration: 0.2}}
            variants={{
              visible: {opacity: 1, x: 0},
              hidden: {opacity: 0, x: -100},
            }}
          >
            {/*MAKE SURE TO UPDATE OTHER BUTTON*/}
            <a
              className="p-5 z-50 font-bold text-xl bg-gradient-to-b from-sky-300 to-sky-500 hover:from-sky-400 hover:to-sky-600 transition duration-150 rounded-2xl"
              target="_blank"
              href="https://www.indigo.ca/en-ca/red-flags-and-butterflies/9781770868069.html"
            >
              Pre-Order
            </a>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          transition={{delay: 0.2, duration: 0.2}}
          variants={{
            visible: {opacity: 1, x: 0},
            hidden: {opacity: 0, x: 100},
          }}
          className="flex justify-center md:justify-end mx-auto md:mx-0 relative pt-2 w-9/10 sm:w-3/5 md:w-1/2"
        >
          <BookCover/>
        </motion.div>
      </div>

      <div className="my-8 flex justify-center md:hidden">
        {/*MAKE SURE TO UPDATE OTHER BUTTON*/}
        <a
          className="p-5 z-50 font-bold text-xl bg-gradient-to-b from-sky-300 to-sky-500  hover:from-sky-400 hover:to-sky-600 transition duration-150 rounded-2xl"
          target="_blank"
          href="https://www.indigo.ca/en-ca/red-flags-and-butterflies/9781770868069.html"
        >
          Pre-Order
        </a>
      </div>
    </section>
  );
}