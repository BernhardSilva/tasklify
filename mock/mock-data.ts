import { Task } from "@/types/task";

export const mockTasks: Task[] = [
	{
		id: '1',
		title: 'Create a login page',
		description: 'Implement a login page with authentication using Firebase.',
		completed: true,
		createdAt: '2022-01-10T10:30:00Z',
		updatedAt: '2022-01-10T12:00:00Z',
		userId: '1'
	},
	{
		id: '2',
		title: 'Build a REST API',
		description: 'Design and implement a REST API using Node.js and Express.',
		completed: false,
		createdAt: '2022-01-11T08:15:00Z',
		updatedAt: '2022-01-11T09:45:00Z',
		userId: '2'
	},
	{
		id: '3',
		title: 'Refactor legacy code',
		description: 'Refactor a legacy codebase to use modern JavaScript syntax and best practices.',
		completed: false,
		createdAt: '2022-01-12T13:00:00Z',
		updatedAt: '2022-01-12T14:30:00Z',
		userId: '1'
	},
	{
		id: '4',
		title: 'Implement OAuth2 authentication',
		description: 'Add OAuth2 authentication to the existing login page using Passport.js.',
		completed: true,
		createdAt: '2022-01-13T09:00:00Z',
		updatedAt: '2022-01-13T11:30:00Z',
		userId: '3'
	},
	{
		id: '5',
		title: 'Write unit tests',
		description: 'Write unit tests for a React component using Jest and Enzyme.',
		completed: true,
		createdAt: '2022-01-14T14:00:00Z',
		updatedAt: '2022-01-14T16:30:00Z',
		userId: '1'
	},
	{
		id: '6',
		title: 'Add pagination to a table',
		description: 'Implement pagination for a large table of data in a React application.',
		completed: false,
		createdAt: '2022-01-15T12:00:00Z',
		updatedAt: '2022-01-15T14:30:00Z',
		userId: '2'
	},
	{
		id: '7',
		title: 'Optimize database queries',
		description: 'Identify and optimize slow database queries in a Node.js application.',
		completed: false,
		createdAt: '2022-01-16T09:00:00Z',
		updatedAt: '2022-01-16T11:30:00Z',
		userId: '1'
	},
	{
		id: '8',
		title: 'Build a chat application',
		description: 'Design and implement a real-time chat application using Socket.io and React.',
		completed: false,
		createdAt: '2022-01-17T14:00:00Z',
		updatedAt: '2022-01-17T16:30:00Z',
		userId: '3'
	},
	{
		id: '9',
		title: 'Create a responsive design',
		description: 'Create a responsive design for a React web application using Bootstrap.',
		completed: true,
		createdAt: '2022-01-18T12:00:00Z',
		updatedAt: '2022-01-18T14:30:00Z',
		userId: '2'
	},
	{
		id: '10',
		title: 'Deploy to production',
		description: 'Deploy a Node.js application to a production server using Docker and Kubernetes.',
		completed: false,
		createdAt: '2022-01-19T09:00:00Z',
		updatedAt: '2022-01-19T11:30:00Z',
		userId: '1'
	}
];
