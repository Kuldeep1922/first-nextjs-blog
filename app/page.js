"use client"
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
import React,{useRef,useEffect} from "react";
export default function Home() {
   const el = useRef(null);

   useEffect(() => {
     const typed = new Typed(el.current, {
      strings: ["Coding", "Machine Learning", "Data Science", "Developement"],
       typeSpeed: 50,
     });

     return () => {
       // Destroy Typed instance during cleanup to stop animation
       typed.destroy();
     };
   }, []);
   
  return (
    <div>
      <section className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png')] bg-cover bg-no-repeat md:bg-white md:dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies <span ref={el} className="underline"/>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
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

      <section className="py-12 bg-gray-200 dark:bg-gray-900 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
            Our Blogs
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            Welcome to our blog section where we share insights, tips, and
            stories from our team. Stay tuned for the latest updates and
            articles that inspire and inform.
          </p>
          <div className="relative">
            <Carousel className="w-full overflow-hidden relative">
              <CarouselContent className="flex gap-6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="flex-none w-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                          <h4 className="font-semibold text-black dark:text-white mb-2">
                            Blog Title {index + 1}
                          </h4>
                          <p className="mb-4 text-gray-600 dark:text-gray-300">
                            A brief description of the blog post goes here.
                          </p>
                          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
                            Read More
                          </button>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Previous Button */}
              <CarouselPrevious className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700">
                ←
              </CarouselPrevious>
              {/* Next Button */}
              <CarouselNext className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700">
                →
              </CarouselNext>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
