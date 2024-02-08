import React from 'react'
import SmalCard from './SmalCard'
import SemiCard from './SemiCard'

// fetch data 
const getData = async () => {
    const allNews = (await(await fetch(`${process.env.BASE_URL}/api/news`,{next:{revalidate:600}})).json())["data"]
    return allNews;
  }

async function AllNews() {
    const data = await getData();

    return (
        <div className='w-full  py-5 flex'>
            {/* advanced grid with learn  */}
            
            <div className='mt-10 w-[90%] mx-auto grid grid-flow-row grid-cols-3 gap-5'>
                <SmalCard />
                <SmalCard />
                <SmalCard />
                <SmalCard />
                <SmalCard />
                {/* <SemiCard/> */}
                <SmalCard />
                <SmalCard />
                <SmalCard />
            </div>
        </div>
    )
}

export default AllNews
