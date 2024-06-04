function Hello({person}){
    return(
        <div>
        {/* <h1> {props.message} {props.name} {props.seatNumbers} </h1> */}
        <h1>
            {person.message} {person.name} {person.seatNumbers}
        </h1>
        </div>
    );
}

export default Hello;