import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Task } from '@/types/task';
import TaskForm from './task-form';
import { Badge } from '../ui/badge';
import { useEffect, useState } from 'react';

type TaskCardProps = {
	task: Task;
};

const TaskCard = (props: TaskCardProps) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;

	return (
		<Card className='w-[350px] m-2'>
			<CardHeader>
				<p className={`mb-1 flex justify-end`}>
					<Badge variant={`${props.task.completed ? 'default' : 'destructive'}`}>
						{props?.task?.completed ? 'Completed' : 'Not completed'}
					</Badge>
				</p>

				<CardTitle>{props?.task?.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className='text-slate-500'>{props?.task?.description}</p>
			</CardContent>

			<CardFooter className='flex justify-between'>
				<TaskForm formValues={props?.task} />
				<div>
					<p className='text-xs'>Created at</p>
					<p className='text-xs'>{props?.task?.createdAt}</p>
				</div>
				<div>
					<p className='text-xs'>Updated at</p>
					<p className='text-xs'>{props?.task?.updatedAt}</p>
				</div>
			</CardFooter>
		</Card>
	);
};

export default TaskCard;
