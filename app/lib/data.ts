import connection from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';
import { unstable_noStore as noStore } from 'next/cache';

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
  }
]

export async function getSkills() {
  noStore();
  try {
    const client = await connection;
    const data = await client.db("gymtionary")
      .collection("skills")
      .find()
      .sort({ name: 1 })
      .toArray();
    return data;
    // return skills.toSorted((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.log("Database error: ", error);
    throw new Error("Failed to fetch");
  }
}