import PersonCard from "./components/Personcard"

function App() {


    return(
        <>
           <PersonCard firstName = "Doe," lastName = "jane" age={45} Haircolor="Black" ></PersonCard>
           <PersonCard firstName = "Smith," lastName = "John" age={88} Haircolor="Brown" ></PersonCard>
           <PersonCard firstName = "Fillmore," lastName = "Molard" age={50} Haircolor="Brown" ></PersonCard>
           <PersonCard firstName = "Smith," lastName = "Maria" age={62} Haircolor="Brown" ></PersonCard>
           
        </>




    )
    
}
export default App