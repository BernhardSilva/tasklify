
import React from 'react'
import TaskCard from './task-card'
import { Task } from '@/types/task'

type TaskListProps = {
    tasks: Task[]
}

const TaskList = (props: TaskListProps) => {
  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>
            {props?.tasks?.map(task => (
                <TaskCard key={task?.id} task={task} />
            ))}
        </div>
    )
}

export default TaskList