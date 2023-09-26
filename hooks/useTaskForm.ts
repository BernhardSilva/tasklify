import { useState } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { z } from 'zod';
import axios from 'axios';
import { Task } from '@/types/task';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	completed: z.boolean()
});

type TaskFormValues = z.infer<typeof formSchema>;

type TaskFormProps = {
	initialData?: Task | null;
	onSubmitSuccess?: () => void;
};

type TaskFormResult = {
	loading: boolean;
	form: UseFormReturn<TaskFormValues>;
	submit: (data: TaskFormValues) => Promise<void>;
	deleteTask: () => Promise<void>;
};

export function useTaskForm({ initialData, onSubmitSuccess }: TaskFormProps): TaskFormResult {
	const [loading, setLoading] = useState(false);

	const form = useForm<TaskFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: initialData || { title: '', description: '', completed: false }
	});

	const submit = async (data: TaskFormValues) => {
		setLoading(true);
		try {
			if (initialData) {
				await axios.patch(`/api/tasks/${initialData?.id}`, data);
				onSubmitSuccess?.();
			} else {
				await axios.post(`/api/tasks/`, data);
				onSubmitSuccess?.();
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const deleteTask = async () => {
		setLoading(true);
		try {
			await axios.delete(`/api/tasks/${initialData?.id}`);
			onSubmitSuccess?.();
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		form,
		submit,
		deleteTask
	};
}
