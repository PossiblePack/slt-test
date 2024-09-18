type Name = {
  firstName: string;
  lastName: string;
  middleName: string;
};

type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

type Contact = {
  email: string;
  phone: string;
};

export type User = {
  name: Name;
  address: Address;
  contact: Contact;
  dateOfBirth: string;
  gender: string;
};

export type UserCredential = {
  username: string;
  password: string;
};
