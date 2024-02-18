import React from 'react'
import SmalCard from './SmalCard'
import SemiCard from './SemiCard'

// fetch data 
const getData = async () => {
    const allNews = (await (await fetch(`${process.env.BASE_URL}/api/news`, { next: { revalidate: 600 } })).json())["data"]
    return allNews;
}

async function AllNews() {
    const data = await getData();


    return (
        <div className='w-full  py-5 flex'>
            {/* advanced grid with learn  */}

            <div className='mt-10 w-[90%] mx-auto grid grid-flow-row  md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* smal section  */}
                {/* <div>

                </div> */}
                {/* semi section  */}
                {/* <div>

                </div> */}
                
                {data.map((item, index) => {
                    if (index === 3) {
                        return (
                            <React.Fragment key={index}>
                                <SmalCard data={item} />
                                <SemiCard data={item} />
                            </React.Fragment>
                        );
                    } else if (index === 5) {
                        return (
                            <React.Fragment key={index}>
                                <SemiCard data={item} />
                                <SmalCard data={item} />
                            </React.Fragment>
                        );
                    } else {
                        return <SmalCard key={index} data={item} />;
                    }
                })}

                {
                    data.map((title,index) => {
                        index === 2 && index===5 
                    })
                }


                <SmalCard />
                <SemiCard/>
            </div>
        </div>
    )
}

export default AllNews
