import React from 'react'
import Category from './Category'
import Download from './Download'
import PopulerLocation from './Populer_location'

function Home() {
    return (
        <div>
            <div className="container web__body">
                <div className="row">
                    <Category sectionName="Category Section" />
                </div>
                <div className="__category">
                    <Category sectionName="Collections Section" />
                </div>
                <div className="populer__location mt-5">
                    <PopulerLocation />
                </div>
            </div>
            <div className="row mt-4 footer container-fluid">
                <Download />
            </div>
        </div>
    )
}

export default Home