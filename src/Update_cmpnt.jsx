import download_light from './assets/download-light.svg'
import download_dark from './assets/download-dark.svg'

function Update_cmpnt({ title, body, date, downloadableContent}) {
    
    console.log(`./content/${downloadableContent[0]}`)
    
    const theme = localStorage.getItem('theme')
    var download_icon = theme == 'dark' ? download_light : download_dark

    return (
        <div>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <span>{title}</span>
                    <span>{date}</span>
                </div>
                <div className="card-body">
                    {body}
                </div>
                <div className="card-footer">
                    <a className='d-flex align-items-center' href={`./content/${downloadableContent}`}>
                        <img src={download_icon} alt="download" width="30" height="30" />
                        <div>{downloadableContent} </div>   
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Update_cmpnt