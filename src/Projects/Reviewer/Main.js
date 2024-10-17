import { useState } from "react"
import Identification from "./Identification";
import Enumeration from "./Enumeration";
import Multiplechoice from "./Multiplechoice";

export default function Main(){
    const [category,setCategory] = useState('');
    switch(category){
        case 'Identification':
            return <Identification/>;
        case 'Enumeration': 
            return <Enumeration/>
        default:
            return(
                <>
                <h1>Category</h1>
                <button onClick={(e)=> {setCategory(e.target.value)}} value={'Multiple Choice'}>Multiple Choice</button>
                <button onClick={(e)=> {setCategory(e.target.value)}} value={'Enumeration'}>Enumeration</button>
                <button onClick={(e)=> {setCategory(e.target.value)}} value={'Identification'}>Identification</button>
                </>
            )
    }

}
