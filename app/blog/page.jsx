import React from 'react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import fs from "fs"
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');
const dirContent = fs.readdirSync(contentDir, 'utf-8');
console.log(dirContent);
const blogs = dirContent.map((fileName) => {
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    ...data,
    content,
    slug: fileName.replace(/\.md$/, '') // Assuming files are markdown
  };
});
// const blogs = [
//   {
//     title: 'Blog Post 1',
//     description: 'This is the description for blog post 1.',
//     slug: 'blog-post-1',
//     date: '2023-10-01',
//     author: 'Author 1',
//     image: 'https://via.placeholder.com/150'
//   },
//   {
//     title: 'Blog Post 2',
//     description: 'This is the description for blog post 2.',
//     slug: 'blog-post-2',
//     date: '2023-10-02',
//     author: 'Author 2',
//     image: '' // Image not available
//   },
//   // Add more blog objects as needed
// ];

const BlogCard = ({ title, description, slug, date, author, image }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
    <img src={image || 'https://via.placeholder.com/150'} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      {/* <Button as="a" href={`/blogs/${slug}`} className="text-blue-500 hover:underline text-black dark:text-white"></Button> */}
      <Link href={`/blog/${slug}`} className={buttonVariants({ variant: "" })}>Read More</Link>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{date} by {author}</p>
    </div>
  </div>
);

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Blog Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      
    </div>
  );
};

export default Page;