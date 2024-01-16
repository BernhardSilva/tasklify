
import { Task } from '@/types/task';
import { auth } from '@clerk/nextjs';
import queryString from 'query-string';

const { userId } = auth()

interface Query {
    title?: string;
}


const getTasks = async (query: Query): Promise<Task[]> => {
    const URL = `/api/tasks/${query.title}}`;
    const url = queryString.stringifyUrl({
        url: URL,
        query: {
            title: query?.title,
            userId
        }
    });

    const res = await fetch(url, {
        cache: 'no-store',
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain',
            'Accept': '*/*',
        }
    });
    return res.json();
};

export default getTasks;