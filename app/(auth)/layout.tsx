import Image from 'next/image';
import logo from '../../public/images/logo.png';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className='flex min-h-screen min-w-screen items-center justify-center bg-gray-900 bg-cover bg-no-repeat sm:bg-contain sm:bg-center'
			style={{
				backgroundImage: `url('/images/panda.jpg')`,
				backgroundSize: 'cover'
			}}
		>
			<div className='rounded-xl bg-gray-800 bg-opacity-50 py-5 px-0 sm:py-10 sm:px-10'>
				<div className='text-white'>
					<div className='mb-8 flex flex-col items-center'>
						<Image src={logo} height={100} width={100} alt='logo' />
					</div>
					{children}
				</div>
			</div>
		</div>
	);
}
