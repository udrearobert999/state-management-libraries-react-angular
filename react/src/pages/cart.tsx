import Button from '@/components/button';
import CartItem from '@/components/cart-item';
import Checkout from '@/components/checkout';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';
import { cartActions } from '@/store/slices/cart.slice';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  const { items: itemsInCart, totalPrice } = useAppSelector(
    (state) => state.cart,
  );
  const dispatch = useAppDispatch();

  const handleBack = () => {
    navigate('/');
  };

  const handleClear = () => {
    dispatch(cartActions.clear());
  };

  const renderItems = () => {
    if (itemsInCart.length > 0)
      return (
        <div className="w-full max-w-3xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="flex flex-1 flex-col gap-6">
            {itemsInCart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <Checkout totalPrice={totalPrice} />
        </div>
      );

    return <p>The cart is empty!</p>;
  };

  const renderClearButton = () => {
    if (itemsInCart.length > 0)
      return (
        <Button
          onClick={handleClear}
          className="w-3/12 bg-red-600 hover:bg-red-700"
        >
          Clear
        </Button>
      );

    return null;
  };

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-16 py-6">
      <p className="text-4xl font-bold">Cart Items</p>
      {renderItems()}
      <div className="flex w-full flex-col items-center justify-center gap-4">
        {renderClearButton()}
        <Button onClick={handleBack} className="w-3/12">
          Back
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
