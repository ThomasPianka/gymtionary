import { fetchPageCount } from "@/app/lib/data";
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";
import { TableSkeleton } from "@/app/ui/skeletons";
import Table from "@/app/ui/table";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Skills List"
}

export default async function Page({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  
  const totalPages = await fetchPageCount(query);

  return (
    <main>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-100 p-2 md:pt-0">
            <h1 className="text-3xl pl-3 py-2 md:py-4">Skills</h1>
            <div className="flex mb-4">
              <Search placeholder="Search invoices..." />
            </div>
            <div className="mt-2">
              <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
                <Table query={query} currentPage={currentPage} />
              </Suspense>
            </div>
            <div className="mt-5 flex w-full justify-center">
              <Pagination totalPages={totalPages} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}