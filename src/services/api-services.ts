import axios from 'axios';
import bcrypt from 'bcryptjs';
import { User, UserCredential } from '../types/user';

export const fetchUserData = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>('/userData.json');

    // Return a new Promise that resolves after a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response.data);
      }, 2000); // Delay of 2 seconds
    });
  } catch (error) {
    throw new Error('Failed to fetch all users data: ' + error);
  }
};

export const Login = async (username: string, password: string): Promise<string> => {
  try {
    const response = await axios.get<UserCredential[]>('/userCredential.json');
    const userCredentialList = response.data;
    const hashedPassword = bcrypt.hashSync(password, '$2a$10$QfVnmSykjjENuiOzrMviFe');

    // Find user by username
    const user = userCredentialList.find((user: UserCredential) => user.username === username);

    // Check if user exists and password matches
    if (user && user.password === hashedPassword) {
      return 'login success';
    }

    // Generic error message for security reasons
    return 'Username or Password does not match';
  } catch (error) {
    // Improve error handling
    throw new Error('Failed to fetch user data: ' + (error as Error).message);
  }
};
