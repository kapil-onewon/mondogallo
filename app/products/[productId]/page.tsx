import { useProduct } from "@/hooks/use-product";
import ProductPageClient from "../../../components/product-page-client";

// Fetch product IDs for static generation
export async function generateStaticParams() {
  const productIds = ["1", "2", "3"]; // Replace with a dynamic API call if necessary

  return productIds.map((id) => ({
    productId: id,
  }));
}

// Fetch data and pass it to the client component
export default function ProductPage({ params }: { params: { productId: string } }) {
  const { productId } = params;

  return <ProductPageClient productId={productId} /> ;
}

//
