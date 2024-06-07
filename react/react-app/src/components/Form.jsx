import {useState} from "react";

export default function Form(){
    const[name,setName]=useState({firstName:"", lastName:"",address:""});
    // function handleChange(e){
    //     setName(e.target.value);
    //}
    function handleSubmit(e){
        e.preventDefault();
        console.log(name)
    }
    return(
    <div>
        {name.firstName}-{name.lastName}-{name.address}
        <form>
            <input 
            //  onChange= {function demo(e){return handleChange(e)}}
            // onChange={(e)=>handleChange(e)} //onChange={(e) => setName(e.target.value)}
             onChange={(e) => setName({...name,firstName:e.target.value})}
             type="text" value={name.firstName} />
             
             <input 
             onChange={(e) => setName({...name,lastName:e.target.value})}
             type="text" value={name.lastName}/>

            <input 
             onChange={(e) => setName({...name,address:e.target.value})}
             type="text" value={name.address}/>

             <button onClick={(e => handleSubmit(e))}>Add</button>  
        </form>
    </div>
    );
}