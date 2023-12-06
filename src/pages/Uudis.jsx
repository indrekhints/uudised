import { Link, useNavigate, useParams, useLocation } from "react-router-dom"
import React from "react"
import Mainheader from "../components/main-header"
import { useState, useEffect } from "react"
/* ********************************** */
import { client } from "../App.js";


const Uudis = () => {

    /* ********************************** */
    const [uudised, setUudised] = useState([]);

    useEffect(() => {
        client.getEntries().then((response) => {
            console.log(response.items);
            setUudised(response.items);
        });
    }, [])
    /* ********************************** */
    const navigate = useNavigate();
    const { UudisId } = useParams();

    const uudis = uudised.find(x => x.id === parseInt(UudisId))
    const { id, title, body, image } = uudis

    return (
        <main>
            <Mainheader />

            <div clas sName="Container content">
                <div className="row">
                    <div clas sName="col-lg-5">

                    </div>
                    < div className="col-lg-7">

                        <br />

                    </div>
                </div>
                <div>
                    {/* {uudised.map((uudised) => {
                        return (
                            <div>
                                <h2>{uudised.fields.title} </h2>
                                <img id="mainImage" src={uudised.fields.image.fields.file.url} alt={uudised.fields.image.fields.title} />
                                <h3>{uudised.fields.body}</h3>
                            </div>
                        )
                    })} */}

                </div>
            </div>

        </main >
    )

}

export default Uudis
