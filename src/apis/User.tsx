import client from "./Client";

const userGet = async (email: string) => {
    const response = await client.get('/user?email=' + email)
    return response.data
};

const userSet = async (user: IUser) => {
    const response = await client.post('/user', user)
    return response.data
};

const userDel = async (email: string) => {
    const response = await client.delete('/user?email=' + email)
    return response.data
};
