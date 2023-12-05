
import React from "react"
const About = () => {
    return (
        <main className="about">
            <div className="pg-header">
                <div className="container">
                    <h1>Kontaktid</h1>
                </div>
            </div>
            <div className="container content">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Kus me asume</h2>
                        <p>
                            Postimehe toimetus<br />
                            Tartu mnt 80
                            10112, Tallinn<br />

                            (+372) 666 2202
                            vihje@postimees.e<br />
                            <h2>Kuuluta</h2><br />
                            Kuulutuste tellimine:
                            kuulutus@postimees.ee
                            (+372) 739 0397

                        </p>
                    </div>
                    <div className="col-lg-4">
                        <h2>info</h2>
                        <p>
                            Klienditugi<br />
                            E-R 8-17
                            (+372) 666 2525
                            levi@postimees.ee

                            Tehnilised küsimused ja ettepanekud
                            tehnoloogia@postimeesgrupp.ee<br />

                            Kuulutused<br />
                            Kuulutuste tellimine
                            (+372) 739 0397
                            kuulutus@postimees.ee<br />

                            Reklaam<br />
                            Postimehe paberlehes
                            (+372) 666 2445
                            reklaam@postimees.ee

                            postimees.ee veebides
                            (+372) 666 2230
                            veebireklaam@postimees.ee
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <h2>Võta ühendust</h2>
                        <div className="containerAbout">
                            <h2>Contact Us</h2>
                            <form action="#" method="post">
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="name" required />

                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" required />

                                <label for="message">Message:</label>
                                <textarea id="message" name="message" rows="4" required></textarea>

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
