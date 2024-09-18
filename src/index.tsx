import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from 'react-router-dom';
import NotFoundPage from './components/UI/NotFoundPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import ErrorPage from './components/UI/ErrorPage';

const ProtectRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isAuthen = !!sessionStorage.getItem('isAuth');
  return isAuthen ? <>{children}</> : <Navigate to="/login" replace />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route
        path="/"
        element={
          <ProtectRoute>
            <Dashboard />
          </ProtectRoute>
        }
      />
      <Route path="/login" index={true} element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
