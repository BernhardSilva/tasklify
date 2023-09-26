
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Task } from "@/types/task"
import TaskDialog from './task-dialog'

type TaskCardProps = {
    task: Task
}

const TaskCard = (props: TaskCardProps) => {

    return (
        <Card className="w-[350px] m-2">
            <CardHeader>
                <CardTitle>{props?.task?.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-slate-500">{props?.task?.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <TaskDialog initialData={props?.task} />
                <div>
                    <p className="text-xs">Created at</p>
                    <p className="text-xs">{props.task.createdAt}</p>
                </div>
                <div>
                    <p className="text-xs">Updated at</p>
                    <p className="text-xs">{props.task.updatedAt}</p>
                </div>
            </CardFooter>
        </Card>
    )
}

export default TaskCard