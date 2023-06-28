import Image from "next/image"
import logo from "@/public/ninja-logo.png"
import Link from "next/link"

const login = () => {
    return (
        <div className='bg-[#ecebeb] h-screen'>
            
            <div className='w-full bg-[#252525]'>
            <Link href="/">
                <div className=" cursor-pointer p-3">
                    <Image src={logo} width={60} alt="net ninja Logo" className="mx-auto" />
                </div>
            </Link>
            </div>
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-4xl tracking-wider text-center font-bold leading-tight  text-gray-900">
                                Log in
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-md text-gray-500">Email</label>
                                    <input type="email" name="email" id="email" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-md text-gray-500">Password</label>
                                    <input type="password" name="password" id="password" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-black">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="text-sm  text-red-500 hover:underline">Forgot password</div>
                                </div>
                                <button type="submit" className="w-full text-white bg-[#D91B42] font-medium rounded-full text-xl px-4 py-4 text-center">Log in</button>
                                <button className="w-full flex items-center bg-white border border-gray-300 rounded-full px-4 py-4 text-xl font-medium text-gray-600 text-center">
                                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                                    <span className='ml-16' >Log in with Google</span>
                                </button>
                                <div className="text-sm  text-black dark:text-gray-400 text-center">
                                    Need an accound? <span className=" text-red-500">Sign up</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default login