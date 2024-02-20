import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ShopPage from '@/pages/shop';
import CartPage from '@/pages/cart';
import SuccessPage from '@/pages/success';

import Layout from './layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ShopPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
  {
    path: '/success',
    element: <SuccessPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
