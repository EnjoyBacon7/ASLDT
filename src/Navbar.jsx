function Navbar({theme}) {

    // Set the icon theme to the opposite of the current theme
    var icon_theme;
    if (theme == 'dark') {
        icon_theme = "light"
    } else if (theme == 'light') {
        icon_theme = "dark"
    }


    

    return (
        <div className="d-flex justify-content-end m-2 fixed-top">
            <a className={`btn btn-${theme}`} href="https://github.com/EnjoyBacon7/ASLDT">                
            <img src={`src/assets/github-${icon_theme}.svg`} alt="github" width="30" height="30" />
            </a>
        </div>
    )
}

export default Navbar