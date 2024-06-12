"use client";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

export default async function StringMarkdown({ text } : { text: string }) { 
  console.log(text)
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(text)
 
  return <div className="markdown-body p-5 md:p-10 border border-base-300" dangerouslySetInnerHTML={{__html: file}}>
  </div>
}