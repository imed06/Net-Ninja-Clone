import AccessCard from '@/components/cards/net-pro/AccessCard'
import EarlyCard from '@/components/cards/net-pro/EarlyCard'
import ExclusiveCard from '@/components/cards/net-pro/ExclusiveCard'
import PremiumCard from '@/components/cards/net-pro/PremiumCard'
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
import Image from 'next/image'
import PricingCard from '@/components/cards/PricingCard'
import PricingCard2 from '@/components/cards/PricingCard2'

const netNinjaPro = () => {
    return (
        <div>
            <div className='flex flex-col items-center ninja-pro my-8'>
                <h1 className='text-6xl text-white font-semibold'>Net Ninja <span className='text-[#c39a3a]'>Pro</span></h1>
                <h3 className='text-[#bbb] text-xl mt-6'>Access to every single course & <span className='text-white font-semibold'>added extras </span>for <span className='text-white font-semibold'>just $9 a month</span>.</h3>
            </div>
            <div className='grid grid-cols-2 px-24 gap-10 mt-20 mb-10'>
                <AccessCard />
                <ExclusiveCard />
                <EarlyCard />
                <PremiumCard />
            </div>
            <div className='flex flex-col items-center mt-20'>
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
            </div>
        </div>
    )
}

export default netNinjaPro