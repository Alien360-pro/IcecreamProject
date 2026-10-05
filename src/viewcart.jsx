import { useEffect, useState } from "react"
import axios from "axios"

function Viewcart() {

    const [data, setdata] = useState([])

    useEffect(() => {

        axios.get("http://localhost:3000/cart")
            .then((Response) => {
                setdata(Response.data)
                console.log(Response.data)
            })
            .catch((err) => console.log(err))

    }, [])

    function Delete(id){
            axios.delete("http://localhost:3000/cart/"+ id)
            .then((Response)=>{
                console.log(Response.data)
                 setdata(data.filter((r) => r.id !== id))
                alert("Your Products Has Been Removed From Cart")
            })
            .catch((err)=>console.log(err))
        
    }
    return (
        <>
            <h1>View Cart</h1>

            {
                data.map((r) => (

                    <div key={r.id}>

                        <img
                            src={r.img}
                            width="200"
                            height="250"
                            alt=""
                        />

                        <h2>{r.productname}</h2>

                        <p>📦 Quantity: {r.quanity}</p>

                        <p>💰 Price: {r.price}</p>

                        <button onClick={() => Delete(r.id)} type="button" class="btn btn-secondary">Cancel</button>

                         
                        <hr />

                    </div>

                ))
            }
        </>
    )
}

export default Viewcart

