import React from 'react'
import './Main.css'

function Main() {
    return (
        <main>
            <section>
                <h2>
                    Den här sidan är kopplad till en databas!   
                </h2>
                <p className="mainSectionText">
                    Testa själv att lägga till eller hämta information från databasen
                </p>
                <li className="linkParent"><a href=""  className="commentsfieldLink">Till kommentarsfältet</a></li>
            </section>
        </main>
    )
}

export default Main
