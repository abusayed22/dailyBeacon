'use client'

import Slider from "./Slider"

function Hero() {


  return (
    <div>

      <section className="bg-black w-full h-vh ">

        <div className=" md:w-[90%] md:mx-auto flex items-center py-6  ">
          {/* content  */}
          <div className="w-1/3 hidden md:block">
            <h1 className="text-3xl md:text-5xl p-2 text-body tracking-loose">
              InsightFeed
            </h1>
            <h2 className="text-3xl md:text-5xl text-main_color leading-relaxed md:leading-snug mb-2">
              Your Gateway to News, Commentary, and Community Engagement
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Empowering Your Voice: Join the Conversation, Share Your Views, and Stay Informed with InsightFeed
            </p>
            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-secondary_color text-secondary_color hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none">
              Create Your Profile
            </button>
          </div>

          {/* slider  */}
          <div className="w-2/3 mx-auto">
            <Slider />
            <div className="w-full md:hidden flex justify-center">
              <button type="button" className="mt-5 p-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-secondary_color text-secondary_color hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none justify-center">
                Create Your Profile
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Hero
