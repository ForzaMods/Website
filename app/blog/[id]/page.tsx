import { getPostData, getAllPostIds } from "@/lib/posts";
import { PostData } from "@/types/post";
import { Heading, Text } from "@radix-ui/themes";
// @ts-ignore
import { Markup } from "react-render-markup";
import hljs from "highlight.js";
import markdownit from "markdown-it"
import "@/styles/markdown.css"
import { CustomH1, CustomH2, CustomH3, CustomH4, CustomH5, CustomH6, CustomImg, CustomLi, CustomLink, CustomOl, CustomP, CustomUl } from '@/components/custom-components';
import csharp from "highlight.js/lib/languages/csharp";
import json from "highlight.js/lib/languages/json";
import cpp from "highlight.js/lib/languages/cpp";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import java from "highlight.js/lib/languages/java";
import ruby from "highlight.js/lib/languages/ruby";
import php from "highlight.js/lib/languages/php";
import swift from "highlight.js/lib/languages/swift";
import kotlin from "highlight.js/lib/languages/kotlin";
import typescript from "highlight.js/lib/languages/typescript";
import scala from "highlight.js/lib/languages/scala";
import go from "highlight.js/lib/languages/go";
import rust from "highlight.js/lib/languages/rust";
import perl from "highlight.js/lib/languages/perl";
import lua from "highlight.js/lib/languages/lua";
import sql from "highlight.js/lib/languages/sql";
import markdown from "highlight.js/lib/languages/markdown";
import yaml from "highlight.js/lib/languages/yaml";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import shell from "highlight.js/lib/languages/shell";
import nginx from "highlight.js/lib/languages/nginx";
import http from "highlight.js/lib/languages/http";
import ini from "highlight.js/lib/languages/ini";

hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("json", json);
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("java", java);
hljs.registerLanguage("ruby", ruby);
hljs.registerLanguage("php", php);
hljs.registerLanguage("swift", swift);
hljs.registerLanguage("kotlin", kotlin);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("scala", scala);
hljs.registerLanguage("go", go);
hljs.registerLanguage("rust", rust);
hljs.registerLanguage("perl", perl);
hljs.registerLanguage("lua", lua);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("dockerfile", dockerfile);
hljs.registerLanguage("shell", shell);
hljs.registerLanguage("nginx", nginx);
hljs.registerLanguage("http", http);
hljs.registerLanguage("ini", ini);

import "highlight.js/styles/atom-one-dark.css";

import { notFound } from "next/navigation";
import { Metadata } from "next";

const replace = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  h6: CustomH6,
  p: CustomP,
  a: CustomLink,
  img: CustomImg, 
  ul: CustomUl,
  ol: CustomOl,
  li: CustomLi,
};

export async function generateMetadata(
  { params }: { params: { id: string } },
): Promise<Metadata> {
  let postData = null;
  try {
    postData = await getPostData(params.id);
  } catch (error) {
    notFound();
  }
  
  const MDD = {
    title: `${postData.title} | Forza Mods - The Forza Modding Community`,
    description: postData.shortDescription,
    openGraphDescription: null,
    base: "https://forzamods.dev",
    image: '',
  };
   
  return {
    metadataBase: new URL(MDD.base || 'https://d4vss.net'),
    title: MDD.title,
    description: MDD.description,
    openGraph: {
      title: MDD.title,
      description: MDD.openGraphDescription || MDD.description,
      images: [MDD.image],
    },
    twitter: {
      title: MDD.title,
      description: MDD.openGraphDescription || MDD.description,
      images: [MDD.image],
      creator: "https://d4vss.net",
    },
  }
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(path => path.params);
}

export default async function Post({ params }: { params: { id: string } }) {
  let postData = null;
  try {
    postData = await getPostData(params.id);
  } catch (error) {
    notFound();
  }
  const md = markdownit({
    html: true,
    linkify: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }
  
      return '';
    }
  })

  const result = md.render(postData.contentHtml);
  
  return (
    <>
      <div className="max-w-4xl mx-auto mb-10 p-10 min-h-[calc(100vh-24rem)]">
        <Heading size="5" className="text-accent-11 leading-none font-menlo">{postData.title}</Heading>
        <Text size="2" color="gray"><span className="uppercase font-menlo font-extrabold">{postData.author}</span> - {postData.date}</Text>
        <div id="content" className="mt-7 md blog max-w-4xl">
          <Markup markup={result} replace={replace} />
        </div>
      </div>
    </>
  );
};