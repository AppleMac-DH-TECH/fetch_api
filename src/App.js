import React , { useState , useEffect } from 'react';
import axios from 'axios';
// const API_KEY = "1498a698-ffb0-43d4-aeb3-8854b8c9bd47";
const API_KEY = "64209919-d806-4141-8279-b18e6c03936b";
const App = () => {
    const [ data , setData ] = useState([]);
    const [ error , setError ] = useState("");
    const [ isLoading , setIsLoading ] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest" ,  { 
            crossDomain: true ,
            headers: {
                'X-CMC_PRO_API_KEY': '64209919-d806-4141-8279-b18e6c03936b',}
            })
            .then(response => {
                console.log(response.data);
                setIsLoading(false);
            })
                .catch(error => {
                    setError("Sorry , Something went wrong")
                    setIsLoading(false);
                })
    })  
    if(isLoading){
     return <div>...Loading</div> 
    }
    if(error){
        return <div>{error}</div>
    }
    return(
        <div>   
            
        </div>
    )
}

export default App;