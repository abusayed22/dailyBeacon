import React from 'react'
import NewsCart from './NewsCart'
import NewsTitle from '../reuseble/NewsTitle'
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

      <section className="w-[90%] mx-auto pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div className="">
          <NewsTitle title={"Latest"} />
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              data?.news_list?.map((item,i) => (
                <NewsCart key={i} news={item} features={data["features"]}/>
              ))
            }
            
          </div>
        </div>
      </section>
    </>
  )
}

export default LatestNews
