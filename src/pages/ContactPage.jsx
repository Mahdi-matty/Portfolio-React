import { useState } from 'react';
import { validateEmail } from '../utils/helper';
import Footer from '../components/footer'

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [message, setMessage]=useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // return name === 'email' ? setEmail(value) : 'username' ? setUserName(value) : 'password'? setPassword(value) : setErrorMessage('error')
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    }else if (inputType === 'message'){
      setMessage(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(Email)) {
      setErrorMessage('Email  is invalid');
      return;
    }
    

    // If successful, we want to clear out the input after registration.
    setName('');
    setMessage('');
    setEmail('');
    alert(`Hello ${name}`);
  };

  return (
    <div className="container text-center">
      <h1>Contact Us</h1>
      <form className="form" onSubmit={handleFormSubmit}>
      <div class="mb-3">
        <input
        id="examplInputEmail1"
          value={Email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <hr style={{border: '1px dashed white'}}></hr>
        <input
        id='examplInputName'
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          required
        />
        <hr style={{border: '1px dashed white'}}></hr>
       <textarea
       className="form-control"
       id="floatingTextarea2"
       value={message}
       name='message'
       onChange={handleInputChange}
       type='text'
       placeholder='Write Your Message Here'
       />
        <button type="submit" className='submitBtn'>
          Submit
        </button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Contact;
