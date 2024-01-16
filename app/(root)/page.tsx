import Home from '@/components/home';
import prismadb from '@/lib/prismadb';
import { Task } from '@/types/task';
import { auth } from '@clerk/nextjs';
import { format } from 'date-fns';

const HomeSetup = async () => {
	let formattedTasks: Task[] = [];

	const { userId } = auth();
	if (userId) {
		const tasks = await prismadb.task.findMany({
			where: {
				userId
			}
		});

		formattedTasks = tasks.map((item) => ({
			...item,
			createdAt: format(item.createdAt, 'MM/dd/yy HH:mm'),
			updatedAt: format(item.updatedAt, 'MM/dd/yy HH:mm')
		}));
	} else {
		formattedTasks = [];
	}

	return (
		<div className='min-h-full'>
			<Home data={formattedTasks} />
		</div>
	);
};

export default HomeSetup;
