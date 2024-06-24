import { getSkills } from "@/app/lib/data";
import Link from "next/link";

export default async function SkillsTable() {
  const skills = await getSkills();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {skills?.map(skill => (
              <div className="mb-2 w-full rounded-md bg-white p-4">
                <Link
                  href="/"
                  key={skill.id}
                >
                  <p>{skill.name}</p>
                </Link>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-lg font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">Name</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {skills?.map(skill => (
                <tr
                  key={skill.id}
                  className="w-full border-b py-3 text-base last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <Link
                      href="/"
                      key={skill.id}
                    >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    
                      <p>{skill.name}</p>
                      </td>
                    </Link>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}