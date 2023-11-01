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
          title="ASLDT's website is now live!"
          body="Keep track of our progress here! The team will post updates as we make progress. Expect news often and exciting stories concerning our project adventures! The website will also be worked on as more functionality is needed. Anyways, Enjoy!"
          date="10/31/2023 @ 11:01 PM"
        />
        <Update_cmpnt
          title="Project Proposal Submission!"
          body="ASLDT now has an official project proposal! (Link below) It goes into detail about the project and what we plan to do with it. It also has a timeline of when we plan to do things. Check it out! While we wait for the proposal to be approved, we will be working on the website and learning TensorFlow."
          date="10/30/2023 @ 11:35 PM"
          downloadableContent={"Project proposal - Redacted.pdf"}
        />
      </div>
    </ThemeProvider>
  )
}

export default App