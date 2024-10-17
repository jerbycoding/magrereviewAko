export default function Info(){
    return (
        <>  
            <form>
                <label>First Name*</label><br/><input></input><br/>
                <label>Last Name*</label><br/><input></input><br/>
                <label>Enter Email*</label><br/><input></input><br/>
                <label>Contact*</label><br/><input></input><br/>
                <div>
                    <h1>Gender*</h1>
                    <label>Male</label><input type="radio" value='Male'></input>{' '}
                    <label>Female</label><input type="radio" value='Female'></input>{" "}
                    <label>Other</label><input type="radio" value='Other'></input>{" "}
                </div>
                <div>
                    <h1>Favourite Subjects</h1>
                    <label>English</label><input type="checkbox" value='English'></input>{' '}
                    <label>Math</label><input type="checkbox" value='Math'></input>{' '} 
                    <label>Science</label><input type="checkbox" value='Science'></input>{' '}
                </div>
                <p>Upload Resume</p>
                <input type="file"></input>
                <p>Enter Url*</p>
                <input type="url"></input>
             
                <div>
                    <label htmlFor="">Select your choice</label><br/>
                    <select name="" id="">
                        <option value="" autoFocus>Choose your Ans</option>
                        <option value="">HTMLCSS AND JAVSCRIPT</option>
                        <option value="">NODE AND REACT</option>
                    </select>
                </div>
                <label>About</label><br></br>
                <input type="text"/>
            </form>
        </>
    )
}