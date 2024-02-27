import { useAppSelector } from '@/hooks/store-hooks';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

interface ShoppingCartButtonProps {
  onClick: () => void;
}

const ShoppingCartButton = ({ onClick }: ShoppingCartButtonProps) => {
  const cartSize = useAppSelector((state) => state.cart.items.length);

  return (
    <div
      onClick={onClick}
      className="relative rounded-full transition-all duration-100 hover:cursor-pointer hover:bg-slate-100/25"
    >
      <div className="p-4">
        <ShoppingCartIcon className="h-6 w-6" />
      </div>
      {cartSize > 0 && (
        <div className="absolute right-[4px] top-[8px] flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs text-white shadow-sm">
          {cartSize}
        </div>
      )}
    </div>
  );
};

export default ShoppingCartButton;