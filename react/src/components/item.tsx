import { ItemModel } from '@/models/item.model';
import Button from './button';
import Quantity from './quantity';
import { useRef } from 'react';

interface ItemProps extends ItemModel {
  onAddToCart: (quantity: number) => void;
}

const Item = ({ title, description, price, onAddToCart }: ItemProps) => {
  const formattedPrice = parseFloat(price).toFixed(2);

  const quantityRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (quantityRef.current) {
      const quantity = Number(quantityRef.current.value);
      onAddToCart(quantity);
    }
  };

  return (
    <div className="flex h-auto w-64 flex-col gap-6 rounded-2xl bg-zinc-700 p-6 shadow-lg hover:shadow-2xl">
      <div>
        <p className="text-2xl font-bold">{title}</p>
      </div>
      <div className="flex-1">
        <p>{description}</p>
      </div>
      <p className="text-center text-2xl font-bold">$ {formattedPrice}</p>
      <div className="flex w-full gap-4">
        <Quantity ref={quantityRef} />
        <Button onClick={handleClick}>Add</Button>
      </div>
    </div>
  );
};

export default Item;
