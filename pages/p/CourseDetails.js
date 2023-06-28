import PricingCard from "@/components/cards/PricingCard"
import PricingCard2 from "@/components/cards/PricingCard2"
import react_cover from "@/public/react-firebase-cover.png"
import Image from "next/image"
import ReactPlayer from "react-player"

const CourseDetails = () => {
    return (
        <div className="mt-6 text-gray-200 ">
            <div className='flex  justify-between space-x-12 font-semibold items-center p-4'>
                <Image className="rounded-md max-w-xl" src={react_cover} alt="net-ninja-pro" />
                <div className="space-y-2">
                    <h1 className="text-2xl">Build Websites with React & Firebase</h1>
                    <h2 className="text-lg">This is a 20-hr premium master class course.</h2>
                    <div className="text-[#bbb] tracking-wide">React is a hugely popular front-end library used to create fast, dynamic & interactive websites. In this course you'll learn how to make websites with React & Firebase from the ground-up & create 4 full applications along the way.
                        <br />
                        <br />
                        You'll learn about hooks, the context API, reducers, databases, authentication, file uploads & much more.
                        <br />
                        <br />
                        Check out the course preview at the bottom of the page to find out more.
                    </div>
                </div>
            </div>
            <div className="items-center flex flex-col justify-center mt-20">
                <div className='text-2xl text-gray-200 font-semibold tracking-wide'>Choose a Pricing Option</div>
                <button className='capitalize font-semibold text-lg rounded-md items-center bg-[#2AC17F] py-3 px-6 flex tracking-widest mt-6'>
                    Buy This Course ($9)
                </button>
                <button className=' font-medium text-md rounded-md items-center bg-[#92742d] border-4 border-solid border-[#c39a3a] py-3 px-3 flex tracking-widest mt-6'>
                    Or access all courses by signing up for Net Ninja Pro for just $9 / month.
                </button>
                <h3 className='text-[#888888] text-md mt-6'>Already bought or have access to this course? Click a lesson below to go to the course content</h3>

            </div>
            <div className='mt-20 px-14'>
                <div className='flex items-center space-x-3 p-3'>
                    <h2 className='text-2xl tracking-wide capitalize font-bold mb-10 text-gray-200'>What You'll Learn...</h2>
                </div>
                <div className="flex flex-col bg-[#333] p-4 text-gray-300">
                    <div className='border-dotted text-lg bg-[#252525]  cursor-pointer border-2 px-4 border-[#3b3b3b] flex py-3 rounded-sm text-[#bbb] capitalize text-left w-full font-bold'>
                        Introduction & Setup
                    </div>
                    <div className="flex justify-between px-4 py-3 hover:bg-[#3d3d3d] cursor-pointer">
                        <div className="flex space-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4dd7b0" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg>
                            <h3>1 - Welcome to the Course(2:56)</h3>
                        </div>
                        <button className='capitalize font-semibold text-xs tracking-widest rounded-md items-center bg-[#d91b42] p-2 opacity-50 flex text-white'>
                            START
                        </button>
                    </div>
                    <div className="flex justify-between px-4 py-3 hover:bg-[#3d3d3d] cursor-pointer">
                        <div className="flex space-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4dd7b0" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg>
                            <h3>2 - React at a Glance(4:04)</h3>
                        </div>
                        <button className='capitalize font-semibold text-xs tracking-widest rounded-md items-center bg-[#d91b42] p-2 opacity-50 flex text-white'>
                            START
                        </button>
                    </div>
                    <div className="flex justify-between px-4 py-3 hover:bg-[#3d3d3d] cursor-pointer">
                        <div className="flex space-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4dd7b0" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg>
                            <h3>3 - What you should already know(1:18)</h3>
                        </div>
                        <button className='capitalize font-semibold text-xs tracking-widest rounded-md items-center bg-[#d91b42] p-2 opacity-50 flex text-white'>
                            START
                        </button>
                    </div>


                </div>
                <div className="flex cursor-pointer mx-auto border border-solid border-white p-2 my-10 w-10 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className=' my-20 flex flex-col items-center space-y-12'>
                    <h1 className='text-3xl text-gray-200 font-normal tracking-widest'>Course Preview</h1>
                    <ReactPlayer url="https://www.youtube.com/watch?v=Oi4v5uxTY5o&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3" width={900} height={510} ></ReactPlayer>
                </div>
                <div className='flex flex-col items-center mt-20 mb-24'>
                    <div className='text-3xl text-white font-semibold tracking-widest'>Sign up for Net Ninja <span className='text-[#c39a3a]'>Pro</span></div>
                    <div className='grid grid-cols-2 px-24 gap-10 mt-20 mb-10'>
                        <PricingCard />
                        <PricingCard2 />
                    </div>
                    <div className='text-[#bbb] text-md mt-6'>Get your first month half price when you use the code <span className='text-white font-semibold'>NINJAFLEDGLING</span>. (monthly plan only).</div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails