import { getCategoryBySlug, getProductsByCategory } from "@/app/data/catalog";

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return Response.json({ message: "Collection not found" }, { status: 404 });
  }

  return Response.json({
    category,
    products: getProductsByCategory(slug),
  });
}
