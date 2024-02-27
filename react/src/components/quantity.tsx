import { useAppDispatch } from '@/hooks/store-hooks';
import { cartActions } from '@/store/slices/cart.slice';

interface QuantityProps {
  itemId: number;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const Quantity = ({ itemId, quantity, setQuantity }: QuantityProps) => {
  const dispatch = useAppDispatch();

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    dispatch(cartActions.changeItemQuantity({ id: itemId, quantity: 1 }));
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(cartActions.changeItemQuantity({ id: itemId, quantity: -1 }));
    } else {
      dispatch(cartActions.removeItem(itemId));
    }
  };

  return (
    <div className="flex items-center border-gray-100">
      <span
        onClick={handleDecreaseQuantity}
        className="cursor-pointer rounded-l-xl bg-zinc-600 px-4 py-2 duration-100 hover:bg-zinc-800/40"
      >
        -
      </span>
      <input
        type="text"
        className="h-10 w-10 bg-zinc-500 text-center text-xs outline-none"
        value={quantity}
        readOnly
      />
      <span
        onClick={handleIncreaseQuantity}
        className="cursor-pointer rounded-r-xl bg-zinc-600 px-4 py-2 duration-100 hover:bg-zinc-800/40"
      >
        +
      </span>
    </div>
  );
};

export default Quantity;
