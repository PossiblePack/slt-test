import React from 'react';
import { User } from '../../types/user';

type UserDetailProps = {
  data: User;
};

const UserDetail: React.FC<UserDetailProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[35vw] flex flex-col gap-x-4">
        <p>
          Name: {data.name.firstName} {data.name.lastName}
        </p>
        <p>Date of birth: {data.dateOfBirth}</p>
        <p>Gender: {data.gender}</p>
        <p>Adress:</p>
        <p className="px-2">
          Street: {data.address.street} City: {data.address.city} State: {data.address.state}{' '}
          ZipCode: {data.address.zipCode} Country: {data.address.country}
        </p>
        <p>Contact</p>
        <p className="px-2 ">Email: {data.contact.email}</p>
        <p className="px-2 ">Phone: {data.contact.phone}</p>
      </div>
    </div>
  );
};

export default UserDetail;
