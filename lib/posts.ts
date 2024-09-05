import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMetaData, PostData } from '@/types/post';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(): PostMetaData[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as Omit<PostMetaData, 'id'>),
    };
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string): Promise<PostData> {
  if (!fs.existsSync(postsDirectory)) {
    throw new Error(`Directory not found: ${postsDirectory}`);
  }

  const fullPath = path.join(postsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    id,
    contentHtml: matterResult.content,
    title: matterResult.data.title,
    date: matterResult.data.date,
    author: matterResult.data.author,
    shortDescription: matterResult.data.shortDescription
  } as PostData;
}

export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}
