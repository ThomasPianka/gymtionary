const shimmer = "relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-200 before:to-transparent";

function TableRowSkeleton() {
  return (
    <tr className="h-14 relative w-full border-b border-gray-300 py-3 text-base last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <td className="bg-gray-200 whitespace-nowrap py-3 mx-6 h-6"></td>
    </tr>
  )
}

export function TableSkeleton() {
  return (
    <div className={`${shimmer} overflow-hidden bg-gray-100 shadow-sm`}>
      <table className="hidden min-w-full text-gray-900 md:table">
        <tbody className="bg-white">
          <TableRowSkeleton/>
          <TableRowSkeleton/>
          <TableRowSkeleton/>
          <TableRowSkeleton/>
        </tbody>
      </table>
    </div>
  )
}