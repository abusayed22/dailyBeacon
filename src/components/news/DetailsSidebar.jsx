import React from 'react'
import DetailsSidebarProfile from './DetailsSidebarProfile'
import RelatedPost from './RelatedPost'

function DetailsSidebar() {
    return (
        <>
            <div className="lg:col-span-1 lg:w-full lg:h-full bg-gradient-to-r via-transparent to-transparent from-secondary_color">
                <div className="sticky top-0 start-0 py-8 lg:ps-8">
                    {/* <DetailsSidebarProfile /> */}

                    <RelatedPost />
                </div>
            </div>
        </>
    )
}

export default DetailsSidebar
