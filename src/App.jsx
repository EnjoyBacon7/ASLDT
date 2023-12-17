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
          title="Transitioning to PyTorch: A New Chapter for ASLDT"
          tags={["major update", "framework", "PyTorch"]}
          body={[
            "Date: 12/15/2023 @ 14:00 PM",
            "Exciting times at ASLDT! We're thrilled to announce a significant shift in our development journey—we are transitioning from TensorFlow to PyTorch as our primary deep learning framework. This decision marks a new chapter for ASLDT, and we want to share the motivations behind this transition.",
            "### Why PyTorch?",
            "1. **Dynamic Computational Graphs:** PyTorch's dynamic computational graph approach aligns well with the iterative nature of our project. It offers greater flexibility during model development and experimentation.",
            "2. **Intuitive Debugging:** PyTorch's dynamic nature also facilitates easier debugging, allowing us to identify and resolve issues more efficiently.",
            "3. **Growing Ecosystem:** The PyTorch ecosystem has seen rapid growth, with a vibrant community and extensive resources. This fosters collaboration and ensures we have access to the latest advancements in deep learning.",
            "### Smooth Transition",
            "We understand that changes in the underlying framework may raise questions. Here's what you need to know:",
            "- **Updated Model:** We've re-implemented ASLDT's model in PyTorch, ensuring compatibility with this new framework.",
            "- **Download Link:** If you've been using our TensorFlow-based model, don't worry! You can download the latest PyTorch model ",
            <a href="#">here</a>,
            ".",
            "### Community Feedback",
            "As always, we value your feedback. If you encounter any issues or have suggestions during this transition, please reach out to us through our ",
            <a href="#">forum</a>,
            ". Your insights are crucial in making ASLDT the best it can be.",
            "We're excited about the possibilities that PyTorch brings, and we invite you to join us on this journey. Together, let's continue advancing sign language recognition technology!",
          ]}
        />




        <Update_cmpnt
          title="Bug Fixes and Performance Improvements"
          tags={["bug fix", "performance"]}
          body={[
            "Date: 12/10/2023 @ 10:45 AM",
            "In our commitment to delivering a seamless experience with ASLDT, we've been hard at work addressing bugs and enhancing performance. Here's a summary of the recent fixes and improvements:",
            "<ul>",
            "  <li>Resolved a bug causing occasional crashes during prolonged usage.</li>",
            "  <li>Optimized memory usage, resulting in improved overall performance.</li>",
            "  <li>Fixed inaccuracies in gesture recognition, particularly in challenging environments.</li>",
            "  <li>Addressed compatibility issues with certain hardware configurations.</li>",
            "</ul>",
            "We appreciate the feedback from our community that helped us identify and prioritize these issues. Your input is invaluable as we strive to make ASLDT a reliable and efficient tool for sign language recognition.",
            "To ensure you have the latest version, feel free to download the updated model file ",
            <a href="#">here</a>,
            ".",
            "Thank you for your continued support as we work towards a more polished and user-friendly ASLDT!"
          ]}
        />


        <Update_cmpnt
          title="Celebrating ASLDT's One-Month Anniversary!"
          tags={["major update"]}
          body={[
            "Date: 12/02/2023 @ 09:00 AM",
            "Time flies when you're making strides in technology! Today, we celebrate ASLDT's one-month anniversary since its inception. Reflecting on our journey, we've overcome challenges, learned invaluable lessons, and most importantly, witnessed the growth of ASLDT into a promising project.",
            "We extend our gratitude to the community for your support, feedback, and enthusiasm. Stay tuned for more updates, as we continue to refine ASLDT and push the boundaries of what's possible in sign language recognition.",
            "Thank you for being a part of the ASLDT family! Here's to many more milestones ahead!"
          ]}
        />
        
        <Update_cmpnt
          title="ASLDT's Community Engagement Initiative"
          tags={["trivial"]}
          body={[
            "Date: 11/25/2023 @ 14:30 PM",
            "ASLDT is not just a project; it's a community. We are excited to announce the launch of our Community Engagement Initiative, aimed at fostering collaboration, feedback, and shared learning.",
            "Join our ",
            <a href="#">forum</a>,
            " to connect with fellow enthusiasts, share your experiences with ASLDT, and contribute to its growth. We believe that a vibrant community is key to the success of our project, and we can't wait to see the creativity and innovation that will emerge from our collective efforts.",
            "Together, let's make ASLDT a powerful tool for sign language recognition and communication!"
          ]}
        />
        
        <Update_cmpnt
          title="Unraveling TensorFlow's Mysteries: A Deep Dive"
          tags={["major update"]}
          body={[
            "Date: 11/20/2023 @ 16:45 PM",
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
        />
        
        <Update_cmpnt
          title="Navigating the Seas of Data: Choosing the Right Dataset for ASLDT"
          tags={["trivial"]}
          body={[
            "Date: 11/15/2023 @ 12:05 PM",
            "Selecting the right dataset is a crucial step in the evolution of ASLDT. Today, we delve into the intricate process of dataset selection. While the How2Sign Dataset has been our primary choice, we are exploring alternatives to enhance the variety of gestures ASLDT can understand.",
            "Our research has led us to datasets like ",
            <a href="https://www.openslr.org/51/">The CSLR Neonate Cry Dataset</a>,
            ", offering insights into infant cry patterns, and ",
            <a href="http://chalearnlap.cvc.uab.es/dataset/26/description/">The Chalearn LAP Large Scale Isolated Gesture Dataset</a>,
            ", which focuses on isolated gestures. These diverse datasets may bring new dimensions to ASLDT's capabilities.",
            "The journey of selecting the perfect dataset continues, and we're excited to see how it shapes the future of ASLDT!"
          ]}
        />
        
        <Update_cmpnt
          title="Unveiling ASLDT's Improved Vocabulary"
          tags={["major update"]}
          body={[
            "Date: 11/10/2023 @ 15:20 PM",
            "We are thrilled to announce a significant breakthrough in the development of ASLDT! Our latest update introduces an improved version of our AI, capable of recognizing gestures beyond simple letters.",
            "The enhanced AI has been trained using the aforementioned How2Sign dataset, incorporating gestures beyond the scope of traditional sign language alphabets. We believe this expansion will make ASLDT more inclusive and applicable to a wider range of users.",
            "Stay tuned for further updates as we continue to refine and expand the capabilities of ASLDT!"
          ]}
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
