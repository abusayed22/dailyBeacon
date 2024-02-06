import GenaralLayout from '@/components/master/GenaralLayout'
import DetailsNews from '@/components/news/DetailsNews'
import { headers } from 'next/headers';

// fetching data 
const getData = async (id) => {
  const details = (await(await fetch(`${process.env.BASE_URL}/api/news/new-details?id=${id}`)).json())["data"];
  return details;
}

async function page() {
  const headersList = headers();
  const reqId = headersList.get('id') || "";

  
  const data= await getData(reqId)
  
 
  return (
    <GenaralLayout>
      <DetailsNews data={data}/>
    </GenaralLayout>
  )
}

export default page
