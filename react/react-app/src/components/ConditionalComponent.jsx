import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent(){
    const display = true
    return display ? <Welcome /> : <Code />;
}

    

// let message;
    // const display = true;
    // if(display){
    //    message=<h1>This is message 1</h1>
    // }else{
    //     message=<h1>This is message 2</h1>
    // }
    // return message;
//}
//    const display= false;
//    if(display){
//     return <Welcome />;
//    }else{
//     return <Code />;
//    }
   

