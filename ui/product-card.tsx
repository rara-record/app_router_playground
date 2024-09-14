import { Product } from '#/app/api/product/product';
// import { ProductBestSeller } from '#/ui/product-best-seller';
import { ProductEstimatedArrival } from '#/ui/product-estimated-arrival';
import { ProductLowStockWarning } from '#/ui/product-low-stock-warning';
import { ProductPrice } from '#/ui/product-price';
import { ProductRating } from '#/ui/product-rating';

import { dinero, type DineroSnapshot } from 'dinero.js';
import Image from 'next/image';
import Link from 'next/link';

export const ProductCard = ({
  product,
  href,
}: {
  product: Product;
  href: string;
}) => {
  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <Link href={href} className="group block">
      <div className="space-y-2">
        <div className="relative">
          {product.isBestSeller ? (
            <div className="absolute left-2 top-2 z-10 flex">
              <div className="rounded bg-gray-600 px-1.5 text-xs font-medium leading-5 text-white">
                Best Seller
              </div>
            </div>
          ) : null}
          <Image
            src={`/${product.image}`}
            width={400}
            height={400}
            className="rounded-xl grayscale group-hover:opacity-80"
            alt={product.name}
            placeholder="blur"
            blurDataURL={product.imageBlur}
          />
        </div>

        <div className="truncate text-sm font-medium text-white group-hover:text-vercel-cyan">
          {product.name}
        </div>

        {product.rating ? (
          <ProductRating rating={product.rating} />
        ) : null}

        <ProductPrice price={price} discount={product.discount} />

        <ProductEstimatedArrival leadTime={product.leadTime} />

        {product.stock <= 1 ? (
          <ProductLowStockWarning stock={product.stock} />
        ) : null}
      </div>
    </Link>
  );
};
