import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import ReportView from "./view";
import { Redis } from "@upstash/redis/nodejs";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allBlogs.map((p) => ({
    slug: p.slug,
  }));
}
const redis = Redis.fromEnv();

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const blog = allBlogs.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "blogs", slug].join(":"))) ?? 0;
  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header blog={blog} views={views} />
      <ReportView slug={blog.slug} type="blogs" />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={blog.body.code} />
      </article>
    </div>
  );
}
