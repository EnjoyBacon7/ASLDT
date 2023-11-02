import github_dark from './assets/github-dark.svg'
import github_light from './assets/github-light.svg'

import { ThemeContext } from './ThemeProvider';

import React, { useContext } from 'react'

function Navbar() {

    const { theme } = useContext(ThemeContext)
    var gh_icon = theme == 'dark' ? github_light : github_dark

    return (

        <div className='fixed-top container border-bottom p-3'>
            <div className={`bg-${theme} z-n1 position-absolute top-0 start-0 w-100 h-100`}></div>
            <div className='d-flex justify-content-between align-items-center'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item active" aria-current="page"><a href="https://enjoybacon7.github.io/ASLDT/">Progress Updates</a></li>
                    </ol>
                </nav>
                <div>
                    <a className={`btn btn-${theme}`} href="https://github.com/EnjoyBacon7/ASLDT">
                        <img src={gh_icon} alt="github" width="30" height="30" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar