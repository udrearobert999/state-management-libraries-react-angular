import Item from '@/components/item';
import Spinner from '@/components/spinner';
import { useAppDispatch } from '@/hooks/store-hooks';
import { ItemModel } from '@/models/item.model';
import { useGetAllItemsQuery } from '@/store/apis/shop.api';
import { cartActions } from '@/store/slices/cart.slice';

const ShopPage = () => {
  const { data, isLoading } = useGetAllItemsQuery();
  const items = data || [];

  const dispatch = useAppDispatch();

  const handleAddItemToCart = (item: ItemModel, quantity: number) => {
    dispatch(cartActions.addItem({ ...item, quantity }));
  };

  const renderItems = () => {
    if (isLoading) return <Spinner className="size-20" />;

    if (items.length > 0)
      return items.map((item: ItemModel) => (
        <Item
          key={item.id}
          {...item}
          onAddToCart={(quantity) => handleAddItemToCart(item, quantity)}
        />
      ));

    return <p>No items found!</p>;
  };

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-16 py-6">
      <p className="text-4xl font-bold">Shop</p>
      <div className="flex w-1/2 flex-wrap justify-center gap-8">
        {renderItems()}
      </div>
    </div>
  );
};

export default ShopPage;
