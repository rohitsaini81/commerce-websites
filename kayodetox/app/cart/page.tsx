import SimplePage from "@/app/components/SimplePage";

export default function CartPage() {
  return (
    <SimplePage
      title="Your Cart"
      description="Your cart is empty for now. Add your favorite detox essentials to get started."
      ctaHref="/collections/shop"
      ctaLabel="Start Shopping"
    />
  );
}
