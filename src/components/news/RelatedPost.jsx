import React from 'react'

function RelatedPost() {
  return (
    <>
      <div className="space-y-6">
            {/* Media */}
            <a className="group flex items-center gap-x-6" href="#">
              <div className="grow">
                <span className="text-sm font-bold text-gray-800  group-hover:text-main_color">
                  5 Reasons to Not start a UX Designer Career in 2022/2023
                </span>
              </div>
              <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                <img
                  className="w-full h-full absolute top-0 start-0 object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="Image Description"
                />
              </div>
            </a>
            {/* End Media */}
            
          </div>
    </>
  )
}

export default RelatedPost
