import React from 'react';
import { fetchX } from '../util/databaseClient'
import './Underside.css'

function Underside() {
    return (
        <section className="FormParent">
            <section className="sendForm">
                <p>
                    <label htmlFor="firstName">First Name:</label><br />
                    <input type="text" id="firstName" /><br />
                </p>
                <p>
                    <label htmlFor="lastName">Last Name:</label><br />
                    <input type="text" id="lastName" /><br />
                </p>
                <p>
                    <label htmlFor="city">City:</label><br />
                    <input type="text" id="city" /><br />
                </p>
                <p>
                    <label htmlFor="comment">Your Comment:</label><br />
                    <input type="text" id="comment" /><br />
                </p>
            </section>
            <section className="recieveForm">
                <p>

                </p>
                <p>

                </p>
                <p>

                </p>
                <p>

                </p>
                <p>

                </p>
            </section>
        </section>
    )
}

export default Underside;

{/* <button onClick={fetchX}>
    hallo
</button> */}