import "@/styles/markdown.css";

import { getXataClient } from "@/xata";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StringMarkdown from "@/components/string-md";
import { Button } from "@radix-ui/themes";

const xata = getXataClient();

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const record = await xata.db.userMods
      .select([
        "title",
        "imageCount",
        "longDescription",
        "shortDescription",
        "tags",
        "modPath",
        "additional",
      ])
      .filter({
        id: { $is: params.id },
      })
      .getFirst();

    const MDD = {
      title: `${record?.title} | Forza Mods - The Forza Modding Community`,
      description: `${record?.shortDescription}`,
      openGraphDescription: null,
      base: "https://forzamods.dev",
      image: `https://f1.forzamods.dev/mods/${params.id}/image0.webp`,
    };

    return {
      metadataBase: new URL(MDD.base || "https://d4vss.net"),
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
    };
  } catch {
    return {};
  }
}

export default async function ModView({ params }: { params: { id: string } }) {

  try {
    const record = await xata.db.userMods
      .select([
        "title",
        "imageCount",
        "longDescription",
        "tags",
        "modPath",
        "additional",
        "xata.createdAt",
        "author",
      ])
      .filter({
        id: { $is: params.id },
      })
      .getFirst();

    if (!record?.title) {
      return notFound();
    }
    const imageCount = record?.imageCount || 0;
    return (
      <main className="p-5 md:p-10 flex justify-center">
        <div className="flex flex-col items-center min-h-[calc(100vh-28rem)] w-4/5">
          <h1 className="text-2xl font-bold">{record?.title}</h1>
          <p className="flex gap-2 mb-10">
            <span className="opacity-70">
              Published:{" "}
              {new Date(record?.xata.createdAt || 0).toLocaleDateString()}
            </span>
          </p>
          <div className="flex flex-col gap-5">
            <img
              src={`https://f1.forzamods.dev/mods/${record.id}/image0.webp`}
              alt="Main image"
            />
            <div className="flex flex-wrap gap-1 gap-y-5 md:gap-5 lg:justify-between">
              {[...Array(Math.min(imageCount - 1, 9))].map((_, index) => (
                <img
                  key={index}
                  src={`https://f1.forzamods.dev/mods/${record.id}/image${
                    index + 1
                  }.webp`}
                  alt="Side image"
                  className="w-[31%] lg:w-[22rem]"
                />
              ))}
            </div>
          </div>

          <div className="mt-10 w-full">
            <StringMarkdown
              text={
                "## Description:\n" +
                (record.longDescription?.toString() ||
                  "No description provided.")
              }
            />
          </div>

          <Button className="w-96" asChild>
            <Link
              href={`https://f1.forzamods.dev/mods/${record.id}/versions/latest`}
              className="cursor-pointer mt-10"
            >
              Download mod
            </Link>
          </Button>
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}