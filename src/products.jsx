import { useEffect, useState } from "react"
import axios from 'axios'
function Products() {
    const [set, setvalue] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then((Response) => {
                console.log(Response.data)
                setvalue(Response.data)
            })
            .catch((err) => console.log(err))
    }, [])


    return <>
        <h1>hi</h1>
        {set.map((r) => {
            return <>
                <div key={r.id} className="container text-center">
                    <div className="row">
                        <div className="col">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={r.img} className="card-img-top" />
                                <div className="card-body">
                                    <h3>{r.productsname}</h3>
                                    <h3>{r.quanity}</h3>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        })}
    </>
}
export default Products