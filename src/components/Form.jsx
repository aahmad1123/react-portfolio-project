import { useState } from 'react';

function Form()
    {
    const [name, setName] = useState('')
    const [email, setEmail] =useState('')
    const [message, setMessage] = useState('')

    const handleInputChange = (e) =>{
        const { input, value } = e.target;
        console.log(value);
        if (input === 'name') {
            setName(value);
        } else if (input === 'email'){
            setEmail(value);
        } else {
            setMessage(value)
        }
    }

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // Alert the user their first and last name, clear the inputs
        setName('');
        setEmail('');
        setMessage('');
      };

    return (
        <div className="container text-center">
          <h1>
          </h1>
          <form className="form" onSubmit={handleFormSubmit}>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="email"
            />
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="message"
              style={{display: 'block', marginTop:"10px", width: "75vw", height: "250px"}}
            />
            <button className= "button" type="submit">
              Submit
            </button>
          </form>
        </div>
      );
    }
export default Form;