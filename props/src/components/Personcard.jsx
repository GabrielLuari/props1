function PersonCard(props) {
    const {firstName, lastName, age, Haircolor } = props
   
    return(
       <div className="card">
         <h1>{firstName} {lastName}</h1>
         <p>age: {age}</p>
         <p>Haircolor: {Haircolor}</p>
       </div>
       
    )
}
export default PersonCard;