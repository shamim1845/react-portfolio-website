import ChatCord from "../assets/images/projects/portfolio1.png";
import Shamim_Keep from "../assets/images/projects/portfolio2.png";
import Weather_App from "../assets/images/projects/portfolio3.png";

// Data of Portfolio
export const PortfolioData = [
  {
    id: 1,
    title: "ChatCord",
    desc: "This page contains the case study of the ChatCord App which includes the Project Overview, Tools Used, Live Link, and Github Link to the official product.",
    link: {
      live: "https://chatcord-realtime-chat-app.herokuapp.com",
      github: "https://github.com/shamim1845/chatcord",
    },
    img: ChatCord,
    overview:
      "ChatCord is a platform for people to join the private chat room. I had an idea and I thought it will be cool and helpful for users to have a place where they can chat with other like-minded people who follow the same topic as them and build a stronger community. I took inspiration from other similar platforms like Discord, Messanger groups, etc. which are similar in terms of having a place for people of certain communities and providing them a space to communicate like-minded people of the same community. Feel free to check out the Project by visiting the Live Link and check the GitHub link to see the code.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "GIT",
      "Github",
      "Node",
      "Express",
      "Moment.js",
      "Socket.io",
    ],
  },

  {
    id: 2,
    title: "Shamim Keep",
    desc: "This page contains the case study of the Shamim Keep App which includes the Project Overview, Tools Used, Live Link, and Github Link to the official product.",
    link: {
      live: "https://shamim1845.github.io/shamim-keep",
      github: "https://github.com/shamim1845/shamim-keep",
    },
    img: Shamim_Keep,
    overview:
      "Shamim Keep is a keeping app for people to keep their daily notes. I had an idea and I thought it will be cool and helpful for users to have a place where they can keep their daily notes and complete their daily tasks easily. I took inspiration from other similar platforms like Google Keep, which are similar in terms of having a place for people to keep notes. Feel free to check out the Project by visiting the Live Link and check the GitHub link to see the code.",
    tools: ["HTML", "CSS", "JavaScript", "GIT", "Github"],
  },

  {
    id: 3,
    title: "Weather App",
    desc: "This page contains the case study of the Weather App which includes the Project Overview, Tools Used, Live Link, and Github Link to the official product.",
    link: {
      live: "https://weather-app-with-express.herokuapp.com/",
      github: "https://github.com/shamim1845/weather-app-with-express.js",
    },
    img: Weather_App,
    overview:
      "Weather App is a current weather-checking app for people to check the weather in their city. I had an idea and I thought it will be cool and helpful for users to have a place where they can check the current weather info easily. In this project, I used free weather API to show the current weather info. Feel free to check out the Project by visiting the Live Link and check the GitHub link to see the code.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "GIT",
      "Github",
      "Node",
      "Express",
      "Hbs",
    ],
  },
];

// Data of Educational History
export const EduHistory = [
  {
    institue: "Atish Dipankar University of Science and Technology(Adust)",
    date: "may 2022 - current",
    role: "student",
    degree: "BSC",
    comment:
      "I have a dream to be a software developer. That's why I have started my bachelor's course at Atish Dipankar University of Science and Technology(Adust) in the department of CSE. Now, I have focused on completing my bachelor's degree and want to be a self-taught software developer. Just it.",
  },
  {
    institue: "Govt. Technical School & College, Natore",
    date: "may 2016 - jan 2021",
    role: "student",
    degree: "Diploma",
    comment:
      "I started my diploma course in 2016. In this course, I got selected for the department of Power Technology. After joining this course, I learned many things about the department of power and mechanicals. In 2021, I completed my diploma and got certified.",
  },
  {
    institue: "Sher-E-Bangla High School,Natore",
    date: "may 2022 - current",
    role: "student",
    degree: "SSC",
    comment:
      "In 2011, after passed of PSC I joined a school called Sher E Bangla High School, Natore. In this school, I studied classes from sixth - tenth. Finally, I joined the SSC exam and got my certificate in 2016.",
  },
];
