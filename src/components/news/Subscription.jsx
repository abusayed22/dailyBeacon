import React from 'react'

function Subscription() {
  return (
    <div>
      <section class="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div class="absolute inset-0">
        <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/2/man-eating-noodles.jpg" alt="" />
    </div>
    <div class="absolute inset-0 bg-gray-900/20"></div>

    <div class="relative max-w-lg px-4 mx-auto sm:px-0">
        <div class="overflow-hidden bg-white rounded-md shadow-md">
            <div class="px-4 py-6 sm:px-8 sm:py-7">
                <div class="text-center">
                    <h2 class="text-3xl font-bold text-simple">Subscibe</h2>
                </div>

                <form action="#" method="POST" class="mt-8">
                    <div class="space-y-5">
                        <div>
                            <label for="" class="text-base font-medium text-simple"> Email address </label>
                            <div class="mt-2.5">
                                <input type="email" name="" id="" placeholder="Enter email to get started" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>
                        </div>

                       

                        <div>
                            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-secondary_color hover:bg-main_color border border-transparent rounded-md focus:outline-none focus:bg-main_color">Subscription</button>
                        </div>

                        
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Subscription
