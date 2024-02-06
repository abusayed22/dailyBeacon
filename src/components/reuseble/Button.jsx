import React from 'react'

function Button({text,bg,func}) {
    return (
        <>
            <button  type="button" className={`py-3 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-${bg} text-white hover:bg-opacity-90`}>
                {text}
            </button>
        </>
    )
}

export default Button
