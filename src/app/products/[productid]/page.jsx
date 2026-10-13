import { Suspense } from 'react';
import { cacheLife } from 'next/cache';
import { notFound } from 'next/navigation';
import SinglePageCard from '@/components/SinglePageCard';

async function getProduct(productid) {
  'use cache';
  cacheLife('hours');

  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${productid}`);
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }) {
  const { productid } = await params;
  const product = await getProduct(productid);
  if (!product) return { title: 'Mahsulot topilmadi' };

  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `/products/${productid}` },
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.images?.[0] ? [product.images[0]] : [],
    },
  };
}

async function ProductContent({ params }) {
  const { productid } = await params;
  const data = await getProduct(productid);
  if (!data) notFound();

  return (
    <div className="mx-auto max-w-3xl p-4 sm:p-6 lg:p-8">
      <SinglePageCard data={data} />
    </div>
  );
}

export default function SinglePage({ params }) {
  return (
    <Suspense fallback={<p className="p-8">Yuklanmoqda...</p>}>
      <ProductContent params={params} />
    </Suspense>
  );
}