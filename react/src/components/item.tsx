import { ItemModel } from '@/models/item.model';
import Button from './button';
import Quantity from './quantity';
import { useState } from 'react';

interface ItemProps extends ItemModel {
  onAddToCart: (quantity: number) => void;
}

const Item = ({ id, title, description, price, onAddToCart }: ItemProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleClick = () => {
    onAddToCart(quantity);
  };

  return (
    <div className="flex h-auto w-64 flex-col gap-6 rounded-2xl bg-zinc-700 p-6 shadow-lg hover:shadow-2xl">
      <div>
        <p className="text-2xl font-bold">{title}</p>
      </div>
      <div className="flex-1">
        <p>{description}</p>
      </div>
      <p className="text-center text-2xl font-bold">$ {price.toFixed(2)}</p>
      <div className="flex w-full gap-4">
        <Quantity itemId={id} quantity={quantity} setQuantity={setQuantity} />
        <Button onClick={handleClick}>Add</Button>
      </div>
    </div>
  );
};

export default Item;
