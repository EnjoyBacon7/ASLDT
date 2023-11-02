import React, { useState } from 'react'
import { CodeBlock, dracula } from "react-code-blocks";

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
          title="Introducing TensorFlow!"
          tags={["trivial"]}
          body={[
            "The ASLDT team really doesn't waste time, does it? We've finally taken a first look at TensorFlow, and we're excited to make it fit our needs. It's already demystified a lot of the machine learning process for us, putting us a lot more at ease with the project. Although not everything is clear yet, we're confident that we'll be able to make a lot of progress in the coming weeks. In our defense though, what the heck is this function supposed to do?",
            <CodeBlock
              key={"null"}
              text={
                "tf.keras.optimizers.legacy.Adam()"
              }
              language={"python"}
              showLineNumbers={false}
              startingLineNumber={1}
              theme={dracula}
            />,
            "What is Adam doing here? ;) Jokes aside, we've managed to train a simple AI which can recognize a piece of clothing!"
          ]}
          date="11/02/2023 @ 00:30 AM"
        />

        <Update_cmpnt
          title="ASLDT's website is now live!"
          tags={["trivial"]}
          body={[
            "Keep track of our progress here! The team will post updates as we make progress. Expect news often and exciting stories concerning our project adventures! The website will also be worked on as more functionality is needed. Anyways, Enjoy!"
          ]}
          date="10/31/2023 @ 11:01 PM"
        />
        <Update_cmpnt
          title="Project Proposal Submission!"
          tags={["major update"]}
          body={[
            "ASLDT now has an official project proposal! (Link below) It goes into detail about the project and what we plan to do with it. It also has a timeline of when we plan to do things. Check it out! While we wait for the proposal to be approved, we will be working on the website and learning TensorFlow."
          ]}
          date="10/30/2023 @ 11:35 PM"
          downloadableContent={"Project proposal - Redacted.pdf"}
        />
      </div>
    </ThemeProvider>
  )
}

export default App