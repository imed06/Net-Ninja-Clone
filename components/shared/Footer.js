const Footer = () => {
  return (
    <div className='w-full bg-[#191919] text-[#6d6b6b] pb-48 pt-6 text-center justify-between px-48 flex text-sm'>
      <div className='text-left'>
        <h1 className='text-lg text-white mb-2'>
          &copy;
          Net Ninja 2023
        </h1>
        <ul >
          <li className=' hover:underline cursor-pointer'>
            Net Ninja on Twitter
          </li>
          <li className=' hover:underline cursor-pointer'>
            Net Ninja on Youtube
          </li>
          <li className=' hover:underline cursor-pointer'>
            Get Net ninja Pro
          </li>
        </ul>
      </div>
      <div className='text-left'>
        <ul>
          <li className=' hover:underline cursor-pointer'>
            Terms of Use
          </li>
          <li className=' hover:underline cursor-pointer'>
            Privacy Policy
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer