import { allocate, Dinero, toUnit, up } from 'dinero.js';
import { ProductCurrencySymbol } from './product-currency-symbol';

export const ProductSplitPayments = ({
  price,
}: {
  price: Dinero<number>;
}) => {
  if (toUnit(price) < 150) {
    return null;
  }

  const [perMonth] = allocate(price, [1, 2]);

  return (
    <div className="text-sm text-gray-400">
      Or <ProductCurrencySymbol dinero={price} />
      {toUnit(perMonth, { digits: 0, round: up })}/month for 3 months
    </div>
  );
};
