import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from '../App';
import ProductPage from '../pages/ProductPage/ProductPage';
import { getProduct } from '../services/api';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import Layout from '../components/Layout/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route
        path="products/:productID"
        element={<ProductPage />}
        loader={async ({ params }) => {
          const { productID } = params;
          if (productID) {
            const response = await getProduct(+productID);
            return response;
          }
        }}
      />
      <Route path="cart" element={<ShoppingCart />} />
    </Route>
  )
);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
