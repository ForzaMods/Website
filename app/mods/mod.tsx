"use client"

import Link from "next/link";

export default function Mod({ data: { data: { id, title, shortDescription, tags, imageUrl } } }: { data: { data: { id: number, title: string, shortDescription: string, tags: string[], imageUrl: string } } }) {
  return (
    <Link
      href={"/mods/" + id}
      className="card card-bordered border-2 rounded-sm card-compact w-[28rem] bg-base-100 shadow-xl"
    >
      <figure>
        <img
          src={imageUrl}
          alt="Preview image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {shortDescription}
        </p>
        <div className="card-actions justify-end mt-3">
        {tags.length <= 3 ? (
          tags.map((tag, index) => (
            <div key={index} className="badge badge-outline">
              {tag}
            </div>
          ))
        ) : (
          <>
            {tags.slice(0, 2).map((tag, index) => (
              <div key={index} className="badge badge-outline">
                {tag}
              </div>
            ))}
            <div className="badge badge-outline">2 more ...</div>
          </>
        )}
      </div>
      </div>
    </Link>
  );
}
