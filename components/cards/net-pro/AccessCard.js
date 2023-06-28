const AccessCard = () => {
    return (
        <div className="block  p-11  bg-[#1b1b1b] rounded-sm shadow ">
            <div className='flex space-x-4 mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="38.75" height="31" viewBox="0 0 38.75 31">
                    <path id="photo-video-solid" d="M36.813,0H9.687A1.938,1.938,0,0,0,7.75,1.938V7.75h9.688V3.875H29.063V23.25h7.75a1.937,1.937,0,0,0,1.938-1.937V1.938A1.937,1.937,0,0,0,36.813,0ZM14.047,6.236a.545.545,0,0,1-.545.545H11.686a.545.545,0,0,1-.545-.545V4.42a.545.545,0,0,1,.545-.545H13.5a.545.545,0,0,1,.545.545ZM35.359,18.83a.545.545,0,0,1-.545.545H33a.545.545,0,0,1-.545-.545V17.014A.545.545,0,0,1,33,16.469h1.816a.545.545,0,0,1,.545.545Zm0-6.3a.545.545,0,0,1-.545.545H33a.545.545,0,0,1-.545-.545V10.717A.545.545,0,0,1,33,10.172h1.816a.545.545,0,0,1,.545.545Zm0-6.3a.545.545,0,0,1-.545.545H33a.545.545,0,0,1-.545-.545V4.42A.545.545,0,0,1,33,3.875h1.816a.545.545,0,0,1,.545.545ZM25.188,9.688H1.937A1.938,1.938,0,0,0,0,11.625V29.063A1.938,1.938,0,0,0,1.937,31h23.25a1.938,1.938,0,0,0,1.938-1.937V11.625A1.938,1.938,0,0,0,25.188,9.688ZM5.812,13.563A1.938,1.938,0,1,1,3.875,15.5a1.938,1.938,0,0,1,1.937-1.937ZM23.25,27.125H3.875V25.188L7.75,21.313,9.687,23.25l7.75-7.75,5.813,5.813Z" fill="#c49b3b" />
                </svg>
                <h5 className="mb-2 text-2xl font-bold text-[#c39a3a] dark:text-white tracking-widest">Access Every Course</h5>
            </div>
            <p className="font-normal text-[#bbb] text-md tracking-wide">Get instant access to the entire Net Ninja course YouTube library since Jan 2020.<span className='text-white'> No ads. No interruptions.</span> </p>
        </div>
    )
}

export default AccessCard