import React, { useState } from 'react';
import PageLayout from '../../components/UI/PageLayout';
import { useQuery } from 'react-query';
import { fetchUserData } from '../../services/api-services';
import { CircularProgress } from '@mui/material';
import { User } from '../../types/user';
import Modal from '../../components/UI/Modal';
import UserDetail from '../../components/Dashboard/UserDetailModal';
import UserTable from '../../components/Table/UserTable';
const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetailId, setUserDetailId] = useState<User | null>(null);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUserDetailId(null);
  };
  const handleSeeUserDetail = (data: User) => {
    setIsModalOpen(true);
    setUserDetailId(data);
  };
  const {
    isLoading,
    data = [],
    error
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => fetchUserData(),
    retry: 3,
    refetchOnWindowFocus: false
  });

  if (error) throw new Error("Can't fetch users data");

  return (
    <PageLayout title="Dashboard">
      <div className="h-full mx-8 px-6 bg-white flex flex-col gap-4 justify-center rounded-xl">
        <div className="flex h-full flex-col gap-2 p-4">
          <p className="text-2xl font-bold justify-center w-full">Welcom to Dashboard</p>
          <div className="h-full flex flex-col gap-2 ">
            <p>list of all users</p>
            {isLoading ? (
              <div className="w-full h-[80%] flex flex-col rounded-md justify-center items-center border border-solid ">
                <CircularProgress />
                <p>Loading ...</p>
              </div>
            ) : (
              <>
                <Modal title="UserDetail" isOpen={isModalOpen} handleClose={handleCloseModal}>
                  {userDetailId && <UserDetail data={userDetailId!} />}
                </Modal>
                <UserTable data={data} handleUserDetail={handleSeeUserDetail} />
              </>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
