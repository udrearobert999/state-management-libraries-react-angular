import Button from '@/components/button';
import CartItem from '@/components/cart-item';
import Checkout from '@/components/checkout';
import { ItemModel } from '@/models/item.model';
import { useNavigate } from 'react-router-dom';

const itemsInCart: ItemModel[] = [
  {
    id: 1,
    title: 'Notebook',
    description:
      'This elegant 100-page notebook features premium, lined paper thats perfect for jotting down thoughts, notes, or sketches. Its durable cover and compact size make it an ideal companion for both students and professionals looking to capture ideas on the go.',
    shortDescription: 'Elegant 100-page lined notebook.',
    price: '3',
  },
  {
    id: 2,
    title: 'Pen',
    description:
      'Experience smooth writing with our high-quality blue ink ballpoint pen. Designed for comfort and precision, it features an ergonomic grip and a sleek, durable design. Perfect for everyday use, this pen ensures your writing is always clear and stylish.',
    shortDescription: 'High-quality blue ink ballpoint pen.',
    price: '1',
  },
];

const CartPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-16 py-6">
      <p className="text-4xl font-bold">Cart Items</p>
      <div className="w-full max-w-3xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="flex flex-1 flex-col gap-6">
          {itemsInCart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <Checkout />
      </div>
      <Button onClick={handleBack} className="w-3/12">
        Back
      </Button>
    </div>
  );
};

export default CartPage;
