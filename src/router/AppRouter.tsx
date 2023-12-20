import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from '../App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
    </>
  )
);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
