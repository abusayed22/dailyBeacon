import Footer from "./Footer";
import Navber from "./Navber";


// data fetching for layout
const getData = async() => {
  const socials = (await(await fetch(`${process.env.BASE_URL}/api/social`)).json())["data"];
  const categories = (await(await fetch(`${process.env.BASE_URL}/api/category`)).json())["data"];
  return {socials:socials,categories:categories}
}


async function GenaralLayout(props) {
  
  const data = await getData();

  return (
    <div>
      <Navber data={data}/>
      {props.children }
      <Footer data={data}/>
    </div>
  )
}

export default GenaralLayout
