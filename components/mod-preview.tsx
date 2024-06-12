import { Badge, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function ModPreview({ data: { id, title, shortDescription, tags, imageCount } }: { data: { id: string, title: string, shortDescription: string, tags: any, imageCount: number } }) {
  return (
    <Link
      href={"/mods/" + id}
      className="card border border-[var(--accent-6)] rounded-sm card-compact w-[28rem] bg-base-100 shadow-xl"
    >
      <figure>
        <Image
        className="aspect-video object-cover w-full h-full"
          src={"https://f1.forzamods.dev/mods/" + id + "/image0.webp"}
          alt="Preview image"
          width={0}
          height={0}
          priority={true}
          unoptimized	
        />
      </figure>
      <div className="p-3">
        <Heading as="h3" size="3">{title}</Heading>
        <Text size="2" className="whitespace-pre-line block break-all overflow-hidden text-ellipsis h-16">{shortDescription}</Text>
        <div className="flex gap-2 justify-end mt-3">
        {tags.length <= 3 ? (
          tags.map((tag :string, index : number) => (
            <Badge key={index}>
              {tag}
            </Badge>
          ))
        ) : (
          <>
            {tags.slice(0, 2).map((tag :string, index : number) => (
              <div key={index} className="badge badge-outline">
                {tag}
              </div>
            ))}
            <div className="badge badge-outline">{tags.length - 2} more ...</div>
          </>
        )}
      </div>
      </div>
    </Link>
  );
}