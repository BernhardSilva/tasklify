import { UserButton } from '@clerk/nextjs';
import { ThemeToggle } from './theme-toggle';
import Image from 'next/image';


const Navbar = () => {
  return (
    <div className='bg-gray-200 border-b dark:bg-slate-900'>
      <div className='flex h-16 items-center px-4 sm:px-8'>
        <Image src='/images/logo.png' width={45} height={50} alt='Logo' className='h-8 mr-4' />
        <span className='font-bold'>Tasklify</span>
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeToggle />
          <div className='border-2 border-white hover:border-green-500 rounded-full'>
            <UserButton afterSignOutUrl='/' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar