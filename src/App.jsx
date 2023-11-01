import React, { useState } from 'react'
import { useEffect } from 'react'

import Title from './Title'
import Update_cmpnt from './Update_cmpnt'
import Navbar from './Navbar'

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  // Set the theme to system theme
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  useEffect(() => {
    darkModeMediaQuery.matches ? setTheme('dark') : setTheme('light')
  }, [])
  darkModeMediaQuery.addListener(e => {
    darkModeMediaQuery.matches ? setTheme('dark') : setTheme('light')
  });
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
    // localStorage only used to avoid FOUC (flash of unstyled content)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div>
      <Navbar theme={theme} />
      <div className="container">
        <Title />
        <Update_cmpnt
          title="This is an example Card"
          body="There are many examples in the world. Things that go well, things that don't. It's quite amazing, truthfully"
          date="12/12/2020"
        />
      </div>
    </div>
  )
}

export default App