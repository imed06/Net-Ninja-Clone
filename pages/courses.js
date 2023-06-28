import CourseCard from '@/components/cards/CourseCard'
import Link from 'next/link'
import NetPro from '@/public/net-ninja-pro-thumb.png'

const courses = () => {
    return (
        <div className='flex flex-col p-12'>
            <div className='flex items-center border-b border-gray-100/10 pb-3'>
                <h2 className='text-3xl tracking-wide capitalize font-bold text-gray-200'>Course Library</h2>
            </div>
            <h3 className='text-[#bbb] text-lg mt-6 tracking-wide'>Get access to every single course by signing up for a <Link href="/p/net-ninja-pro">  <span className='capitalize cursor-pointer font-bold text-md rounded-md items-center bg-[#2AC17F] p-2 text-white'> net ninja pro</span> </Link>membership.</h3>
            <div className='grid grid-cols-3 gap-10 mt-20 mb-10'>
                <CourseCard image={NetPro} />
                <CourseCard image={NetPro}/>
                <CourseCard image={NetPro}/>
            </div>
            <div className='items-center flex mx-auto mt-8'>
                <ul className="inline-flex -space-x-px">
                    <li>
                        <div  className="px-6 py-3 cursor-pointer leading-tight bg-[#D91B42] text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</div>
                    </li>
                    <li>
                        <div  className="px-6 py-3 cursor-pointer leading-tight text-[#D91B42] bg-white hover:bg-[#D91B42] hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</div>
                    </li>
                    <li>
                        <div  className="px-6 py-3 cursor-pointer leading-tight text-[#D91B42] bg-white hover:bg-[#D91B42] hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</div>
                    </li>
                    <li>
                        <div  className="px-6 py-3 cursor-pointer leading-tight text-[#D91B42] bg-white rounded-r-full hover:bg-[#D91B42] hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Last</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default courses