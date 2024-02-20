import Item from '@/components/item';
import Spinner from '@/components/spinner';
import { ItemModel } from '@/models/item.model';
import { useEffect, useState } from 'react';

const ShopPage = () => {
  const [items, setItems] = useState<ItemModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:9200/shop-items');
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const itemsJson = await response.json();
        setItems(itemsJson);
      } catch (error) {
        console.error('Fetching items failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-16 py-6">
      <p className="text-4xl font-bold">Shop</p>
      <div className="flex w-1/2 flex-wrap justify-center gap-8">
        {isLoading ? (
          <Spinner className="size-20" />
        ) : items.length === 0 ? (
          <p>No items found!</p>
        ) : (
          items.map((item: ItemModel) => <Item key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};

export default ShopPage;
