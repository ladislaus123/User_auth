import User, { IUser } from "../models/models"; // assuming you have IUser interface in your model

// Add a new user
export const addUser = async (userData: IUser) => {
  try{
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error(`Failed to add user: ${error}`);
  }
};
