import { Link, useNavigate, useParams, useLocation } from "react-router-dom"
import React from "react"
import uudised from "../data.js"
import Mainheader from "../components/main-header"

const Uudis = () => {
    const navigate = useNavigate();
    const { UudisId } = useParams();

    const uudis = uudised.find(x => x.id === parseInt(UudisId))
    const { id, pealkiri, sisu, image } = uudis

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
                    <h2>{uudis.pealkiri} </h2>
                    <img id="suurPilt" src={uudis.image} />
                    <h3>{uudis.sisu}</h3>
                </div>
            </div>

        </main >
    )

}

export default Uudis
