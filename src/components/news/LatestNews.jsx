import React from 'react'
import NewsCart from './NewsCart'
import NewsTitle from './NewsTitle'
import { PrismaClient } from '@prisma/client'

// fetch data 
const getData = async () => {
  const news_list = (await(await fetch(`${process.env.BASE_URL}/api/news/list-by-feature?featId=${1}`,{next:{revalidate:600}})).json())["data"]
  const features = (await(await fetch(`${process.env.BASE_URL}/api/feature`,{next:{revalidate:600}})).json())["data"]
  return {news_list,features}
}

async function LatestNews() {

  const data = await getData()
  
  return (
    <>

      {/* ====== Blog Section Start */}
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div className="">
          <NewsTitle title={"Latest"} />
          <div className='flex flex-wrap justify-center container mx-auto gap-12'>
            {
              data?.news_list?.map((item,i) => (
                <NewsCart key={i} news={item} features={data["features"]}/>
              ))
            }
            
          </div>
        </div>
      </section>
      {/* ====== Blog Section End */}
    </>
  )
}

export default LatestNews
