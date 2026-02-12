import { categories, products } from "@/app/data/catalog";

export async function GET() {
  return Response.json({ categories, products });
}
