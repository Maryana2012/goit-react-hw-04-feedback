import React from "react";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import { useState } from "react";

export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleFeedback=(event)=>{
        const { name } = event.target;
        if (name === "good") { setGood(prevState => prevState + 1) } 
        if (name === "neutral") { setNeutral(prevState => prevState + 1) }
        if (name==="bad"){  setBad(prevState=>prevState +1)    }
    }    
   
    const countTotalFeedback = () => {
        let total = good + neutral + bad;
        return total;
    }

    const countPositiveFeedbackPercentage = () => {
        let positivePercentage = Math.ceil(good / (good + neutral + bad) * 100);
        return positivePercentage;
    } 

    const arrayOptions = { good, neutral, bad }
    const options = Object.keys(arrayOptions)
    
return (<div>
        <Section title='Please leave feedback'>          
        <FeedbackOptions
            onLeaveFeedback={handleFeedback}  
            options={options}/>
        </Section>      
           
        <Section title="Statistics">
            {(good === 0 && neutral === 0 && bad === 0)
            ?  <Notification message="There is no feedback"/>
            :  <Statistics
                   good={good}
                   neutral={neutral}
                   bad={bad}
                   total={countTotalFeedback()}
                   positivePercentage={countPositiveFeedbackPercentage()} />        }
               </Section>
        </div>
       )        
}


