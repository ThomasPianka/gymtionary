import connection from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";
import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 4;

const skills = [
  {
    _id: new ObjectId("6679a1abdf0855b8785c60bc"),
    name: "Forward Roll"
  },
  {
    _id: new ObjectId("6679b97cdf0855b8785c60bd"),
    name: "Backward Roll"
  },
  {
    _id: new ObjectId("6679b991df0855b8785c60be"),
    name: "Handstand"
  },
  {
    _id: new ObjectId("6679b99bdf0855b8785c60bf"),
    name: "Cartwheel"
  },
  {
    _id: new ObjectId("667dc99653ea3571c2994916"),
    name: "Round-Off"
  },
  {
    _id: new ObjectId("667dc9ac53ea3571c2994917"),
    name: "Front Walkover"
  },
  {
    _id: new ObjectId("667dc9bf53ea3571c2994918"),
    name: "Back Walkover"
  },
  {
    _id: new ObjectId("667dc9ec53ea3571c2994919"),
    name: "Handstand Forward Roll"
  }
];

export async function fetchPageCount(query: string) {
  noStore();
  try {
    const client = await connection;
    const count = await client.db("gymtionary")
      .collection("skills")
      .aggregate([
        { $match: { name: { $regex: `${query}`, $options: 'i' } } },
        { $count: "total" }
      ])
      .toArray();
    return count.length == 0 ? 0 : Math.ceil(count[0].total / ITEMS_PER_PAGE);
    // return Math.ceil(skills.length / ITEMS_PER_PAGE)
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of skills.");
  }
}

export async function fetchSkills(query: string, currentPage: number) {
  noStore();
  try {
    const client = await connection;
    const data = await client.db("gymtionary")
      .collection("skills")
      .aggregate([
        { $match: { name: { $regex: `${query}`, $options: 'i' } } },
        { $sort: { name: 1 } },
        { $skip: (currentPage - 1) * ITEMS_PER_PAGE },
        { $limit: ITEMS_PER_PAGE }
      ])
      .toArray();
    return data;
    // const sortedSkills = skills.toSorted((a, b) => a.name.localeCompare(b.name));
    // const startOfPage = (currentPage - 1) * ITEMS_PER_PAGE;
    // const endOfPage = (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE;
    // return sortedSkills.slice(startOfPage, endOfPage);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch skills.");
  }
}