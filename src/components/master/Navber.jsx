"use client"

function Navber(props) {


  return (
    <header className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 shadow-lg h-24 hidden md:flex">
  <a
    href=""
    className=" flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
  >
    <div>Logo</div>
  </a>
  <nav className="header-links contents font-semibold text-base lg:text-lg">
    <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
      <li className="p-3 xl:p-6 active">
        <a href="/">
          <span>Home</span>
        </a>
      </li>
      {
        props["data"]['categories'].map((item,i) => (
          <li key={i} className="p-3 xl:p-6">
        <a href={`/category-news?id=${item['id']}`}>
          <span className="capitalize">{item['name']}</span>
        </a>
      </li>
        ))
      }
      
      
    </ul>
  </nav>
  <nav className="hidden xl:contents">
    <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
      <li className="p-1">
        <a
          href={props["data"]['socials'][0]['twitter']}
          className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
        >
          <svg
            className="h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="twitter"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            />
          </svg>
        </a>
      </li>
      <li className="p-1">
        <a
          href={props["data"]['socials'][0]['facebook']}
          className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
        >
          <svg
            className="h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-f"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
        </a>
      </li>
      <li className="p-1">
        <a
          href={props["data"]['socials'][0]['linkedin']}
          className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
        >
          <svg
            className="h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="linkedin-in"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
  <div className=" flex items-center px-4 lg:px-6 xl:px-8">
    <a href="" className="mr-4 lg:mr-6 xl:mr-8">
      <svg
        className="h-6 xl:h-8"
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="search"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
        />
      </svg>
    </a>
    <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
      Login/Register
    </button>
  </div>
</header>

  )
}

export default Navber
