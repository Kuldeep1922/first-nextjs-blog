"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";
export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Machine Learning",
        "Data Science",
        "Developement",
        "Artificial Intelligence",
        "Deep Learning",
        "Neural Networks",
        "Natural Language Processing",
        "Computer Vision",
        "Big Data",
        "Cloud Computing",
        "Internet of Things",
        "Blockchain",
        "Cybersecurity",
        "Augmented Reality",
        "Virtual Reality",
        "Quantum Computing",
        "Edge Computing",
        "DevOps",
        "Microservices",
        "Kubernetes",
        "Docker",
        "Agile Methodology",
        "Scrum",
        "Continuous Integration",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png')] bg-cover bg-no-repeat md:bg-slate-500 md:dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              <span
                ref={el}
                className="underline bg-gradient-to-r from-[#e5e838] to-[#00fff2] bg-clip-text text-transparent"
              />
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-white">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <a
              href="/blog"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-slate-600 dark:text-red-600 dark:border dark:bg-white  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Go to Blogs
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt={"mockup"}
            />
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="mx-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Basic
              </h3>
              <p className="text-2xl font-bold mb-4 text-black dark:text-white">
                $10/month
              </p>
              <p className="mb-4 text-black dark:text-white">
                Basic features for individuals.
              </p>
              <button className="shadsc-button shadsc-button-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Choose Plan
              </button>
            </div>
            <div className="mx-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg border-2 border-yellow-500 transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Standard
              </h3>
              <p className="text-2xl font-bold mb-4 text-black dark:text-white">
                $20/month
              </p>
              <p className="mb-4 text-black dark:text-white">
                Standard features for small teams.
              </p>
              <button className="shadsc-button shadsc-button-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Choose Plan
              </button>
            </div>
            <div className="mx-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Premium
              </h3>
              <p className="text-2xl font-bold mb-4 text-black dark:text-white">
                $30/month
              </p>
              <p className="mb-4 text-black dark:text-white">
                All features for large organizations.
              </p>
              <button className="shadsc-button shadsc-button-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-200 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg mx-4">
              <Image
                src="/images/f1.png" // Replace with your image path
                alt="Feature 1"
                width={300}
                height={200}
                className="mb-4 rounded"
              />
              <h4 className="font-semibold text-black dark:text-white">
                Feature One
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Description of Feature One.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg mx-4">
              <Image
                src="/images/f1.png" // Replace with your image path
                alt="Feature 2"
                width={300}
                height={200}
                className="mb-4 rounded"
              />
              <h4 className="font-semibold text-black dark:text-white">
                Feature Two
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Description of Feature Two.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg mx-4">
              <Image
                src="/images/f3.png" // Replace with your image path
                alt="Feature 3"
                width={300}
                height={200}
                className="mb-4 rounded"
              />
              <h4 className="font-semibold text-black dark:text-white">
                Feature Three
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Description of Feature Three.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-200 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
            Our Blogs
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            Welcome to our blog section where we share insights, tips, and
            stories from our team. Stay tuned for the latest updates and
            articles that inspire and inform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "C Programming Tutorial",
                description: "This is a tutorial for learning C programming.",
                date: "02/03/2025",
                author: "Harry",
                link: "/blog/c-programming-tutorial",
              },
              {
                title: "ChatGPT vs. Gemini",
                description:
                  "Explore the differences between ChatGPT and Gemini.",
                date: "08/02/2025",
                author: "Harry",
                link: "/blog/chatgpt-vs-gemini",
              },
              {
                title: "C++ Programming Tutorial",
                description:
                  "Learn C++ programming from basics to advanced concepts.",
                date: "09/02/2025",
                author: "Harry",
                link: "/blog/cpp-programming-tutorial",
              },
              {
                title: "CSS Tutorial",
                description:
                  "Learn the fundamentals and advanced topics of CSS.",
                date: "11/02/2025",
                author: "Harry",
                link: "/blog/css-tutorial",
              },
              {
                title: "Markdown Syntax for Files, Widgets, Wikis",
                description:
                  "Discover how to utilize Markdown for effective documentation and sharing.",
                date: "02/03/2025",
                author: "Harry",
                link: "/blog/markdown-syntax",
              },
              {
                title: "Docker Tutorial",
                description: "Learn Docker from basics to advanced concepts.",
                date: "02/03/2025",
                author: "Harry",
                link: "/blog/docker-tutorial",
              },
              {
                title: "Java Programming Tutorial",
                description:
                  "Learn Java programming from basics to advanced concepts.",
                date: "02/03/2025",
                author: "Harry",
                link: "/blog/java-programming-tutorial",
              },
              {
                title: "Tailwind CSS Blog",
                description:
                  "Dive deep into Tailwind CSS for rapid UI development.",
                date: "02/03/2025",
                author: "Harry",
                link: "/blog/tailwind-css-blog",
              },
            ].map((blog, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-6 mx-3"
              >
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {blog.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {blog.description}
                </p>
                <a
                  href={blog.link}
                  className=" hover:underline border border-red-500  p-2 bg-blue-600 rounded-xl"
                >
                  Read More
                </a>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  {blog.date} by Kuldeep
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
