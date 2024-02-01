
import NewsTitle from './NewsTitle'
import NewsCart from './NewsCart'


// fetch data 
const getData = async () => {
  const news_feature = (await (await fetch(`${process.env.BASE_URL}/api/news/list-by-feature?featId=${2}`, { next: { revalidate: 600 } })).json())["data"]
  const features = (await (await fetch(`${process.env.BASE_URL}/api/feature`, { next: { revalidate: 600 } })).json())["data"]
  return { news_feature, features }
}


async function PopularNews() {
  const data = await getData()
  console.log(data["news_feature"])
  return (
    <>
      {/* ====== Blog Section Start */}
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div className="">
          <NewsTitle title={"Popular"} />
          <div className='flex flex-wrap justify-center container mx-auto gap-12'>
          {
            
            data["news_feature"].map((item,i) => (
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

export default PopularNews
