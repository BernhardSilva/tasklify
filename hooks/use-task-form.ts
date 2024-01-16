import { toastError, toastSaved } from '@/helpers/toast-messages';
import { Task } from '@/types/task';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
	title: z.string().min(1, {
		message: 'Title must be at least 1 character long'
	}),
	description: z.string().min(1, {
		message: 'Description must be at least 1 character long'
	}),
	completed: z.boolean()
});

type TaskFormValues = z.infer<typeof formSchema>;

type TaskFormProps = {
	formValues?: Task | null;
	onSubmitSuccess?: () => void;
};

type TaskFormResult = {
	loading: boolean;
	form: UseFormReturn<TaskFormValues>;
	submit: (data: TaskFormValues) => Promise<void>;
	deleteTask: () => Promise<void>;
};

export function useTaskForm({ formValues, onSubmitSuccess }: TaskFormProps): TaskFormResult {
	const [loading, setLoading] = useState(false);

	const form = useForm<TaskFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: formValues || { title: '', description: '', completed: false }
	});

	const submit = async (data: TaskFormValues) => {
		setLoading(true);
		try {
			if (formValues) {
				await axios.patch(`/api/tasks/${formValues?.id}`, data);
				onSubmitSuccess?.();
				toastSaved();
			} else {
				await axios.post(`/api/tasks/`, data);
				onSubmitSuccess?.();
				toastSaved();
			}
		} catch (error) {
			console.error(error);
			toastError();
		} finally {
			setLoading(false);
		}
	};

	const deleteTask = async () => {
		setLoading(true);
		try {
			await axios.delete(`/api/tasks/${formValues?.id}`);
			onSubmitSuccess?.();
		} catch (error) {
			console.error(error);
			toastError();
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
