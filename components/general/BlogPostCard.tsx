"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { handleDelete } from "@/app/actions";

interface IappProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
  source: "post" | "edit";
}

export function BlogPostCard({ data, source }: IappProps) {
  const path = source === "post" ? "post" : "dashboard/edit";
  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-md transition-all hover:shadow-lg">
      <Link href={`/${path}/${data.id}`} className="block w-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.imageUrl}
            alt="Blog image"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {data.title}
            </h3>
            <p className="mb-4 min-h-[40px] text-sm text-gray-600 line-clamp-2">
              {data.content}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={data.authorImage}
                  alt={data.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">
                {data.authorName}
              </p>
            </div>
            <time className="text-xs text-gray-500">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(data.createdAt)}
            </time>
            <Button
              variant="destructive"
              size="icon"
              onClick={() => handleDelete(data.id)}
            >
              <Trash />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
