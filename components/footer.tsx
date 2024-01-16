
const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer className='bg-slate-200 border-t dark:border-slate-800 dark:bg-slate-900 mt-auto'>
            <div className='mx-auto py-10'>
                <p className='text-center text-xs'>&copy; {currentYear}, Inc. All rights reserved.</p>
            </div>
        </footer>)
}

export default Footer