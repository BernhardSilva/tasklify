import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useTaskForm } from '@/hooks/use-task-form';
import { Task } from '@/types/task';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useToast } from '../../hooks/use-toast';
import { Toggle } from '../toggle';
import { Textarea } from '../ui/textarea';

type TaskFormProps = {
	formValues?: Task | null;
};

const TaskForm = ({ formValues }: TaskFormProps) => {
	const { toast } = useToast();
	const router = useRouter();

	const [open, setOpen] = useState(false);

	const { loading, form, submit, deleteTask } = useTaskForm({
		formValues,
		onSubmitSuccess: () => {
			router.refresh();
			form.reset();
			const condition = true;

			if (condition) {
				// If the condition is true, close the dialog
				setOpen(false);
			}
		}
	});

	const deleteTaskHandler = () => {
		if (formValues) {
			deleteTask();
			toast({
				title: 'Task deleted!.'
			});
		}
	};

	useEffect(() => {
		if (formValues) {
			form.reset(formValues);
		}
	}, [formValues, form]);

	const addOrEditMessage = formValues ? 'Edit' : 'Add';

	const descMessage = `You can ${addOrEditMessage} a task here. Click save when you're done.`;

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>
				<Button variant='outline'>{addOrEditMessage} Task</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>{addOrEditMessage} Task</DialogTitle>
					<DialogDescription>{descMessage}</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(submit)}>
						<div className='grid gap-4 py-4'>
							<FormField
								name='title'
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor='title' className='text-right'>
											Title
										</FormLabel>
										<FormControl>
											<Input disabled={loading} placeholder='Task title...' {...field} className='col-span-3' />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name='description'
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor='description' className='text-right'>
											Description
										</FormLabel>
										<FormControl>
											<Textarea placeholder='Task description...' {...field} className='col-span-3' />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name='completed'
								control={form.control}
								render={({ field }) => (
									<FormItem className='flex justify-items-center'>
										<FormControl>
											<Toggle value={field.value} onChange={field.onChange} className='text-right' />
										</FormControl>
										<FormLabel htmlFor='completed' className='ml-2'>
											Completed
										</FormLabel>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<DialogFooter className='flex flex-row'>
							<Button type='submit' disabled={loading} className='mb-2 sm:mb-0 sm:mr-2'>
								<span className='text-xs'>Save changes</span>
							</Button>
							<Button
								variant={'destructive'}
								disabled={loading}
								onClick={deleteTaskHandler}
								className='w-full sm:w-[130px]'
							>
								<span className='text-xs'>Delete</span>
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default TaskForm;
