import React, { useState } from 'react'
import { useEffect } from 'react'

import Title from './Title'
import Update_cmpnt from './Update_cmpnt'
import Navbar from './Navbar'
import { ThemeProvider } from './ThemeProvider'

function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <div className="container">
        <Title />
        <Update_cmpnt
          title="Project Proposal Submission!"
          body="ASLDT now has an official project proposal! (Link below) It goes into detail about the project and what we plan to do with it. It also has a timeline of when we plan to do things. Check it out! While we wait for the proposal to be approved, we will be working on the website and learning TensorFlow."
          date="30/10/2023"
          downloadableContent={"Project proposal - Redacted.pdf"}
        />
      </div>
    </ThemeProvider>
  )
}

export default App