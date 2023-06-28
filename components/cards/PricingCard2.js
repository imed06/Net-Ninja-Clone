const PricingCard2 = () => {
    return (
        <div className="flex flex-col  max-w-sm  text-gray-900 rounded-sm  shadow bg-[#333333]">
            <div className='flex items-center text-center flex-col p-24 py-16 pb-0' >
                <h3 className="mb-4 text-3xl font-semibold text-white">Yearly<br></br> Membership</h3>
                <div className="flex justify-center items-baseline my-8 text-white border-b border-gray-100/10 pb-8 space-x-5">
                    <span className="text-gray-400 text-lg">only</span>
                    <span className="mx-2 text-6xl font-extrabold">$79</span>
                    <span className="text-gray-400 text-lg">/yr</span>
                </div>
            </div>
            <ul className="mb-8 space-y-4 text-left px-8 mt-6">
                <li className="flex items-center space-x-3 whitespace-nowrap text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c39a3a" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                    </svg>
                    <span>Instant access to all courses</span>
                </li>
                <li className="flex items-center space-x-3 whitespace-nowrap text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c39a3a" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                    </svg>
                    <span>Early access to new courses</span>
                </li>
                <li className="flex items-center space-x-3 whitespace-nowrap text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c39a3a" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                    </svg>

                    <span>Access to premium & Udemy courses</span>
                </li>
                <li className="flex items-center space-x-3 whitespace-nowrap text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c39a3a" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                    </svg>
                    <span>Save over 25%!</span>
                </li>
            </ul>
            <button className="capitalize font-semibold text-xl text-center tracking-widest text-white rounded-md cursor-pointer items-center bg-[#c39a3a] mx-20 py-2 my-8">join now</button>
        </div>
    )
}

export default PricingCard2