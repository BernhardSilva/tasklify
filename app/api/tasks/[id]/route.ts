import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
	try {
		if (!params.id) {
			return new NextResponse('id is required', { status: 400 });
		}

		const task = await prismadb.task.findUnique({
			where: {
				id: params.id
			}
		});

		return NextResponse.json(task);
	} catch (error) {
		console.log('[TASK_GET]', error);
		return new NextResponse('Internal error', { status: 500 });
	}
};

export const PATCH = async (req: Request, { params }: { params: { id: string } }) => {
	try {
		const { userId } = auth();

		const { title, description, completed } = await req.json();

		if (!userId) {
			return new NextResponse('Unauthenticated', { status: 401 });
		}

		const taskFound = await prismadb.task.findFirst({
			where: {
				title
			}
		});

		if (taskFound && taskFound.id !== params.id) {
			return new NextResponse('Task is used, choose different name', { status: 400 });
		}

		const taskByUserId = await prismadb.task.findFirst({
			where: {
				id: params.id,
				userId
			}
		});

		if (!taskByUserId) {
			return new NextResponse('Unauthoriazed', { status: 403 });
		}

		const task = await prismadb.task.update({
			where: {
				id: params.id,
				userId
			},
			data: {
				title,
				description,
				completed
			}
		});

		return NextResponse.json(task);
	} catch (error) {
		console.log('[TASK_PATCH]', error);

		return new NextResponse('Internal error', { status: 500 });
	}
};

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
	try {
		const { userId } = auth();

		if (!userId) {
			return new NextResponse('Unauthenticated', { status: 401 });
		}

		if (!params.id) {
			return new NextResponse('Task id is required', { status: 400 });
		}

		const storeByUserId = await prismadb.task.findFirst({
			where: {
				id: params.id,
				userId
			}
		});

		if (!storeByUserId) {
			return new NextResponse('Unauthoriazed', { status: 403 });
		}

		const task = await prismadb.task.deleteMany({
			where: {
				id: params.id
			}
		});

		return NextResponse.json(task);
	} catch (error) {
		console.log('[TASK_DELETE]', error);
		return new NextResponse('Internal error', { status: 500 });
	}
};
