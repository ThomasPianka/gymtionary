const shimmer = "relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-200 before:to-transparent";

export function TableSkeleton() {
  return (
    <div className={`${shimmer} overflow-hidden bg-gray-100 shadow-sm`}>
      <div className="border-b border-gray-300 py-3 bg-gray-200 rounded-t-lg">
        <div className="whitespace-nowrap py-3 mx-6 bg-gray-300 rounded-md"></div>
      </div>
      <div className="border-b border-gray-300 py-3 bg-gray-200">
        <div className="whitespace-nowrap py-3 mx-6 bg-gray-300 rounded-md"></div>
      </div>
      <div className="border-b border-gray-300 py-3 bg-gray-200">
        <div className="whitespace-nowrap py-3 mx-6 bg-gray-300 rounded-md"></div>
      </div>
      <div className="py-3 bg-gray-200 rounded-b-lg">
        <div className="whitespace-nowrap py-3 mx-6 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  )
}