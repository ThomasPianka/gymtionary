import Table from "@/app/ui/favorites/table"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Favorites"
}

export default async function Page({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  }
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className="mt-6 flow-root">
          <div className="inline-block min-w-full align-middle">
            <div className="rounded-lg bg-gray-100 p-2 md:pt-0">
              <h1 className="text-3xl pl-3 py-2 md:py-4">Favorites</h1>
              {/* <div className="flex mb-4">
                <Search placeholder="Search invoices..." />
              </div> */}
              <div className="mt-2">
                {/* <Suspense key={query + currentPage} fallback={<TableSkeleton />}> */}
                  <Table query={query} currentPage={currentPage} />
                {/* </Suspense> */}
              </div>
              {/* <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}