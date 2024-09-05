export interface PostMetaData {
  id: string;
  title: string;
  date: string;
  author: string;
  shortDescription: string;
}

export interface PostData extends PostMetaData {
  contentHtml: any;
}
