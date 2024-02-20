import { useState } from 'react';
import Button from './button';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate('/success');
    }, 1500);
  };

  return (
    <div className="mt-6 h-full rounded-xl bg-zinc-700 p-6 text-white shadow-md hover:shadow-2xl md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between ">
        <p>Subtotal</p>
        <p>$129.99</p>
      </div>
      <div className="flex justify-between">
        <p>Shipping</p>
        <p>$4.99</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">$134.98 USD</p>
          <p className="text-sm text-gray-700">including VAT</p>
        </div>
      </div>
      <div className="flex">
        <Button onClick={handleClick} isLoading={isLoading}>
          Check out
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
