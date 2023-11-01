import github_dark from './assets/github-dark.svg'
import github_light from './assets/github-light.svg'


function Navbar({ theme }) {

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
        <div className='fixed-top d-flex justify-content-between align-items-center container'>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item">Home</li>
                    <li class="breadcrumb-item active" aria-current="page"><a href="https://enjoybacon7.github.io/ASLDT/">Progress Updates</a></li>
                </ol>
            </nav>
            <div>
                <a className={`btn btn-${theme}`} href="https://github.com/EnjoyBacon7/ASLDT">
                    <img src={gh_icon} alt="github" width="30" height="30" />
                </a>
            </div>
        </div>
    )
}

export default Navbar