import client from "./Client";

const articleGet = async (page: number) => {
    const response = await client.get('/article?page=' + page)
    return response.data
};

const articleSet = async (article: IArticle) => {
    const response = await client.post('/article', article)
    return response.data
};

const articleDel = async (id: number) => {
    const response = await client.delete('/article?id=' + id.toString())
    return response.data
};
