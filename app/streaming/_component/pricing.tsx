import { Product } from '#/app/api/product/product';
import { Ping } from '#/ui/ping';
import { ProductEstimatedArrival } from '#/ui/product-estimated-arrival';
import { ProductLowStockWarning } from '#/ui/product-low-stock-warning';
import { ProductPrice } from '#/ui/product-price';
import { ProductSplitPayments } from '#/ui/product-split-payments';
import { dinero, DineroSnapshot } from 'dinero.js';
import { Suspense } from 'react';
import AddToCart from './add-to-cart';
import { cookies } from 'next/headers';

export function Pricing({ product }: { product: Product }) {
  const cartCount = cookies().get('_cart_count')?.value || '0';

  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <div className="space-y-4 rounded-lg bg-gray-900 p-3">
      <ProductPrice price={price} discount={product.discount} />

      <div className="relative">
        <div className="absolute -left-4 top-1">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<LoadingDots />}>
        <UserSpecificDetails productId={product.id} />
      </Suspense>

      <AddToCart initialCartCount={Number(cartCount)} />
    </div>
  );
}

function LoadingDots() {
  return (
    <div className="text-sm">
      <span className="space-x-0.5">
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full">
          &bull;
        </span>
      </span>
    </div>
  );
}

async function UserSpecificDetails({
  productId,
}: {
  productId: string;
}) {
  const data = await fetch(
    `https://app-playground-api.vercel.app/api/products?id=${productId}&delay=500&filter=price,usedPrice,leadTime,stock`,
    {
      // We intentionally disable Next.js Cache to better demo
      // streaming
      cache: 'no-store',
    }
  );

  const product = (await data.json()) as Product;

  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <>
      <ProductSplitPayments price={price} />
      <ProductEstimatedArrival
        leadTime={product.leadTime}
        hasDeliveryTime
      />
      {product.stock <= 1 ? (
        <ProductLowStockWarning stock={product.stock} />
      ) : null}
    </>
  );
}
