import { useEffect, useRef, useState } from "react";
import { Question } from "./Data";
import Main from './Main';
export default function Identification(){
    const [yourAnswer, setYourAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [randomQuestion, setRandomQuestion] = useState(0);
    const [questions, setQuestions] = useState(Question.slice())
    const [isNotCorrect, setIsNotCorrect] = useState(false);
    const buttonRef =  useRef(null);
    useEffect(()=>{
        console.log(questions)
        if(questions.length > 0){

            setRandomQuestion(Math.floor(Math.random() * questions.length));
        }
    },[questions])

    if(questions.length === 0){
        return (<Main></Main>)
    }
    return(
        <>
            <p>{score}</p>
            <h1>Identification</h1>
            <p>{questions[randomQuestion].question}</p>
            <input type="text"  value={yourAnswer} onChange={(e)=>{setYourAnswer(e.target.value)}}/>
            <button  ref={buttonRef} onClick={()=>{
                if(questions[randomQuestion].answer.toLowerCase() == yourAnswer.toLowerCase()){
                    setScore(score + 1);
                    setYourAnswer('')
                }
                else{
                    setIsNotCorrect(true)
                    buttonRef.current.disabled =true;
                }
                
            }}>Enter</button>
            {isNotCorrect && <button 
                onClick={()=>{
                const copy = questions.slice();
                copy.splice(randomQuestion, 1);
                setQuestions(copy);
                setRandomQuestion(0)
                setYourAnswer('')
                buttonRef.current.disabled = false;
                setIsNotCorrect(false)
            }}>next</button>}
            <p>{isNotCorrect && questions[randomQuestion].answer.toUpperCase()}</p>
        </>
    )
}