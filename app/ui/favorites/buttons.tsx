"use client";

import { StarIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useEffect, useState } from "react";

export function FavoriteButton({ name }: { name: string }) {
  const [favorites, setFavorites] = useState<string[]>([]);

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
      setFavorites(favorites);
    }
  }

  useEffect(() => {
    const array: any = window.localStorage.getItem("gymtionary-favorites") !== null ? window.localStorage.getItem("gymtionary-favorites") : [];
    setFavorites(array);
  }, []);

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
            "fill-yellow-300": favorites.includes(name),
            "hover:fill-none": favorites.includes(name),
            "hover:fill-yellow-300": !favorites.includes(name)
          }
        )}
      />
    </button>
  )
}