import React from 'react'
import CourseCard from './cards/CourseCard'
import ProCourseCard from './cards/ProCourseCard'
import PricingCard from './cards/PricingCard'
import PricingCard2 from './cards/PricingCard2'
import html from "@/public/html-logo.svg"
import js from "@/public/js-logo.svg"
import flutter from "@/public/flutter-logo.svg"
import react from "@/public/react-logo.svg"
import svelte from "@/public/svelte-logo.svg"
import node from "@/public/node-logo.svg"
import ts from "@/public/typescript-logo.svg"
import sapper from "@/public/sapper-logo.svg"
import gatsby from "@/public/gatsby-logo.svg"
import graphql from "@/public/graphql-logo.svg"
import framer from "@/public/framer-logo.svg"
import fb from "@/public/firebase-logo.svg"
import react_cover from "@/public/react-firebase-cover.png"
import html_cover from "@/public/html-cover.png"
import node_cover from "@/public/node-crash-course-cover.png"
import openai_cover from "@/public/openai-cover.png"
import solid_cover from "@/public/solid-js-cover.png"
import router_cover from "@/public/react-router-in-depth-cover.png"
import NetPro from '@/public/net-ninja-pro-thumb.png'
import Image from 'next/image'
import ReviewCard from './cards/ReviewCard'
import Link from 'next/link'

const HomePage = () => {
    return (
        <>
            <div className='home px-9 text-white pt-6 h-72 font-bold w-full'>
                <h1 className='text-6xl '>Black-Belt</h1>
                <h2 className='text-2xl text-gray-200 tracking-wide mt-6'>Your Coding Skills</h2>
                <button className='capitalize font-bold text-md rounded-md items-center bg-[#2AC17F] py-3.5 px-6 flex tracking-wide mt-10'>
                    <p className=' '>learn about net ninja pro</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className='mt-12 px-14 '>
                <div className='flex items-center space-x-3 border-b border-gray-100/10 p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill='#d91b42' viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" /></svg>
                    <h2 className='text-xl tracking-wide capitalize font-bold text-gray-200'>popular courses</h2>
                </div>
                <div className='grid grid-cols-2 px-24 gap-10 mt-20 mb-10'>
                    <ProCourseCard />
                    <CourseCard image={react_cover} />
                    <CourseCard image={html_cover}/>
                    <CourseCard image={node_cover}/>
                </div>
                <Link href="/courses">
                    <div className='border-dotted text-lg cursor-pointer border-2 border-[#3b3b3b] flex justify-center mx-auto mb-8 py-2 rounded-md text-[#bbb] capitalize max-w-xs text-center'>
                        view all courses
                    </div>
                </Link>
            </div>
            <div className='mt-20 px-14'>
                <div className='flex items-center space-x-3 border-b border-gray-100/10 p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill='#d91b42' viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" /></svg>
                    <h2 className='text-xl tracking-wide capitalize font-bold text-gray-200'>newest courses</h2>
                </div>
                <div className='grid grid-cols-2 px-24 gap-10 mt-20 mb-10'>
                    <CourseCard image={NetPro}/>
                    <CourseCard image={openai_cover}/>
                    <CourseCard image={solid_cover}/>
                    <CourseCard image={router_cover}/>
                </div>
                <Link href="/courses">
                    <div className='border-dotted text-lg cursor-pointer border-2 border-[#3a3a3a] flex justify-center mx-auto mb-8 py-2 rounded-md text-[#bbb] capitalize max-w-xs text-center'>
                        view all courses
                    </div>
                </Link>
            </div>
            <div className='flex flex-col items-center mt-20'>
                <h1 className='text-6xl text-white font-semibold'>Net Ninja <span className='text-[#c39a3a]'>Pro</span></h1>
                <h3 className='text-[#bbb] text-xl mt-6'>Get <span className='text-white font-semibold'>instant access </span>to all courses with a <span className='text-white font-semibold'>Net Ninja Pro</span> membership.</h3>
                <div className='grid grid-cols-2 px-24 gap-10 mt-20 mb-10'>
                    <PricingCard />
                    <PricingCard2 />
                </div>
                <h3 className='text-[#bbb] text-md mt-6'>Get your first month half price when you use the code <span className='text-white font-semibold'>NINJAFLEDGLING</span>. (monthly plan only).</h3>
                <div className='flex my-16 space-x-6 items-center'>
                    <Image src={html} width={70} alt="html-logo" className='hover:animate-bounce' />
                    <Image src={js} width={70} alt="js-logo" className='hover:animate-bounce' />
                    <Image src={flutter} width={70} alt="flutter-logo" className='hover:animate-bounce' />
                    <Image src={react} width={70} alt="react-logo" className='hover:animate-bounce' />
                    <Image src={svelte} width={70} alt="svelte-logo" className='hover:animate-bounce' />
                    <Image src={node} width={70} alt="node-logo" className='hover:animate-bounce' />
                    <Image src={ts} width={70} alt="ts-logo" className='hover:animate-bounce' />
                    <Image src={sapper} width={70} alt="sapper-logo" className='hover:animate-bounce' />
                    <Image src={gatsby} width={70} alt="gatsby-logo" className='hover:animate-bounce' />
                    <Image src={graphql} width={70} alt="graphql-logo" className='hover:animate-bounce' />
                    <Image src={framer} width={70} alt="framer-logo" className='hover:animate-bounce' />
                    <Image src={fb} width={70} alt="firebase-logo" className='hover:animate-bounce' />
                </div>
                <div className='bg-[#212121] mt-20 flex flex-col items-center'>
                    <h1 className='text-3xl text-gray-200 font-semibold tracking-wide'>Reviews from Net Ninja Viewers</h1>
                    <div className='grid grid-cols-3 px-16 gap-10 mt-20 mb-32'>
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomePage