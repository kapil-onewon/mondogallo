import { categories } from "@/data/categories";
import { CategoryContent } from "@/components/categories/category-content";

export function generateStaticParams() {
  return categories.map((category) => ({
    categoryId: category.id,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const category = categories.find(c => c.id === params.categoryId);

  if (!category) {
    return <div>Category not found</div>;
  }

  return <CategoryContent category={category} />;
}