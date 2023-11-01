import github_dark from './assets/github-dark.svg'
import github_light from './assets/github-light.svg'

function Navbar({theme}) {

    // Set the icon theme to the opposite of the current theme
    var icon_theme;
    if (theme == 'dark') {
        icon_theme = "light"
    } else if (theme == 'light') {
        icon_theme = "dark"
    }
    var gh_icon;

    icon_theme = theme == 'dark' ? gh_icon = github_light : gh_icon = github_dark

    

    return (
        <div className="d-flex justify-content-end m-2 fixed-top">
            <a className={`btn btn-${theme}`} href="https://github.com/EnjoyBacon7/ASLDT">                
            <img src={gh_icon} alt="github" width="30" height="30" />
            </a>
        </div>
    )
}

export default Navbar