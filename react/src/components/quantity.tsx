import { forwardRef, useState } from 'react';

const Quantity = forwardRef<HTMLInputElement>((props, ref) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (number: number) => {
    const newQuantity = quantity + number;
    setQuantity(newQuantity >= 1 ? newQuantity : 1);
  };

  return (
    <div className="flex items-center border-gray-100">
      <span
        onClick={() => handleQuantityChange(-1)}
        className="cursor-pointer rounded-l-xl bg-zinc-600 px-4 py-2 duration-100 hover:bg-zinc-800/40"
      >
        -
      </span>
      <input
        type="text" // Ensure to set a type for the input
        className="h-10 w-10 bg-zinc-500 text-center text-xs outline-none"
        value={quantity}
        onChange={() => {}} // You might need this to satisfy TypeScript if using as a controlled component
        ref={ref}
        readOnly
      />
      <span
        onClick={() => handleQuantityChange(1)}
        className="cursor-pointer rounded-r-xl bg-zinc-600 px-4 py-2 duration-100 hover:bg-zinc-800/40"
      >
        +
      </span>
    </div>
  );
});

export default Quantity;
