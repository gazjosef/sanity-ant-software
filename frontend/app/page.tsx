import { Suspense } from "react";

import { AllPosts } from "@/app/components/Posts";
import { settingsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

import Hero from "./components/Section/Hero2";
import About from "./components/Section/About";

export default async function Page() {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
  });

  return (
    <>
      <Hero />
      <About />
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}
