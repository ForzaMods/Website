import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { PostMetaData } from '@/types/post';
import { Heading, Text } from '@radix-ui/themes';
import type { Metadata } from 'next';

const MDD = {
  title: "Blog | Forza Mods - The Forza Modding Community",
  description:
    "This is the official Forza Mods Blog. Here, you will find 'interesting' posts about the Forza scene.",
  openGraphDescription: null,
  base: "https://forzamods.dev",
  image: null || "",
};

export const metadata: Metadata = {
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

export default async function Blog() {
  const allPostsData: PostMetaData[] = getSortedPostsData();
  return (
    <>
      <div className="max-w-3xl mx-auto mb-10 p-10 min-h-[calc(100vh-24rem)]">
        <Heading as="h1" size="6">Blog</Heading>
        <div className="mt-10 flex flex-col gap-2">
          {allPostsData.length > 0 ? allPostsData.map(({ id, date, title }) => (
            <div key={id}>
              <Text size="2" color="gray" mr="4" className="font-menlo">{date}</Text>
              <Link href={`/blog/${id}`}>
                <Text size="2" className="underline font-menlo">{title}</Text>
              </Link>
              <br />
            </div>
          )) : <Text className="text-center font-medium" size="3">No posts available.</Text>}
        </div>
      </div>
    </>
  );
};