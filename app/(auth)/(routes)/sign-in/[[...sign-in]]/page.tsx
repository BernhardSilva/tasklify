import { SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className='grid-flow-row text-center'>
			You can use this email and password to sign in to the test app.
			<p>
				Mail: <b>cyketolo@clout.wiki</b>
			</p>
			<p>
				Password: <b>P4$$w0rd789</b>
			</p>
			<div className='mt-5'>
				<SignIn />
			</div>
		</div>
	);
}
