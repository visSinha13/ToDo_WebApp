import { Input } from "./Input";

export const Head =()=>{
    
    return(
        <>
        <div className="container" id="container">
        <header>
            <h2 id="heading" className="heading">Welcome to ToDo App.</h2>
            <p className="para" id="para">You can add your task below.</p>
        </header>
        <Input />
        </div>
        </>
        
    );
};