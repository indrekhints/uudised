
import { Link } from "react-router-dom";
import uudised from "../data.js"
import Mainheader from "../components/main-header.js";
import Uudis from "./Uudis.jsx";
const Home = () => {
    return (
        <main>
            <Mainheader />

            <div className="conteiner content">
                <div className="row products-row">
                    {uudised.map((uudis) => {
                        return (
                            <div className="col-lg-4" key={uudis.id}>
                                <Link to={`/home/${uudis.id}`}>
                                    <div className="card">

                                        <div className="img-wrap">
                                            <img src={uudis.image} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{uudis.pealkiri}</h5>
                                            <p className="card-text">{uudis.sisu}</p>
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
