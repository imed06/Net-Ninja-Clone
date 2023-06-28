import React from 'react'
import ShaunPic from '@/public/shaun.png'
import Image from 'next/image'
import Link from 'next/link'

const CourseCard = (props) => {
    return (
        <Link href="/p/CourseDetails">
            <div className="max-w-lg bg-[#2E2E2E] rounded-md cursor-pointer transition ease-in-out hover:-rotate-[1deg] hover:scale-[1.09] duration-200 delay-75 shadow-lg">
                <Image className="rounded-t-md" src={props.image} alt="net-ninja-pro" />
                <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-wide text-gray-200">Net ninja pro</h5>
                    <p className="mb-3 text-[#bbb] text-lg tracking-normal font-sans">Here are the biggest enterprise techn sitions of 2021 so far, in reverse chronological order.</p>
                    <div className='flex justify-between mt-16 items-center'>
                        <div className='flex items-center'>
                            <Image className="w-8 h-8 rounded-full" src={ShaunPic} alt="Rounded avatar" />
                            <span className='ml-2 text-[#bbb]'>Net Ninja (Shaun)</span>
                        </div>
                        <div className='border-dotted text-sm border-2 border-[#6d6b6b] px-2 py-1 rounded-md text-[#bbb]'>$2</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard