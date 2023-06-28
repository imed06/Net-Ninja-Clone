const EarlyCard = () => {
    return (
        <div className="block  p-11  bg-[#1b1b1b] rounded-sm shadow ">
            <div className='flex space-x-4 mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#c39a3a" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h5 className="mb-2 text-2xl font-bold text-[#c39a3a] dark:text-white tracking-widest">Early Access</h5>
            </div>
            <p className="font-normal text-[#bbb] text-md tracking-wide">Be the first to watch new courses! All content is released to Net Ninja Pro members first.</p>
        </div>
    )
}

export default EarlyCard


