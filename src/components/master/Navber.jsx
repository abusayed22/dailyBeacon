"use client"

import { Navbar, TextInput } from "keep-react";
import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  MagnifyingGlass,
  TwitterLogo,
} from "phosphor-react";
import Button from "../reuseble/Button";
import LoadingButton from "../reuseble/LoadingButton";
import { useRouter } from "next/navigation";



function Navber(props) {
  const router = useRouter()


  return (
    <div>
      {/* header 1  */}
      <header>
        <Navbar fluid={true} className="bg-body">
          <Navbar.Container className="flex items-center justify-around ">
            <Navbar.Brand >
              <img
                onClick={() => router.push("/")}
                src="/images/keep.svg"
                alt="keep"
                width="100"
                height="40"
              />
            </Navbar.Brand>
            {/* input  */}
            <div className="flex rounded-lg shadow-sm">
              <input type="text" id="hs-search-box-with-loading-2" name="hs-search-box-with-loading-2" className="py-3 px-4 block md:w-[400px] border-secondary_color shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-secondary_color focus:ring-secondary_color " placeholder="Search here..." />
              <button type="button" className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-secondary_color text-white">
                <MagnifyingGlass size={20} color="#FDFEFE" />
              </button>
              {/* if loading  */}
              {/* <LoadingButton bg={"secondary_color"}/> */}
            </div>

            <Navbar.Container className="flex items-center gap-6">
              <Navbar.Container
                tag="ul"
                className="lg:flex hidden items-center justify-around gap-6 h-20"
              >

                <ul className="h-16 flex items-center">
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
                      className=" inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
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

                <Button text={"Login / Register"} bg={'secondary_color'} func={'login'} />
                {/* if loading  */}
                {/* <LoadingButton bg={'secondary_color'} /> */}

              </Navbar.Container>
              <Navbar.Container className="flex gap-1">
                <Navbar.Toggle className="block" />
              </Navbar.Container>
            </Navbar.Container>
            <Navbar.Collapse
              collapseType="sidebar"
              className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
            >
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                <Navbar.Brand >
                  <img
                    src="/images/keep.svg"
                    alt="keep"
                    width="100"
                    height="40"
                  />
                </Navbar.Brand>
                <Navbar.Link
                  linkName="Home"
                  icon={<CaretDown size={20} />}
                  className="!py-0"
                />

                {
                  props["data"]['categories'].map((item, i) => (
                    // <li key={i} className="p-3 xl:p-6">
                    //   <a href={`/category-news?id=${item['id']}`}>
                    //     <span className="capitalize">{item['name']}</span>
                    //   </a>
                    // </li>
                    <Navbar.Link href={`/category-news?id=${item['id']}`} key={i} linkName={item['name']} className=" md:hidden !py-0 capitalize !text-main_color" />
                  ))
                }

                <div className="flex flex-col gap-y-5">
                  <ul className="h-16 flex items-center justify-center">
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
                        className=" inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
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
                  <Button text={"Login / Register"} bg={'secondary_color'} func={'login'} />
                  {/* if loading  */}
                  {/* <LoadingButton bg={'secondary_color'} /> */}
                </div>

              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>
        </Navbar>
      </header>

      {/* header 2  */}
      <header className="bg-gradient-to-t from-gray-900 via-main_color to-violet-300 shadow-lg h-18 hidden md:flex ">
        <nav className="header-links contents font-semibold text-base lg:text-lg ">
          <ul className="hidden w-[90%] md:flex items-center justify-around ml-4 xl:ml-8 mr-auto">

            {
              props["data"]['categories'].map((item, i) => (
                <li key={i} className="p-3 xl:p-6">
                  <a href={`/category-news?id=${item['id']}`}>
                    <span className="capitalize">{item['name']}</span>
                  </a>
                </li>
              ))
            }


          </ul>
        </nav>
      </header>
    </div>

  )
}

export default Navber
