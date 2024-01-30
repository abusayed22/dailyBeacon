import React from 'react'

function NewsTitle(props) {
    return (
        <div>
            <div className="flex flex-wrap justify-center -mx-4">
                <div className="w-full px-4">
                    <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                        <span className="font-semibold text-lg text-primary mb-2 block text-yellow-400">
                            {props.title}
                        </span>
                        <h2
                            className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4"
                        >
                            Our {props.title} News
                        </h2>
                        <p className="text-base text-body-color">
                            There are many variations of passages of Lorem Ipsum available but
                            the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsTitle
