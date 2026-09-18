import React from "react";
import { blogPosts } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default async function Page({ params }) {
  const { slug } = await params;
  const data = blogPosts.filter((b) => b.category == slug.toUpperCase());

  return (
    <section className="bg-gray-100/60 min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-sm shadow-sm border border-gray-100 flex flex-col justify-between p-6 transition-all duration-300 hover:shadow-md"
            >
              <div>
                {/* Category */}
                <Link
                  className="text-[11px] font-semibold text-gray-600  uppercase tracking-wider block mb-3"
                  href={`/category/${post.category.toLocaleLowerCase()}`}
                >
                  {post.category}
                </Link>

                {/* Title */}
                <h2 className="text-[19px] font-bold text-black leading-snug tracking-tight mb-6 lg:h-[80px] lg:line-clamp-3 hover:text-[#D63438] transition-colors">
                  <Link href={`${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Image Container */}
                <Link href={`${post.slug}`} className="block">
                  <div className="relative w-full h-[280px] mb-6 flex items-center justify-center bg-transparent">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={post.id <= 3}
                    />
                  </div>
                </Link>

                {/* Excerpt */}
                <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mb-8">
                  {post.excerpt}
                </p>
              </div>

              {/* Footer Meta */}
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <p className="text-[11px] md:text[14px] font-medium text-gray-900 tracking-wider uppercase">
                  {post.author} <span className="mx-1">/</span> {post.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
