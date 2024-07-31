"use client";

import { StarIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useEffect } from "react";

export const favorites = global?.window !== undefined ? window.localStorage.getItem("gymtionary-favorites") : [];
let array: any = [];

export function FavoriteButton({ name }: { name: string }) {
  function click(name: string) {
    if (window !== undefined) {
      const savedArray = window.localStorage.getItem("gymtionary-favorites");
      const favorites = savedArray === null ? [] : JSON.parse(savedArray);
      if (favorites.includes(name)) {
        const index = favorites.indexOf(name);
        favorites.splice(index, 1);
      } else {
        favorites.unshift(name);
      }
      window.localStorage.setItem("gymtionary-favorites", JSON.stringify(favorites));
    }
  }

  useEffect(() => {
    array = window.localStorage.getItem("gymtionary-favorites") !== null ? window.localStorage.getItem("gymtionary-favorites") : [];
  });

  console.log(array);

  return (
    <button
      className="hover:bg-gray-200 rounded-md"
      type="button"
      onClick={() => click(name)}
    >
      <span className="sr-only">Favorite</span>
      <StarIcon
        className={clsx(
          "w-8",
          {
            "fill-yellow-300": array.includes(name)
          }
        )}
      />
    </button>
  )
}