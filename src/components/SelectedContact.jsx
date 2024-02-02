import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                setContact(result);
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchContact()
    }, []);

    return (
        <div className="contactInfo">
            {contact ?
                (
                    <div>
                        <h1> {contact.name}</h1>
                        <h2> Phone: {contact.phone}</h2>
                        <h2> Address: {contact.address.street}</h2>
                        <h2> Website: {contact.website}</h2>
                        <h2> Company: {contact.company.name}</h2>
                        <button
                            onClick={() => setSelectedContactId(null)}
                        >Go Back</button> 
                    </div>
                )
                    :
                (<h2>Fetching some data</h2>)
        }
        </div>
    )
}