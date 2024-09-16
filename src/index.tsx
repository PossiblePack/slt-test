import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
// import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import NotFoundPage from './components/UI/NotFoundPage';
import Homepage from './pages/home';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { store } from './redux/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFoundPage />}>
      <Route path="/" element={<Homepage />} />
    </Route>
  )
);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* for use Redux */}
      {/* <Provider store={store}>  */}
      <RouterProvider router={router} />
      {/* </Provider> */}
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
