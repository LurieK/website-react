import todolistLaptop from '../images/todo_laptop.png';
import todolist_mobile from '../images/todo_mobile.png'
import todolist_video   from '../video/todos_mov.mov'
import tarotLaptop from '../images/tarot_laptop.png';
import tarot_mobile from '../images/tarot_mobile.png';
import tarot_video from '../video/Tarot_video.mov';
import WWHNA from '../images/WWHNA_computer.png';
import WWHNA1 from '../images/wwhna_img2.png';
import wwhna_video from '../video/wwhna_video.mov';
import Lauren from '../images/LH_computer.png';
import Lauren1 from '../images/Lauren_img2.png';
import lauren_video from '../video/lauren_video.mov'
import pomodoro from '../images/working_phone.png';
import pomodoro2 from '../images/break_phone.png';
import pomodoro_video from '../video/pomodoro.mov'; 

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
        github: 'https://github.com/LurieK/React-todolist/tree/LurieK-patch-4',
        image_mobile: todolist_mobile,
        image2: '',
        video: todolist_video,

    },
    {
        title: `Pomodoro App`,
        mainImage: pomodoro,
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
        liveLink: 'https://luriek.github.io/pomodoro/',
        github: 'https://github.com/LurieK/pomodoro',
        image_mobile: pomodoro2,
        image2: '',
        video: pomodoro_video,


    },
     {
        title: `Daily Tarot`,
        mainImage: tarotLaptop,
        summary1: `Initially, this project had all its operations bundled together, including the API function and the JavaScript logic, in one file. Recognizing the need for a more secure approach, I wanted to explore **Express.js** to understand how it could be utilized to enhance website security. This led me to a deeper understanding of how Express as a modular framework not only secures sensitive data but helps keep code clean and running efficiently.`,
        summary2: `The first step in this evolution was moving the API key to a separate .env file and establishing a **Node.js** server. This setup allowed me to create internal endpoints for **handling asynchronous requests securely and efficiently**. By keeping client-side DOM manipulation and API request handling separate, the project also gained clarity and efficiency. While I hadn’t considered this in the beginning making the project modulate also enabled me to move the cards data into its own file, further modularizing the project.`,
        conclusion: `My exploration concluded that Express.js not only bolsters API security but also enhances code efficiency and scalability. This transition resulted in cleaner, more organized code, laying a strong foundation for future feature additions and ensuring smooth scalability without unexpected errors. As the project continues to evolve, this structure will be instrumental in its growth and stability.`,
        url: '',
        key: 2,
        stack: ['JavaScript','Node.js','Express JS','Async API'],
        liveLink:'https://famous-pithivier-c2c9b0.netlify.app/',
        github: 'https://github.com/LurieK/DailyTarot-Copy.git',
        image_mobile: tarot_mobile,
        image2: '',
        video: tarot_video

    },
    {
        title: `What's Her Name Again?`,
        client: true,
        mainImage: WWHNA,
        summary1: `Jasmin Mittage is an artist who asked me to build a landing page for her new board game she designed to introduce players to important women in society and history.  This client project had two goals. One: create a user-interactive front end that uses animations to draw in  potential buyers and for Jasmin to be able to update the landing page with new designs and text as her game evolves`,
        summary2: `Jasmine and I explored a few different design options but landed on an interactive site that used three characters to greet the users when the page loads with a question or quote about their lives.  To animate this, I used DOM manipulation to change the opacity of speech bubble images and a loop that generates each text letter in index order as if typed on a typewriter. Another interactive element appears as users scroll down, where they can try to answer questions from the actual game. Using CSS rotateY and hover, I created an animation that appears to ‘flip’ a card to reveal an answer when the user hovers over the card image. The biggest challenge with each of these animations was handling load time, particularly with having multiple images loading on top of one another. To address this, I used 'backface-visibility: hidden,’ which optimizes the rendering of layered elements, only rendering the part of an image visible on the DOM. Since the game is still being developed, Jasmine needed to be able to update the images and text to match the game design as it evolves. To address this, I wrapped the HTML and JavaScript in PHP and built WordPress customizers for each section. This way she can upload new cards and change text as needed on her WordPress site. `,
        conclusion: `In conclusion, the risks associated with animation load time were addressed with 'backface-visibility: hidden', ensuring clean rendering. Furthermore, by wrapping the HTML and JavaScript in PHP and incorporating WordPress customizers, Jasmine can easily update the site’s content to introduce the game with the latest designs to potential buyers and investors. [View the preliminary version of this site here](https://luriek.github.io/Jasmine/)`,url: '',
        key: 3,
        stack: ['PHP', 'JavaScript'],
        liveLink: '',
        github: '',
        image_mobile: WWHNA1,
        image2: '',
        video: wwhna_video,



    },
    {
        title: `Lauren Harkness`,
        client: true,
        mainImage: Lauren,
        summary1: `Lauren Harkness’ team approached me looking to enhance the customization of her event page on her Shopify site. Each event was being individually added to the liquid code in its current build.  While they could edit the event, they could not add or delete new events without a developer's intervention.  My goal was to create a customized block that her team could use to add, remove, and update events freely.`,
        summary2: `Using the framework for the current events already designed, I wrapped the basic outline in a for-loop that generates new events in the editor. Once this was completed, it became clear that styling features would need to be adjusted in each event. So, I added additional customizers to the block to allow the user to change image sizes, placements, and links as needed. This way, the custom events still retain the original styling while giving the client full control over the products they sell.`,
        conclusion: `I think it is widespread for business owners to feel disempowered regarding their technical tools.  As a result, they spend more time and even more money to make tech work instead of focusing on the growth of their business. Creating a customized block for Lauren’s site makes her backend more user-friendly, and the team can now fully manage event promotion. `,
        url: '',
        key: 4,
        stack: ['Liquid'],
        liveLink: '',
        github: '',
        image_mobile: Lauren1,
        image2: '',
        video: lauren_video,


    },
    


]
export default ProjectsObj

