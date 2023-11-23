// export default function Contact() {
//     return (

//     <div class="parent-footer">
//         <h3 id="contact-me">Contact Me:</h3>
//         <div class="child-footer-1"> Email: alialdawoodi99@yahoo.com </div>
//         <div class="child-footer-2"> Github: https://github.com/Ali-Aldawoodi</div>
//     </div>

// )};

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className='container border w-25 p-3 '>
        <div>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      </div>
      <div>
      <label>Enter your email:
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      </div>
      <div>
      <label>Message:
        <input
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      </div>
      <input type="submit" />
    </form>
  )
}

