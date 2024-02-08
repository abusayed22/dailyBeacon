"use client";
import Image from "next/image";
import { Carousel } from "keep-react";


function Slider() {

    return (
        <>
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 ">
                <Carousel
                    showControls={false}
                    indicatorsType="ring"
                    indicatorsTypeColors="slate"
                >
                    <div className='overflow-hidden rounded-2xl has-shadow w-[30rem] relative'>
                        <div>
                            <img src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1244&q=80'
                                className='aspect-video'
                                alt='' />
                        </div>
                        <div className='absolute inset-0 z-10 bg-gradient-to-t from-black' />
                        <div className='absolute inset-x-0 bottom-0 z-20 p-4 text-white'>
                            <div className='text-xs'>
                                Ricco Xie • 1 June 2023
                            </div>
                            <h3 className='text-xl font-semibold'>
                                Sira team talk
                            </h3>
                            <div className='text-sm opacity-80'>
                                <p>
                                    🕹 Customizable and 😍 accessible design system which provides TailwindCSS component className name library to build
                                    modern UI. 💥
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden rounded-2xl has-shadow w-[30rem] relative'>
                        <div>
                            <img src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1244&q=80'
                                className='aspect-video'
                                alt='' />
                        </div>
                        <div className='absolute inset-0 z-10 bg-gradient-to-t from-black' />
                        <div className='absolute inset-x-0 bottom-0 z-20 p-4 text-white'>
                            <div className='text-xs'>
                                Ricco Xie • 1 June 2023
                            </div>
                            <h3 className='text-xl font-semibold'>
                                Sira team talk
                            </h3>
                            <div className='text-sm opacity-80'>
                                <p>
                                    🕹 Customizable and 😍 accessible design system which provides TailwindCSS component className name library to build
                                    modern UI. 💥
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-hidden rounded-2xl has-shadow w-[30rem] relative'>
                        <div>
                            <img src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1244&q=80'
                                className='aspect-video'
                                alt='' />
                        </div>
                        <div className='absolute inset-0 z-10 bg-gradient-to-t from-black' />
                        <div className='absolute inset-x-0 bottom-0 z-20 p-4 text-white'>
                            <div className='text-xs'>
                                Ricco Xie • 1 June 2023
                            </div>
                            <h3 className='text-xl font-semibold'>
                                Sira team talk
                            </h3>
                            <div className='text-sm opacity-80'>
                                <p>
                                    🕹 Customizable and 😍 accessible design system which provides TailwindCSS component className name library to build
                                    modern UI. 💥
                                </p>
                            </div>
                        </div>
                    </div>

                </Carousel>


                <Carousel
                    showControls={false}
                    indicatorsType="ring"
                    indicatorsTypeColors="slate"
                >
                    <Image
                        src="https://images.prismic.io/staticmania/ef443060-de22-498b-94c9-3fd8eaed83fe_3.png?auto=compress,format"
                        alt="slider-3"
                        height={384}
                        width={440}
                        className="relative"
                    />

                    <Image
                        src="https://images.prismic.io/staticmania/dbc3da5c-53e4-409a-bc60-24b5f19014d3_4.png?auto=compress,format"
                        alt="slider-1"
                        height={384}
                        width={440}
                    />
                    <Image
                        src="https://images.prismic.io/staticmania/6096b40b-13f9-4c98-8576-23361422dbc5_2.png?auto=compress,format"
                        alt="slider-2"
                        height={384}
                        width={440}
                    />
                </Carousel>
            </div>
        </>
    )
}

export default Slider
