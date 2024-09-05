import "@/styles/markdown.css";

import type { Metadata } from "next";
import Image from "next/image";
// @ts-ignore
import { Markup } from "react-render-markup";
import hljs from "highlight.js";
import markdownit from "markdown-it"
import { CustomH1, CustomH2, CustomH3, CustomH4, CustomH5, CustomH6, CustomImg, CustomLi, CustomLink, CustomOl, CustomP, CustomUl } from '@/components/custom-components';

import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";

const tools = [
  {
    name: "Forza Mods AIO",
    repo: "Forza-Mods-AIO",
    path: "/aio",
    images: ["https://i.imgur.com/aySeiqy.png", "https://i.imgur.com/55Bq4CG.png", "https://i.imgur.com/Vpmwmk7.png", "https://i.imgur.com/04mYA45.png"],
    supported_games: "FH4 & FH5",
    readmeUrl: "https://raw.githubusercontent.com/ForzaMods/Forza-Mods-AIO/Main/README.md",
    urls: [
      { href: "https://github.com/ForzaMods/Forza-Mods-AIO/releases/latest/download/Forza-Mods-AIO.exe", name: "Download", new_tab: false },
      { href: "https://github.com/ForzaMods/Forza-Mods-AIO", name: "GitHub", new_tab: true }
    ],
  },
  {
    name: "Mod Manager",
    repo: "Mod-Manager",
    path: "/mod-manager",
    supported_games: "FH5",
    readmeUrl: "https://raw.githubusercontent.com/ForzaMods/Mod-Manager/main/README.md",
    images: [],
    urls: [ { href: "https://github.com/ForzaMods/Mod-Manager", name: "Source Code", new_tab: true } ],
  },
  {
    name: "Fov Menu",
    repo: "Fov-Menu",
    path: "/fov-menu",
    supported_games: "FH4 & FH5",
    readmeUrl: "https://raw.githubusercontent.com/ForzaMods/Fov-Menu/main/README.md",
    images: [],
    urls: [
      { href: "https://github.com/ForzaMods/Fov-Menu/releases/latest/download/Fov-Menu.exe", name: "Download", new_tab: false },
      { href: "https://github.com/ForzaMods/Fov-Menu", name: "Source Code", new_tab: true }
    ],
  },
  {
    name: "Car Table",
    repo: "Car-Table",
    path: "/car-table",
    readmeUrl: "https://raw.githubusercontent.com/ForzaMods/Car-Table/main/README.md",
    images: [],
    supported_games: "FH5",
    urls: [
      {href: "https://github.com/ForzaMods/Car-Table/releases/latest/download/Car-Table.exe", name: "Download", new_tab: false },
      { href: "https://github.com/ForzaMods/Car-Table", name: "Source Code", new_tab: true }
    ],
  }
];

export async function generateMetadata(
  { params }: { params: { name: string } },
): Promise<Metadata> {
  const tool = tools.find((tool) => tool.path === `/${params.name}`);
  if (!tool) {
    return notFound();
  }
  
  const MDD = {
    title: `${tool?.name} | Forza Mods - The Forza Modding Community`,
    description: null || "",
    openGraphDescription: null,
    base: "https://forzamods.dev",
    image: tool?.images[0] || '',
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

export default async function ToolView({ params }: { params: { name: string } }) {
  const tool = tools.find((tool) => tool.path === `/${params.name}`);
  if (!tool) {
    return notFound();
  }

  async function UrlMarkdown({ readmeUrl } : { readmeUrl: string }) {
    const res = await fetch(readmeUrl);
    const markdown = await res.text();

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
  
    const result = md.render(markdown);

    return <div className="md tool p-5 md:p-10 border border-accent-6">
      <Markup markup={result} replace={replace} />
    </div>
  }

  return (
    <main className="p-10 min-h-[calc(100vh-24rem)]">
      <h1 className="text-center text-3xl font-bold mt-10">{tool.name}</h1>

      <div className="flex justify-center max-md:flex-col max-md:items-center gap-5 my-5">
        {tool.urls.map((url, index) => (
          <Button key={index} asChild variant="soft" radius="small">
            <Link href={url.href} target={url.new_tab ? "_blank" : "_self"} rel="noopener noreferrer">
              {url.name}
            </Link>
          </Button>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="mt-10 max-w-5xl">
          <UrlMarkdown readmeUrl={tool.readmeUrl} />
        </div>
      </div>

      <p className="text-center mt-10">
        <strong>Supported Games:</strong> {tool.supported_games}
      </p>

      <div className={"flex flex-col items-center gap-5 w-full" + (tool.images.length != 0 ? " mt-10" : "")}>
        {tool.images.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              width={768}
              height={0}
            />
        ))}
      </div>      
    </main>
  );
}