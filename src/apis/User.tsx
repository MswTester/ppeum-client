import client from "./Client";

export const userGet = async (email: string) => {
    const response = await client.get('/user?email=' + email)
    return response.data
};

export const userSet = async (user: IUser) => {
    const response = await client.post('/user', user)
    return response.data
};

export const userDel = async (email: string) => {
    const response = await client.delete('/user?email=' + email)
    return response.data
};
