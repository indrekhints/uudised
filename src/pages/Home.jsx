
import { Link } from "react-router-dom";
/* import uudised from "../data.js" */
import Mainheader from "../components/main-header.js";
import Uudis from "./Uudis.jsx";
import { client } from "../App.js";
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {

    const [uudised, setUudised] = useState([]);

    useEffect(() => {
        client.getEntries().then((response) => {
            console.log(response.items);
            setUudised(response.items);
        });
    }, [])

    /* client.getEntry('Kj1lrohYtJkCn1GhlEfwv')
        .then((entry) => console.log(entry))
        .catch(console.error) */
    /*  client.getAsset("4zpFKREVn2yEmbnRJ9SH1X")
         .then((asset) => console.log(asset.fields.file.url)) */

    return (
        <main>
            <Mainheader />

            <div className="conteiner content">
                <div className="row products-row">
                    {uudised.map((uudis) => {
                        return (
                            <div className="col-lg-4" key={uudis.id}>
                                {/*  ************************************ */}
                                <Link to={`/home/${uudis.id}`}>
                                    <div className="card">

                                        <div className="img-wrap">
                                            <img id="mainImage" src={uudis.fields.image.fields.file.url} alt={uudis.fields.image.fields.title} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{uudis.fields.title}</h5>
                                            <p className="card-text">{uudis.fields.body}</p>
                                            <div className="d-flex justify-content-between align-item-center">
                                                <span></span>

                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        )
                    })}
                </div>
            </div>

        </main>
    )
}

export default Home;
