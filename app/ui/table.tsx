import { fetchSkills } from "@/app/lib/data";
import Link from "next/link";

export default async function SkillsTable({
  query,
  currentPage
}: {
  query: string;
  currentPage: number;
}) {
  const skills = await fetchSkills(query, currentPage);

  return (
    <div>
      <div className="md:hidden">
        {skills?.map(skill => (
          <div key={skill._id.toString()} className="mb-2 w-full rounded-md bg-white p-4 relative hover:bg-gray-300">
            <Link
              href={`${skill._id.toString()}`}
              className="after:absolute after:inset-0"
            >
              {skill.name}
            </Link>
          </div>
        ))}
      </div>
      <table className="hidden min-w-full text-gray-900 md:table">
        {/* <thead className="rounded-lg text-left text-lg font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">Name</th>
          </tr>
        </thead> */}
        <tbody className="bg-white">
          {skills?.map(skill => (
            <tr
              key={skill._id.toString()}
              className="relative w-full border-b py-3 text-base last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg hover:bg-gray-200"
            >
              <td className="whitespace-nowrap py-3 pl-6">
                <Link
                  href={`${skill._id.toString()}`}
                  className="after:absolute after:inset-0"
                >
                  {skill.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}