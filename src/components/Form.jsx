import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('')
  const [messageError, setMessageError] = useState('')
  const [isMessageValid, setMessageValid] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setNameValid] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError('Email is required');
      setIsEmailValid(false);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      setIsEmailValid(false);
    } else {
      setEmailError('');
      setIsEmailValid(true);
    }
  };

const handleNameBlur = () => {
  if (!name){
    setNameError('Field is required');
    setNameValid(false);
  } else {
    setNameError('')
    setNameValid(true)
  }
}

const handleMessageBlur = () => {
  if (!message){
    setMessageError('Field is required');
    setMessageValid(false);
  } else {
    setMessageError('')
    setMessageValid(true)
  }
}

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    if (!isEmailValid) {
      alert('Please enter a valid email address');
      return;
    }
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <h2>Contact Me</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleNameBlur}
          type="text"
          placeholder="Name"
        />
        {!isNameValid && <span style={{ color: 'red' }}>{nameError}</span>}
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleEmailBlur}
          type="email"
          placeholder="Email"
        />
        {!isEmailValid && <span style={{ color: 'red' }}>{emailError}</span>}
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleMessageBlur}
          placeholder="Message"
          style={{ display: 'block', marginTop: '10px', width: '75vw', height: '250px' }}
        />
        {!isMessageValid && <span style={{ color: 'red' }}>{messageError}</span>}
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;