import React from 'react'

function LoadingButton({bg}) {
    return (
        <button type="button" className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-${bg} text-white `}>
            <span className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
            Loading
        </button>
    )
}

export default LoadingButton
