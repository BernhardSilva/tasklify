
import { Task } from '@/types/task';

interface SearchTasksListProps {
    tasks: Task[] | undefined;
    handleSelectTask: (id: string) => void;
}

const SearchTaskList = ({ tasks, handleSelectTask }: SearchTasksListProps) => {
    return (
        <div>
            {tasks?.map((task, index) => (
                <ul
                    className={`text-white px-4 py-2 cursor-pointer hover:bg-green-800 dark:hover:bg-green-700
                                    w-full h-max-[60px] grid justify-start
                                    ${
                        //position 0 of the list
                        index === 0 && tasks?.length > 1
                            ? 'rounded-t-xl rounded-b-none hover:rounded-b-none'
                            //only 1 task in the list
                            : tasks?.length === 1
                                ? 'rounded-xl hover-rounded-xl'
                                //last position of the list
                                : index === tasks?.length - 1 && tasks?.length > 1
                                    ? 'rounded-b-xl rounded-t-none hover:rounded-t-none'
                                    //middle positions of the list
                                    : ''
                        } `}
                    key={task?.id}
                    onClick={() => handleSelectTask(task?.id)}
                >
                    <div className='inline-flex'>
                        <div className='ml-3'>
                            {task?.title?.length > 45 ? `${task?.title?.slice(0, 45)}..` : task?.title}
                        </div>
                    </div>
                </ul>
            ))}
        </div>
    );
};

export default SearchTaskList;