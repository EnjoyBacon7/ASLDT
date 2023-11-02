import download_light from './assets/download-light.svg'
import download_dark from './assets/download-dark.svg'
import delete_light from './assets/delete-light.svg'
import delete_dark from './assets/delete-dark.svg'
import edit_light from './assets/edit-light.svg'
import edit_dark from './assets/edit-dark.svg'

import { ThemeContext } from './ThemeProvider'

import React, { useContext } from 'react'

function Update_cmpnt({ title, tags, body, date, downloadableContent }) {

    const { theme } = useContext(ThemeContext)
    var download_icon = theme == 'dark' ? download_light : download_dark
    var delete_icon = theme == 'dark' ? delete_light : delete_dark
    var edit_icon = theme == 'dark' ? edit_light : edit_dark

    const tagToColorMap = {
        "trivial": "text-bg-secondary",
        "major update": "text-bg-primary",
        "bug-fix": "text-bg-success",
    };


    return (
        <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
                <span className='d-flex align-items-center'>
                    {title}
                    {tags && tags.map((tag) => (
                        <span key={tag} className={`badge rounded-pill ${tagToColorMap[tag] || 'text-bg-secondary'} ms-2`}>
                            {tag}
                        </span>
                    ))}
                </span>
                <span className='d-flex align-items-center'>
                    {date}
                    {/* Added buttons in prevision of self-hosted site */}
                    {/*
                    <button className='btn btn-outline-secondary p-0 ms-2'>
                        <img src={edit_icon} alt="delete" width="30" height="30" />
                    </button>
                    <button className='btn btn-outline-danger p-0 ms-2'>
                        <img src={delete_icon} alt="delete" width="30" height="30" />
                    </button>
                    */}
                </span>
            </div>
            <div className="card-body">
                {body}
            </div>
            {downloadableContent &&
                <div className="card-footer">
                    <a className='d-flex align-items-center' href={`./content/${downloadableContent}`} download>
                        <img src={download_icon} alt="download" width="30" height="30" />
                        <div>{downloadableContent} </div>
                    </a>
                </div>
            }
        </div>
    )
}

export default Update_cmpnt