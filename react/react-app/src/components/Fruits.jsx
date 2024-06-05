import Fruit from "./Fruit"

export default function Fruits(){

    // const fruits=["Apples", "Bananas", "Mango", "Orange", "Grapes"];
    const fruits=[
        {name:"Apple", price:10,soldout: true},
        {name:"Banana", price:7,soldout: false},
        {name:"Mango", price:2,soldout: true},
        {name:"Orange", price:5,soldout: false},
        {name:"Grapes", price:8,soldout: false},
     ];
    return(
        <div>
            <ul>
                {fruits.map((fruit) => (
                // <li key={fruit.name}>{fruit.name} ${fruit.price}</li>
                <Fruit key={fruit.name} 
                name={fruit.name} 
                price={fruit.price}
                soldout={fruit.soldout} />
                ))}
            </ul>
        </div>
    );
}