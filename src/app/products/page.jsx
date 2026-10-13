import ProductCard from '@/components/ProductCard';
import React from 'react';

export const metadata = {
  title: 'Mahsulotlar',
  description: "Barcha mahsulotlar ro'yxati: kiyim, bosh kiyim va boshqalar.",
  alternates: { canonical: '/products' },
};

async function Products() {
  const res = await fetch('https://api.escuelajs.co/api/v1/products?limit=10&offset=1');
  const result = await res.json();

  return (
    <div className="container mx-auto grid grid-cols-4 gap-[20px] py-[90px]">
      {result?.map((el) => (
        <ProductCard key={el.id} el={el} />
      ))}
    </div>
  );
}

export default Products;