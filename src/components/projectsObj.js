import todolistLaptop from '../images/todo_laptop.png';
import todolist_mobile from '../images/todo_mobile.png'
import todolist_video   from '../video/todos_mov.mov'
import tarotLaptop from '../images/tarot_laptop.png';
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
        summary1: `The inspiration for this project stemed out of a curiousity about useState and if one state could be used to manage multiple events in React.
        I asked myself what would happen if I used a count down timer, managed in state, that set off a timer, and restarted a new timer. Would that be the most efficient use of state?  If yes, would it cause errors?  If not what would be a better way to manage a timer? 
        Already using the pomedoro method to manage my time, I opted to build a pomedoro app and explore these questions.`,
        summary2: `In the initial stages of building the Pomodoro app, the primary focus was creating a functioning timer. This was achieved using a single state, countDownTime, to track the time.  This works alongside a useEffect hook that implements setInterval for the countdown. This setup effectively managed one timer, yet another state was needed to switch between counting down from 25 minutes or 5 minutes, which is the standard practice in a pomedoro app. This lead to creating a second state 'isWorking.' It is a boolean state that 
        if true sets the countdown to 25 minutes and if false, 5 minutes. The synergy between isWorking and countDownTime also opened the door to add features that 
        that make the app more user friendly as well. For instance, tracking the cumulative time spent between work and breaks, by passing isWorking as a prop to a tracker compenent, as well as integrating an alarm by passing countDownTime to a alarm component.`,
        conclusion: `In conclusion it seems that while one state can be used to manage multiple feautres in a app, it isn't the moste effient way to make a versitiale app that tangibly useful for users.  
        While it doesn't add additional errors, by adding one simple boolean state this app went from trakcing one timer, to becoming a daily tool that can keep a user on track, help them set goals, and manage their time more efficiently.`,
        key: 1,
        stack: ['React'],
        liveLink: 'https://luriek.github.io/React-todolist/',
        github: 'https://github.com/LurieK/React-todolist',
        image_mobile: todolist_mobile,
        image2: '',
        video: todolist_video,

    },
    {
        title: `Pomedoro App`,
        mainImage: pomedoro,
        summary1: `The inspiration for this project stemed from curiosity about **useState**.  Knowing that one state could be used to manage multiple events in React I wanted to explore what would happen if I used a count down timer, managed in state, to set off a alarm, and restart a new timer. 
        Would that be the most efficient use of state?  If yes, would it cause unpredicted errors?  If not what would be a better way to manage a timer? 
        Already using the pomedoro method to manage my time at work, I opted to build a pomedoro app and explore these questions.`,
        summary2: `In the initial stages of building the app, the primary focus was creating a functioning timer. This was achieved using a single state, **countDownTime**, to track the time.  This worked alongside a **useEffect** hook that implemented **setInterval** for the countdown rednered on the screen. This setup effectively managed one timer, and set an alarm off, 
        yet another state was needed to switch between counting down from 25 minutes or 5 minutes, which is the standard practice in a pomedoro app. 
        This lead to creating a second state **isWorking**, a boolean state that if true sets the countdown to 25 minutes and if false, 5 minutes. The synergy between isWorking and countDownTime also opened the door to add features that 
        that make the app more user friendly as well. For instance, tracking the cumulative time spent between work and breaks, by passing isWorking as a prop to a tracker compenent, as well as integrating pause and restart buttons that let users control the timer.`,
        conclusion: `In conclusion it seems that while one state can be used to manage multiple feautres in a app, it isn't the moste effient way to make a versitiale app that tangibly useful for users.  
        While it doesn't add additional errors, by adding one simple boolean state this app went from trakcing one timer, to becoming a daily tool that can keep a user on track, help them set goals, and manage their time more efficiently.`,
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
        summary1: `The inspiration for this project stemed out of a curiousity about useState and if one state could be used to manage multiple events in React.
        I asked myself what would happen if I used a count down timer, managed in state, that set off a timer, and restarted a new timer. Would that be the most efficient use of state?  If yes, would it cause errors?  If not what would be a better way to manage a timer? 
        Already using the pomedoro method to manage my time, I opted to build a pomedoro app and explore these questions.`,
        summary2: `In the initial stages of building the Pomodoro app, the primary focus was creating a functioning timer. This was achieved using a single state, countDownTime, to track the time.  This works alongside a useEffect hook that implements setInterval for the countdown. This setup effectively managed one timer, yet another state was needed to switch between counting down from 25 minutes or 5 minutes, which is the standard practice in a pomedoro app. This lead to creating a second state 'isWorking.' It is a boolean state that 
        if true sets the countdown to 25 minutes and if false, 5 minutes. The synergy between isWorking and countDownTime also opened the door to add features that 
        that make the app more user friendly as well. For instance, tracking the cumulative time spent between work and breaks, by passing isWorking as a prop to a tracker compenent, as well as integrating an alarm by passing countDownTime to a alarm component.`,
        conclusion: `In conclusion it seems that while one state can be used to manage multiple feautres in a app, it isn't the moste effient way to make a versitiale app that tangibly useful for users.  
        While it doesn't add additional errors, by adding one simple boolean state this app went from trakcing one timer, to becoming a daily tool that can keep a user on track, help them set goals, and manage their time more efficiently.`,
        url: '',
        key: 2,
        stack: ['TypeScript', 'Async API']

    },
    {
        title: `What's Her Name Again?`,
        client: true,
        mainImage: WWHNA,
        summary1: `The inspiration for this project stemed out of a curiousity about useState and if one state could be used to manage multiple events in React.
        I asked myself what would happen if I used a count down timer, managed in state, that set off a timer, and restarted a new timer. Would that be the most efficient use of state?  If yes, would it cause errors?  If not what would be a better way to manage a timer? 
        Already using the pomedoro method to manage my time, I opted to build a pomedoro app and explore these questions.`,
        summary2: `In the initial stages of building the Pomodoro app, the primary focus was creating a functioning timer. This was achieved using a single state, countDownTime, to track the time.  This works alongside a useEffect hook that implements setInterval for the countdown. This setup effectively managed one timer, yet another state was needed to switch between counting down from 25 minutes or 5 minutes, which is the standard practice in a pomedoro app. This lead to creating a second state 'isWorking.' It is a boolean state that 
        if true sets the countdown to 25 minutes and if false, 5 minutes. The synergy between isWorking and countDownTime also opened the door to add features that 
        that make the app more user friendly as well. For instance, tracking the cumulative time spent between work and breaks, by passing isWorking as a prop to a tracker compenent, as well as integrating an alarm by passing countDownTime to a alarm component.`,
        conclusion: `In conclusion it seems that while one state can be used to manage multiple feautres in a app, it isn't the moste effient way to make a versitiale app that tangibly useful for users.  
        While it doesn't add additional errors, by adding one simple boolean state this app went from trakcing one timer, to becoming a daily tool that can keep a user on track, help them set goals, and manage their time more efficiently.`,
        url: '',
        key: 3,
        stack: ['PHP', 'JavaScript'],
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

