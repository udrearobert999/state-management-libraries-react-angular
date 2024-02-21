import Button from '@/components/button';
import CartItem from '@/components/cart-item';
import Checkout from '@/components/checkout';
import { useAppSelector } from '@/hooks/store-hooks';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  const itemsInCart = useAppSelector((state) => state.cart.items);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-16 py-6">
      <p className="text-4xl font-bold">Cart Items</p>
      {itemsInCart.length > 0 ? (
        <div className="w-full max-w-3xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="flex flex-1 flex-col gap-6">
            {itemsInCart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <Checkout />
        </div>
      ) : (
        <p>The cart is empty :(</p>
      )}
      <div className="flex w-full flex-col items-center justify-center gap-4">
        {itemsInCart.length > 0 && (
          <Button className="w-3/12 bg-red-600 hover:bg-red-700">Clear</Button>
        )}
        <Button onClick={handleBack} className="w-3/12">
          Back
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
