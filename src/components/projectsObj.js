import todolistLaptop from '../images/todo_laptop.png';
import todolist_mobile from '../images/todo_mobile.png'
import todolist_video   from '../video/todos_mov.mov'
import tarotLaptop from '../images/tarot_laptop.png';
import tarot_mobile from '../images/tarot_mobile.png';
import tarot_video from '../video/Tarot_video.mov';
import WWHNA from'../images/WWHNA_computer.png';

import Lauren from '../images/LH_computer.png';
import pomedoro from '../images/working_phone.png';
import pomdedoro2 from '../images/break_phone.png';
import pomedoro_video from '../video/pomedoro.mov'; 

const ProjectsObj = [
    {
        title: `Today's Todos`,
        mainImage: todolistLaptop,
        url: '',
        summary1: `This project evolved from a vanilla JavaScript CRUD site with one list to its current version– three lists in React managed in one State. Most CRUD apps I had come across only managed one list. Still, knowing one of React's benefits is reusability, I wanted to explore the power of **useState in maintaining multiple lists.** In tandem, I didn’t want to lose any of its current functionality, including the use of the **localStorage API**, and the ability to check completed items off and clear the list.`,
        summary2: `When first tackling this project, I focused on State for each list, leaving the localStorage API for when I had a functioning app. Yet, ultimately, I found localStorage was essential for managing State. As lists are updated, they need to be added to localStorage and State, whether the user is checking them off a list or adding new items.  I could pass the data in State to localStorage, but the items would be lost on reload. Instead, I needed to set State with localStorage. As lists are updated, so is localStorage, which then passes those changes to State.`,
        conclusion: `In summary, this project’s evolution demonstrates how the **localStorage API** can be used to manage data consistency across sessions.  When used in tandem with useState it creates persistent and reliable data management that supports a user-friendly app. `,
        key: 1,
        stack: ['React'],
        liveLink: 'https://luriek.github.io/React-todolist/',
        github: 'https://github.com/LurieK/React-todolist/tree/LurieK-patch-4/src',
        image_mobile: todolist_mobile,
        image2: '',
        video: todolist_video,

    },
    {
        title: `Pomedoro App`,
        mainImage: pomedoro,
        url:'',
        summary1: `The inspiration for this project stemmed from curiosity about **useState**.  Knowing that one State could manage multiple events in React, I wanted to explore what would happen if I used one State to handle a countdown timer. This single State would also set off an alarm and restart a new timer. 
        Would that be a possible use of State?  If yes, would it be efficient or cause unpredicted errors?  If not, what would be a better way to manage a timer? 
        Already using the Pomodoro method to manage my time at work, I opted to build a Pomodoro app and explore these questions.`,
        summary2: `In the initial stages of building the app, the primary focus was creating a functioning timer. This was achieved using a single State, **countDownTime**, to track the time.  It worked alongside a **useEffect** hook that implemented **setInterval** for the countdown rendered on the DOM. This setup effectively managed one-timer and set the alarm off. Yet another State was needed to switch between counting down from 25 minutes to 5 minutes, which is the standard practice in a Pomodoro app. 
        This lead to creating a second State **isWorking**, a boolean State that, if true, sets the countdown to 25 minutes and, if false, 5 minutes. The synergy between isWorking and countDownTime also opened the door to adding features that 
        make the app more user-friendly. For instance, tracking the cumulative time spent between work and breaks by passing isWorking as a prop to a tracker component, as well as integrating pause and restart buttons that let users control the timer.`,
        conclusion: `In conclusion, it seems that while one State can be used to manage multiple features in an app, it isn't the most efficient way to make a versatile app that tangibly useful for users.  
        While it doesn't add additional errors, by adding one simple boolean State, this app went from tracking one timer, to becoming a daily tool that can keep a user on track, help them set goals, and manage their time more efficiently.`,
        key: 5,
        stack: ['React'],
        liveLink: '',
        github: 'https://github.com/LurieK/pomedoro',
        image_mobile: pomdedoro2,
        image2: '',
        video: pomedoro_video,


    },
     {
        title: `Daily Tarot`,
        mainImage: tarotLaptop,
        summary1: `Initially, this project had all its operations bundled together, including the API function and the JavaScript logic, in one file. Recognizing the need for a more secure approach, I wanted to explore **Express.js** to understand how it could be utilized to enhance website security. This led me to a deeper understanding of how Express as a modular framework not only secures sensitive data but helps keep code clean and running efficiently.`,
        summary2: `The first step in this evolution was moving the API key to a separate .env file and establishing a Node.js server using Express.js. This setup allowed me to create internal endpoints for **handling asynchronous requests securely and efficiently**. By keeping client-side DOM manipulation and API request handling separate, the project also gained clarity and efficiency. While I hadn’t considered this in the beginning making the project modulate also enabled me to move the cards data into its own file, further modularizing the project.`,
        conclusion: `My exploration concluded that Express.js not only bolsters API security but also enhances code efficiency and scalability. This transition resulted in cleaner, more organized code, laying a strong foundation for future feature additions and ensuring smooth scalability without unexpected errors. As the project continues to evolve, this structure will be instrumental in its growth and stability.`,
        url: '',
        key: 2,
        stack: ['JS |','Express JS |','Async API'],
        liveLink:'https://working-state--famous-pithivier-c2c9b0.netlify.app/',
        image_mobile: tarot_mobile,
        image2: '',
        video: tarot_video

    },
    {
        title: `What's Her Name Again?`,
        client: true,
        mainImage: WWHNA,
        summary1: `This client project started with exploring how PHP could enable clients to update their own websites without needing to edit the code directly. My focus was on transforming a standard HTML and JavaScript site into a WordPress theme. This exploration was about giving clients the ability to manage their website updates independently, making their experience more user-friendly. `,
        summary2: `After finalizing the website design with my client, Jasmine, in a basic HTML, CSS, and JavaScript format, I began converting it into a WordPress theme. This process involved wrapping the existing HTML in PHP and creating custom WordPress customizer pages in separate PHP files. The major benefit of this approach is it allows clients like Jasmine to modify content, images, colors, and text themselves, eliminating the need for a developer to intervien for each change. Once I completed this process, I uploaded the code to the client's WordPress account and activated it, completing the transition to a WordPress-based platform.`,
        conclusion: `In conclusion, adding PHP to an HTML/CSS/JavaScript site and uploading it to WordPress turned out to be an effective strategy for enhancing client customization. It's particularly useful for clients who need a landing page but also want the flexibility to update content, images, and other elements as necessary. The only downside I noted was the increase in code volume compared to using a pre-built WordPress theme. However, this approach is ideal for custom site requirements, offering a good balance between customization and client autonomy. `,
        url: '',
        key: 3,
        stack: ['PHP |', 'JS'],
        liveLink: '',
        github: '',
        image1: '',
        image2: '',
        video: '',



    },
    {
        title: `Lauren Harkness`,
        client: true,
        mainImage: Lauren,
        summary1: `The inspiration for this project stemed out of a curiousity about useState and if one state could be used to manage multiple events in React.
        I asked myself what would happen if I used a count down timer, managed in state, that set off a timer, and restarted a new timer. Would that be the most efficient use of state?  If yes, would it cause errors?  If not what would be a better way to manage a timer? 
        Already using the pomedoro method to manage my time, I opted to build a pomedoro app and explore these questions.`,
        summary2: `In the initial stages of building the Pomodoro app, the primary focus was creating a functioning timer. This was achieved using a single state, countDownTime, to track the time.  This works alongside a useEffect hook that implements setInterval for the countdown. This setup effectively managed one timer, yet another state was needed to switch between counting down from 25 minutes or 5 minutes, which is the standard practice in a pomedoro app. This lead to creating a second state 'isWorking.' It is a boolean state that 
        if true sets the countdown to 25 minutes and if false, 5 minutes. The synergy between isWorking and countDownTime also opened the door to add features that 
        that make the app more user friendly as well. For instance, tracking the cumulative time spent between work and breaks, by passing isWorking as a prop to a tracker compenent, as well as integrating an alarm by passing countDownTime to a alarm component.`,
        conclusion: `In conclusion it seems that while one state can be used to manage multiple feautres in a app, it isn't the moste effient way to make a versitiale app that tangibly useful for users.  
        While it doesn't add additional errors, by adding one simple boolean state this app went from trakcing one timer, to becoming a daily tool that can keep a user on track, help them set goals, and manage their time more efficiently.`,
        url: '',
        key: 4,
        stack: ['Liquid'],
        liveLink: '',
        github: '',
        image1: '',
        image2: '',
        video: '',


    },
    


]
export default ProjectsObj

