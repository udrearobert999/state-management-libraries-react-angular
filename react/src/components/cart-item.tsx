import { ItemModel } from '@/models/item.model';
import Quantity from './quantity';
import { useAppSelector } from '@/hooks/store-hooks';

interface CartItemProps extends ItemModel {}

const CartItem = ({ id, title, shortDescription, price }: CartItemProps) => {
  const items = useAppSelector((state) => state.cart.items);

  const formattedPrice = parseFloat(price).toFixed(2);

  return (
    <div className="flex gap-2 rounded-2xl bg-zinc-700 p-6 shadow-lg hover:shadow-2xl">
      <div className="flex flex-1 flex-col gap-2">
        <div>
          <p className="text-2xl font-bold">{title}</p>
        </div>
        <div className="flex-1">
          <p>{shortDescription}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-4">
        <Quantity />
        <p className="inline text-2xl font-bold">$ {formattedPrice}</p>
      </div>
    </div>
  );
};

export default CartItem;
