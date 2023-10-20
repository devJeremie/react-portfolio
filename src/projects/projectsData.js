import projectOne from "../assets/EJ-entp-mockup.png";
import projectTwo from "../assets/Chamborelle.png";
import projectThree from "../assets/successCoder.png";

const projects = {
    1: {
        title: "Employment app",
        image: projectOne,
        description: (
            <>
                <p>Job application without photo, without gender, without first name as long as the 'match' has not been made with an employer, it is up to the employer to pick up the employee and not the other way around. We have decided to reverse the recruitment logic.</p>
            </>
        ),
        
    },
    2: {
        title: "Glasses sales Website",
        image: projectTwo,
        description: (
            <>
                <p>Sales web application as well as its internal app for salespeople, stock management, customer management, order reminders, etc.</p>
            </>
        ),
        github: "https://chamborelle.com/"
            
       
    },
    3: {
        title: "Success coder",
        image: projectThree,
        description: (
            <>
                <p>Development training sales application VTraining sales application in the field of development V1 in react with reducer1</p>
            </>
        ),
        github: "https://github.com/devJeremie/SuccessCoder"
    },
};
export default projects;