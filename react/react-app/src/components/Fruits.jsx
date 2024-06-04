export default function Fruits(){
    // const fruits=["Apples", "Bananas", "Mango", "Orange", "Grapes"];
    const fruits=[
        {name:"Apple", price:10,},
        {name:"Banana", price:7,},
        {name:"Mango", price:2,},
        {name:"Orange", price:5,},
        {name:"Grapes", price:8,},
     ];
    return(
        <div>
            <ul>
                {fruits.map(fruit =>(
                <li key={fruit.name}>{fruit.name} ${fruit.price}</li>
                ))}
            </ul>
        </div>
    );
}