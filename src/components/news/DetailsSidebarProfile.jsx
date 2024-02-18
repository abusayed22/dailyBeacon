import React from 'react'

function DetailsSidebarProfile() {
  return (
    <>
      <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
            <a className="block flex-shrink-0" href="#">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
            </a>
            <a className="group grow block" href="">
              <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                Leyla Ludic
              </h5>
              <p className="text-sm text-gray-500">UI/UX enthusiast</p>
            </a>
            <div className="grow">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <line x1={19} x2={19} y1={8} y2={14} />
                    <line x1={22} x2={16} y1={11} y2={11} />
                  </svg>
                  Follow
                </button>
              </div>
            </div>
          </div>
    </>
  )
}

export default DetailsSidebarProfile
