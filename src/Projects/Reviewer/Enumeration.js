import { useEffect, useRef, useState } from 'react';
import {Enum} from './Data';
import Main from './Main'
export default function Enumeration(){

    const [answers, setAnswers] = useState(Array(Enum[0].enumerate.length).fill(''));
    const [correct, setCorrect] = useState([...Enum[0].enumerate]);
    const [showList,setShowList] = useState(false);
    const [index, setIndex] = useState(0);
    const previousButton = useRef();
    useEffect(()=>{
        if(index === 0){
            previousButton.current.disabled = true;
        }
        setAnswers(Array(Enum[index].enumerate.length).fill(''));
        setCorrect([...Enum[index].enumerate]);
   
    },[index]);
    if(index  === Enum.length - 1){
        return (
            <Main></Main>
        )
    }
    return(
        <>
        <h1>Enumeration</h1>
            <h3>Types of Cache Design</h3>
            <ul>
                <h1>{Enum[index].title}</h1>
              
                    {Enum[index].enumerate.map((value,index)=>(
                        <>
                            <li><input value={answers[index]} onChange={
                                (e)=>{
                                    const copyAnswer = [...answers];
                                    copyAnswer[index] = e.target.value;
                                    setAnswers(copyAnswer);
                                }
                            }></input></li>
                        </>
                    ))}

            </ul>
            <button onClick={()=>{
                correct.map((value, index)=>{
                    if(value.toLowerCase() === answers[index].toLowerCase()){
                            console.log("correct");
                    }else{
                        console.log('not correct');
                    }
                })
            }}>Check</button>
            <button onClick={()=>(
               setShowList(!showList)
            )}>Show</button>
            <button ref={previousButton} onClick={()=>{
                if(index === 0){
                    
                    return
                }
                setIndex(index -1);
           

                }}>Previous</button>
            <button onClick={()=>{
                if(index  < Enum.length - 1){
                    setIndex( index + 1);
                   
                    previousButton.current.disabled = false;
                
                }
           

                }}>Next</button>
            <ul>{showList ? correct.map(value=><li>{value}</li>): ' '}</ul>
            
        </>
    )
}