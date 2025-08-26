import User from "../models/models";


export const getAllUsers = async () => {
try {
    const users = await User.find();
    return users;
    
} catch (error) {
    throw new Error(`Failed to get users: ${error}`);
}
};
