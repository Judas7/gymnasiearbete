import React from 'react'
import './Main.css'
import {Link} from 'react-router-dom'

function Main() {
    return (
        <main>
            <section className="mainSection">
                <h2>
                    Den här sidan är kopplad till en databas!   
                </h2>
                <p className="mainSectionText">
                    Testa själv att lägga till eller hämta information från databasen
                </p>
                <li className="linkParent"><Link to = "/Underside"  className="commentsfieldLink">Till kommentarsfältet</Link></li>
            </section>
        </main>
    )
}

export default Main
