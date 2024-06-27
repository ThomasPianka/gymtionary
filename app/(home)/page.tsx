import { fetchPageCount } from "@/app/lib/data";
import Pagination from "@/app/ui/pagination";
import Table from "@/app/ui/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills List"
}

export default async function Home({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  
  const totalPages = await fetchPageCount();

  return (
    <main>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-100 p-2 md:pt-0">
            <h1 className="text-3xl pl-3 py-2 md:py-4">Skills</h1>
            <Table currentPage={currentPage} />
            <div className="mt-5 flex w-full justify-center">
              <Pagination totalPages={totalPages} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
