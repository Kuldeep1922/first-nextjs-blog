import OnThisPage from "@/components/OnThisPage.js";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import fs from "fs"
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from "rehype-slug";

// const blog = {
//     author: "John Doe",
//     date: "October 1, 2023",
//     content: "<p>This is the blog content.</p>"
// };

export default async function Page({ params }) {
    const slug = (await params).slug;
    const filepath = `content/${slug}.md`
    if (!fs.existsSync(filepath)) {
        notFound()
        return
    }

    const fileContent = fs.readFileSync(filepath, "utf-8")
    const { data: blog, content } = matter(fileContent)

    const processor = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypeAutolinkHeadings)
        .use(rehypeSlug)
        .use(rehypePrettyCode, {
            theme: "one-dark-pro",
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ]
        })
    const htmlContent = (await processor.process(content)).toString()

    return (
        <div className="m-auto my-2 max-w-xl p-6  shadow-md rounded-lg ">
            <h1 className="text-5xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-700 dark:text-gray-300 italic">{`by ${blog.author} ${blog.date}`}</p>
            <blockquote className="border-l-4 border-blue-500 italic pl-4 mt-4 rounded-l-sm">
                <p>This is a quote.</p>
            </blockquote>
            <div className="mt-4 prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }} ></div>
            <OnThisPage htmlContent={htmlContent} />
        </div>
    );
}