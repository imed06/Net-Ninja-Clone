import Image from 'next/image'
import profile from "@/public/profile.png"

const ReviewCard = () => {
    return (
        <div className="flex flex-col items-center pb-10 bg-[#2e2e2e] max-w-xl p-8 rounded-sm">
            <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src={profile} alt="profile image" />
            <h5 className="mb-1 text-xl font-medium text-white capitalize">samha</h5>
            <p className='text-[#bbb] italic'>"Whenever I can't understand something in the programming courses I take or at uni, I turn to The Net Ninja - and whatever I need to know, he has an awesome and understandable video on it. So thank you! You're the best!"</p>
        </div>
    )
}

export default ReviewCard