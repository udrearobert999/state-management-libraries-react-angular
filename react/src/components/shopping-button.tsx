import { ShoppingCartIcon } from '@heroicons/react/24/solid';

interface ShoppingButtonProps {
  onClick: () => void;
}

const ShoppingButton = ({ onClick }: ShoppingButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="relative rounded-full transition-all duration-100 hover:cursor-pointer hover:bg-slate-100/25"
    >
      <div className="p-4">
        <ShoppingCartIcon className="h-6 w-6" />
      </div>
      <div className="absolute right-[4px] top-[8px] flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs text-white shadow-sm">
        1
      </div>
    </div>
  );
};

export default ShoppingButton;
