const ExclusiveCard = () => {
    return (
        <div className="block  p-11  bg-[#1b1b1b] rounded-sm shadow ">
            <div className='flex space-x-4 mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 28 32">
                    <path id="user-ninja-solid" d="M20.337,18.075,14,24.413,7.662,18.075A8.373,8.373,0,0,0,0,26.4V29a3,3,0,0,0,3,3H25a3,3,0,0,0,3-3V26.4A8.373,8.373,0,0,0,20.337,18.075ZM2,12a5.967,5.967,0,0,0,4.325-1.856,8,8,0,1,0,.519-5.656A5.971,5.971,0,0,0,2,2,5.984,5.984,0,0,0,4.694,7,5.984,5.984,0,0,0,2,12Zm9-6h6a2,2,0,0,1,2,2H9A2,2,0,0,1,11,6Z" fill="#c49b3b" />
                </svg>
                <h5 className="mb-2 text-2xl font-bold text-[#c39a3a] dark:text-white tracking-widest">Exclusive Courses</h5>
            </div>
            <p className="font-normal text-[#bbb] text-md tracking-wide">Net Ninja Pro members will gain access to exclusive courses, not available on the Net Ninja YouTube channel.</p>
        </div>
    )
}

export default ExclusiveCard