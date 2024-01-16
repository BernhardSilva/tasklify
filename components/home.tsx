"use client"

import { Task } from '@/types/task'
import TaskDialog from './task/task-form'
import TaskList from './task/task-list'

type HomeProps = {
    data: Task[]
}

const Home = (props: HomeProps) => {
    return (
        <main>
            <div className='mt-3 ml-3'>
                <TaskDialog />
            </div>
            <section>
                <TaskList tasks={props?.data} />
            </section>
        </main>
    )
}

export default Home