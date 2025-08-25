import React from "react";
import Image from "next/image";

interface BlogPageProps {
  title: string;
  image: string;
  body: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ title, image, body }) => {
  return (
    <section className="body-font text-gray-700 dark:text-gray-300 py-24 bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="container mx-auto px-5 flex flex-col items-center justify-center">
        {/* Image */}
        <div className="w-full flex justify-center mb-10">
          <div className="relative w-full max-w-3xl">
            <Image
              src={image}
              alt={title}
              className="w-full h-auto max-h-[600px] object-contain rounded-xl border border-gray-200 dark:border-[#333] shadow-sm dark:shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:w-2/3 w-full bg-white dark:bg-[#1f1f1f] rounded-2xl p-8 shadow-md dark:shadow-lg transition-colors duration-300">
          <h1 className="title-font text-3xl sm:text-4xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            {title}
          </h1>
          <p className="text-lg leading-relaxed mb-6">{body}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
