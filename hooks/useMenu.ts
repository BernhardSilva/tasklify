import { useRouter } from 'next/navigation';

export const useMenuRoute = () => {
	const router = useRouter();

	const pushRoute = (id?: string) => {
		router.push(`/task/${id}`);
	};

	return pushRoute;
};
