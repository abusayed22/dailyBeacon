import GenaralLayout from '@/components/master/GenaralLayout'
import DetailsNews from '@/components/news/DetailsNews'
// import { useRouter } from 'next/router';

// fetching data 
const getData = async (id) => {
  const details = (await(await fetch(`${process.env.BASE_URL}/api/news/new-details?id=${id}`)).json())["data"];
  return details;
}

async function page() {
  // const router = useRouter() TODO: how to get search params in server component in nextjs
  const data= await getData()
  return (
    <GenaralLayout>
      <DetailsNews />
      <hr />
    </GenaralLayout>
  )
}

export default page
