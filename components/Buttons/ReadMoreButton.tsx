"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

type ReadMoreButtonProps = {
  article: Article;
};
export default function ReadMoreButton({ article }: ReadMoreButtonProps) {
  const router = useRouter();

  function handleClick() {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >
      Read More
    </button>
  );
}
