import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function POST(req: Request) {
	try {
		const { userId } = auth();
		const { title, description } = await req.json();

		if (!userId) {
			return new NextResponse('Unauthenticated', { status: 401 });
		}

		if (!title) {
			return new NextResponse('Title required', { status: 400 });
		}

		if (!description) {
			return new NextResponse('Description is required', { status: 400 });
		}

		const taskFound = await prismadb.task.findFirst({
			where: {
				title
			}
		});

		if (taskFound) {
			return new NextResponse('Task already exist, choose different name', { status: 400 });
		}

		const task = await prismadb.task.create({
			data: {
				title,
				description,
				userId
			}
		});

		return NextResponse.json(task);
	} catch (error) {
		console.log('[TASK_POST]', error);
		return new NextResponse('Internal error', { status: 500 });
	}
}

export async function GET(req: Request) {
	try {
		const { userId } = auth();
		if (!userId) {
			return new NextResponse('Unauthenticated', { status: 401 });
		}

		const tasks = await prismadb.task.findMany({
			where: {
				userId 
			}
		});
		return NextResponse.json(tasks);
	} catch (error) {
		console.log('[TASKS_GET]', error);
		return new NextResponse('Internal error', { status: 500 });
	}
}
