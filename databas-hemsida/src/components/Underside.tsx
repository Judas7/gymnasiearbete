import React from 'react';
import { fetchPerson } from '../util/databaseClient'
import { sendPerson } from '../util/databaseClient'
import './Underside.css'


type State = {
    firstNameSearchValue: string
    recievedCommentValue: string
    input: { sendFirstName: string, sendLastName: string, sendCity: string, sendComment: string }
}
class Underside extends React.Component<{}, State>{
    constructor(props: {}) {
        super(props);
        this.state = {
            firstNameSearchValue: '',
            recievedCommentValue: '',
            input: { sendFirstName: '', sendLastName: '', sendCity: '', sendComment: '' }

        };
    }



    render() {
        return (
            <section className="FormParent">
                <section className="sendForm">
                    <h1 className="sendTitle">
                        Send a message to the database!
                </h1>
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
                        <input className="comment" type="text" id="comment" /><br />
                    </p>
                    <button className="btnSend" onClick={sendPerson}>
                        Send comment
                </button>
                </section>
                <section className="recieveForm">
                    <h1 className="recieveTitle">
                        Recieve a message from a specific person!
                </h1>
                    <p>
                        <label htmlFor="firstName">Who's comment do you want to see?</label><br />
                        <input type="text" id="firstName" value={this.state.firstNameSearchValue} onChange={evt => this.updateFirstNameSearch(evt.target.value)} /><br />
                    </p>
                    <button className="btnRecieve" onClick={this.onClickRecieveComment}>
                        Recieve comment
                </button>
                    <p className="recieved">
                        <label htmlFor="comment">Their comment:</label><br />
                        <input className="comment" type="text" id="comment" value={this.state.recievedCommentValue} /><br />
                    </p>
                </section>
            </section>
        )
    }

    onClickRecieveComment = () => {
        fetchPerson(this.state.firstNameSearchValue, this.onRecieveComment)

    }

    onRecieveComment = (comment: string) => {
        this.setState({
            recievedCommentValue: comment
        })
    }

    updateFirstNameSearch = (name: string) => {
        this.setState({
            firstNameSearchValue: name
        });
    }


}


export default Underside;
