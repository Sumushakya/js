export default function Message(){
    function handleClick(){
        console.log("Button Clicked");
    }
    return (
    <div>
        <button onClick={handleClick}>Click me to get a message!</button>
    </div>
);
}