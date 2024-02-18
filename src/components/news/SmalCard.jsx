import React from 'react'

function SmalCard({data}) {
    
  return (
    <>
      <a href={`/details-news?id=${data?.id}`} className='cursor-pointer overflow-hidden border border-body rounded-2xl md:w-[26rem] grid grid-cols-4 hover:shadow-black/50 hover:shadow-md transition duration-300 hover:scale-105'>
                    <div className='col-span-3 p-4 flex flex-col gap-2 justify-between'>
                        <h3 className='text-xl font-semibold line-clamp-2'>
                            <p className='text-simple text-sm md:text-lg'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus iusto laborum autem placeat
                                aspernatur inventore eius deleniti reprehenderit?
                            </p>
                        </h3>
                        <div className='text-xs text-simple'>
                            Ricco Xie • 1 June 2023
                        </div>
                    </div>
                    <div className='col-span-1 text-simple'>
                        <img src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1244&q=80'
                            className='h-full aspect-square rounded-l-none'
                            alt='' />
                    </div>
                </a>
    </>
  )
}

export default SmalCard
