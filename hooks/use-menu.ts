import { useRouter } from 'next/navigation';

export const useMenuRoute = () => {
	const router = useRouter();

	const pushRoute = (link: string, id: string) => {
		router.push(`/${link}/${id}`);
	};

	return pushRoute;
};
