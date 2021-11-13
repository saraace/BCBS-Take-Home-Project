
# BCBS &mdash; Take Home Project
![BCBS Assessment](https://wordpress.saraace.com/wp-content/uploads/2021/11/bcbs-assessment.png)
## 🔍 Project Overview

The purpose of this assessment was to create an image upload app. Displayed at the top right of the page is an upload button which will open a modal used for uploading an image and related caption. Below the top bar, an grid of images is shown containing seven images that have been included in the project along with any images you have uploaded on your own. 

For the backend I created a simple express server with LokiJS integrated. LokiJS is an in-memory object oriented databse written in Javascript. In this scenario I am creating a LokiJS collection when the server starts called images. When using the POST endpoint `/upload`, a new entry containing the image path and caption is inserted into the collection. Additionally, the same image collection is returned via the GET endpoint `/images`.

## 🤔 Future Features

Once I started this project I began to think of a lot of fun features that I could add to it given more time. Some of those features include: 

 - Custom Material UI theme
 - On click action of image card. This action could open a larger version of the image along with additional information specified by the user. 
 - Integration of [Framer Motion](https://www.framer.com/motion/) to give the application some animation such as fading in image cards.
 - Download button for each card.

## 🛠 Installation

Please run `yarn install` then `yarn start`.

## 💻 Technologies Used

 - Typescript
 - React
 - Redux
 - [LokiJS](https://github.com/techfort/LokiJS)
 - Material UI 
 - Emotion Styled components

## 👩🏻‍💻 Note from the Author

Hi! I’m Sara Acevedo. I’m a software engineer, and I love working on visually appealing Front End Projects. I found this assessment enjoyable because it allowed me to be creative while showing off my skills. As a lover of clean code, I knew this would be the perfect opportunity to utilize Typescript to keep my components clear and concise. Additionally, I set up a Redux store to manage the images that have been uploaded to the app. Redux allowed me to dispatch an action when uploading an new image so that  I could refresh the data displayed in the image grid.

Please let me know of any feedback. I look forward to the next steps! *&mdash; Sara*
