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
          title="Transitioning to PyTorch and dataset update"
          tags={["major update"]}
          body={[
            "New things happen all the time as ASLDT grows, and today is a turning point in its development. We are transitioning from TensorFlow to PyTorch as ASLDT's deep learning framework and updating the dataset. PyTorch is a powerful framework that offers greater flexibility and intuitive debugging. It is truly a godsend for us, as the debugging process has been a major pain point in our development journey.",
            <br />,
            "In addition, we are updating the dataset to ease the training process. The new dataset - that is to say WLASL - is a lot more compact than How2Sign, which will significantly reduce the training time. (It also allows us to save a lot of space on our computers!)",
          ]}
          date="12/15/2023 @ 14:00 PM"
        />

        <Update_cmpnt
          title="Bug Fixes and Performance Improvements"
          tags={["bug-fix"]}
          body={[
            "Developing an AI is no easy task, and bugs are part of the development process. Here are a few updates:",
            <ul>
              <li>Optimized restarting training session following an unexpected crash or failure</li>
              <li>Fixed inaccuracies in gesture recognition, particularly in challenging environments.</li>
              <li>Addressed compatibility issues with MacOS and Linux.</li>
            </ul>,
          ]}
          date="12/10/2023 @ 10:45 AM"
        />


        <Update_cmpnt
          title="Celebrating ASLDT's One-Month Anniversary!"
          tags={["major update"]}
          body={[
            "Time flies when you're making strides in technology! Today, we celebrate ASLDT's one-month anniversary since its inception. Reflecting on our journey, we've overcome challenges, learned invaluable lessons, and most importantly, witnessed the growth of ASLDT into a promising project.",
            "We extend our gratitude to the community for your support, feedback, and enthusiasm. Stay tuned for more updates, as we continue to refine ASLDT and push the boundaries of what's possible in sign language recognition.",
            "Thank you for being a part of the ASLDT family! Here's to many more milestones ahead!"
          ]}
          date="12/02/2023 @ 09:00 AM"
        />
        
        <Update_cmpnt
          title="ASLDT's Community Engagement Initiative"
          tags={["trivial"]}
          body={[
            "ASLDT is not just a project; it's a community. We are excited to announce the launch of our Community Engagement Initiative, aimed at fostering collaboration, feedback, and shared learning.",
            "Join our ",
            <a href="#">forum</a>,
            " to connect with fellow enthusiasts, share your experiences with ASLDT, and contribute to its growth. We believe that a vibrant community is key to the success of our project, and we can't wait to see the creativity and innovation that will emerge from our collective efforts.",
            "Together, let's make ASLDT a powerful tool for sign language recognition and communication!"
          ]}
          date="11/25/2023 @ 14:30 PM"
        />
        
        <Update_cmpnt
          title="Unraveling TensorFlow's Mysteries: A Deep Dive"
          tags={["major update"]}
          body={[
            "TensorFlow, our newfound ally, has been instrumental in propelling ASLDT to greater heights. In this post, we take a deep dive into TensorFlow's functionalities, demystifying some of its complex features.",
            "One particular challenge we encountered was understanding the purpose of the function ",
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
            ". Through experimentation and collaboration, we've not only cracked the code but also successfully trained a model capable of recognizing various clothing items.",
            "Join us in our journey to unravel TensorFlow's mysteries and witness the powerful synergy it brings to ASLDT!"
          ]}
          date="11/20/2023 @ 16:45 PM"
        />
        
        <Update_cmpnt
          title="Navigating the Seas of Data: Choosing the Right Dataset for ASLDT"
          tags={["trivial"]}
          body={[
            "Selecting the right dataset is a crucial step in the evolution of ASLDT. Today, we delve into the intricate process of dataset selection. While the How2Sign Dataset has been our primary choice, we are exploring alternatives to enhance the variety of gestures ASLDT can understand.",
            "Our research has led us to datasets like ",
            <a href="https://www.openslr.org/51/">The CSLR Neonate Cry Dataset</a>,
            ", offering insights into infant cry patterns, and ",
            <a href="http://chalearnlap.cvc.uab.es/dataset/26/description/">The Chalearn LAP Large Scale Isolated Gesture Dataset</a>,
            ", which focuses on isolated gestures. These diverse datasets may bring new dimensions to ASLDT's capabilities.",
            "The journey of selecting the perfect dataset continues, and we're excited to see how it shapes the future of ASLDT!"
          ]}
          date="11/15/2023 @ 12:05 PM"
        />
        
        <Update_cmpnt
          title="Unveiling ASLDT's Improved Vocabulary"
          tags={["major update"]}
          body={[
            "We are thrilled to announce a significant breakthrough in the development of ASLDT! Our latest update introduces an improved version of our AI, capable of recognizing gestures beyond simple letters.",
            "The enhanced AI has been trained using the aforementioned How2Sign dataset, incorporating gestures beyond the scope of traditional sign language alphabets. We believe this expansion will make ASLDT more inclusive and applicable to a wider range of users.",
            "Stay tuned for further updates as we continue to refine and expand the capabilities of ASLDT!"
          ]}
          date="11/10/2023 @ 15:20 PM"
        />
        
        <Update_cmpnt
          title="Choosing our ASL knowledge base"
          tags={["trivial"]}
          body={[
            "Now that ASLDT has had its initial push into existence, it is time to focus on its knowlege source. That's to say, the database it will be trained on. There are a bunch of these out there, like ",
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
