import { toast } from '@/hooks/use-toast';

export const toastSaved = () => {
	toast({
		title: 'Task saved!.'
	});
};

export const toastError = () => {
	toast({
		variant: 'destructive',
		title: 'Uh oh! Something went wrong.',
		description: 'There was a problem with your request.'
	});
};
