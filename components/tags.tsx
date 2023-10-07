import React from "react";

export default function Tags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-6">
      {tags?.map((tag, index) => (
        <li
          className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
          key={index}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
