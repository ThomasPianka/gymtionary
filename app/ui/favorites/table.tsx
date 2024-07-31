"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FavoriteButton } from "./buttons";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";


export default function FavoritesTable({
  query,
  currentPage
}: {
  query: string;
  currentPage: number;
}) {
  const [skills, setSkills] = useState<string[]>([]);

  function getTable() {
    if (window !== undefined) {
      const savedArray = window.localStorage.getItem("gymtionary-favorites");
      const favorites = savedArray === null ? [] : JSON.parse(savedArray);
      setSkills(favorites);
    }
  }

  useEffect(() => {
    const array: any = window.localStorage.getItem("gymtionary-favorites") !== null ? window.localStorage.getItem("gymtionary-favorites") : [];
    setSkills(JSON.parse(array));
  }, []);

  return (
    <div>
      <div className="md:hidden">
        {skills?.map(skill => (
          <div key={skill} className="mb-2 w-full rounded-md bg-white p-4 relative hover:bg-gray-300">
            <Link
              href={`${skill}`}
              className="after:absolute after:inset-0"
            >
              {skill}
            </Link>
          </div>
        ))}
      </div>
      <table className="hidden min-w-full text-gray-900 md:table">
        <tbody className="bg-white">
          {skills?.map(skill => (
            <tr
              key={skill}
              className="relative w-full border-b py-3 text-base last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
              <td className="whitespace-nowrap py-3 pl-6">
                <div className="flex justify-between items-center">
                  {skill}
                  <div className="flex justify-between items-center mr-2 space-x-2">
                    <form className="flex items-center" onClick={() => getTable()}>
                      <FavoriteButton name={skill}/>
                    </form>
                    <Link
                      href={`${skill}`}
                      className="rounded-md transition-transform hover:translate-x-[3px]"
                    >
                      <ChevronDoubleRightIcon className="w-8"/>
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}