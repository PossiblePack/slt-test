import React, { FormEvent, useEffect } from 'react';
import PageLayout from '../../components/UI/PageLayout';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../services/api-services';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username')?.toString();
    const password = formData.get('password')?.toString();

    if (username && password) {
      const res = await Login(username, password);
      if (res === 'login success') {
        sessionStorage.setItem('isAuth', 'true');
        navigate('/');
      } else {
        alert(res);
      }
    } else {
      alert('please insert all login data');
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('isAuth')) {
      navigate('/');
    }
  }, []);

  return (
    <PageLayout>
      <div className="h-full flex flex-col gap-4 justify-center items-center">
        <div className="flex p-[5rem] flex-col gap-4 justify-center items-center rounded-xl bg-white sm:w-[60vw] ">
          <div className="grid gap-6">
            <p className="font-bold text-2xl flex justify-center">Please Login to go to page</p>
            <form className="flex flex-col gap-4 w-full justify-center p-2" onSubmit={login}>
              <div className="flex flex-col ">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="border border-solid rounded-lg py-2 px-4"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="border border-solid rounded-lg py-2 px-4"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-xl w-full font-medium px-4 py-1"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LoginPage;
