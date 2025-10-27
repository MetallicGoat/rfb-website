"use client";

import Image from "next/image";
import {motion} from "motion/react";
import {FaArrowRight} from "react-icons/fa";

export default function ArticleCard({ title, date, publisher, image, link, description }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      className="group flex flex-col sm:flex-row bg-white/50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 w-full max-w-4xl mx-auto"
    >
      {/* Image */}
      <div className="relative w-full sm:w-1/3 h-64 sm:h-auto">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6 sm:w-2/3">
        <div>
          <p className="text-sm text-gray-500 mb-1">{date}</p>
          <p className="text-sm text-gray-600 mb-2 italic">By {publisher}</p>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mt-3 line-clamp-3">{description}</p>
        </div>
        <div className="mt-4">
          <span className="inline-block text-sky-600 font-medium hover:underline">
            Read more <FaArrowRight className="inline"/>
          </span>
        </div>
      </div>
    </motion.a>
  );
}
