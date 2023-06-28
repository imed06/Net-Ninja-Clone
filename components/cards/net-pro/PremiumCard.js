const PremiumCard = () => {
    return (
        <div className="block  p-11  bg-[#1b1b1b] rounded-sm shadow ">
            <div className='flex space-x-4 mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23.25" height="31" viewBox="0 0 23.25 31">
                    <path id="fire-solid" d="M13.078,1.444A1.456,1.456,0,0,0,10.4.655c-7.5,10.961,3.158,11.454,3.158,16.782a3.875,3.875,0,1,1-7.75-.058V12.2a1.453,1.453,0,0,0-2.508-1A12.106,12.106,0,0,0,0,19.374a11.625,11.625,0,0,0,23.25,0c0-10.311-10.172-11.686-10.172-17.93Z" transform="translate(0 0.001)" fill="#c49b3b" />
                </svg>
                <h5 className="mb-2 text-2xl font-bold text-[#c39a3a] dark:text-white tracking-widest">Premium Courses</h5>
            </div>
            <p className="font-normal text-[#bbb] text-md tracking-wide">Net Ninja Pro members get free instant access to all premium Net Ninja Udemy courses.</p>
            
        </div>
    )
}

export default PremiumCard