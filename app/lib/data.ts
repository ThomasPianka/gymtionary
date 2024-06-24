import connection from '@/app/lib/mongodb';
import { unstable_noStore as noStore } from 'next/cache';

export async function getSkills() {
  noStore();
  try {
    const client = await connection;
    const data = await client.db("gymtionary").collection("skills").find().toArray();
    return data;
  } catch (error) {
    console.log("Database error: ", error);
    throw new Error("Failed to fetch");
  }
}