import GenaralLayout from '@/components/master/GenaralLayout'
import ListbyCard from '@/components/news/ListbyCard';
import { headers } from 'next/headers'


// fetching data 
const getData = async (id) => {
  const details = (await(await fetch(`${process.env.BASE_URL}/api/news/list-by-category?id=${id}`)).json())["data"];
  return details;
}


async function page() {
  const headerlist = headers();
  const reqId = headerlist.get("id") || "";

  const data = await getData(reqId);


  return (
    <GenaralLayout>
        <div className='flex'>
          <div className='mx-auto w-[90%] md:w-[70%] border'></div>
          <div className='hidden md:block md:w-[30%] border'></div>
        </div>
    </GenaralLayout>
  )
}

export default page
