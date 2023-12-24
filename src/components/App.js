// create your App component here
import React, {useState, useEffect} from "react"

function App(){

    const [dog, setDog] = useState("")

    useEffect(()=>{

        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => setDog(data.message))

    }, [])

    return(
        <div>
            <h1>free doggo pic</h1>
            {dog === ""
            ? <p>Loading . . .</p>
            :<img src={dog} alt="A Random Dog" />}

        </div>
    )
}

export default App;