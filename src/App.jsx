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
          title="Dataset options"
          tags={["trivial"]}
          body={[
            "Now that ASLDT has had its initial push into existence, it is time to focus on its final knowlege base. That's to say, the database it will be trained on. There are a bunch of these out there, like ",
            <a href="https://www.kaggle.com/datasets/datamunge/sign-language-mnist">The MNIST Dataset</a>,
            ", ",
            <a href="https://how2sign.github.io">The How2Sign Dataset</a>,
            ", or ",
            <a href="https://dxli94.github.io/WLASL/">The WLASL Dataset</a>,
            ". We think we'll stick with How2Sign because of its very extensive word range and thanks to how comprehensive it is although it is quite large, at around 300GB."
          ]}
          date="11/5/2023 @ 13:42 PM"
        />
        
        <Update_cmpnt
          title="ASLDT's first AI"
          tags={["major update"]}
          body={[
            "Quite an achievement today! We have a first AI up and running. It can currently only recognize letters in a particularly good environment, but is quite a promising start nonetheless. It's exhilarating seeing a simple movement of the hand being recognized by a computer. Here is the dataset we used for the training: ",
            <a href="https://www.kaggle.com/datasets/datamunge/sign-language-mnist">sign-language-mnist</a>,
            <br />,
            "Feel free to download the model and try it out for yourself! (Link below)"
          ]}
          date="11/02/2023 @ 18:35 PM"
          downloadableContent={"ASLDT v1.0.zip"}
        />

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
