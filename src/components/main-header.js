import React from 'react'
import { Link } from 'react-router-dom'

const Mainheader = () => {
    return (
        <div className="pg-header">
            <div className="container">
                <div className="row align-item-center">
                    <div className="col-lg-7">
                        <Link to="/" className=""><h1>POSTIMEES</h1></Link>

                    </div>
                    <div className="col-lg-5">
                        <nav>
                            <ol className="breadcrumb justify-content-end">
                                <li className="breadcrumb-item">
                                    {/* <Link to="/">Home</Link> */}
                                </li>

                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainheader
