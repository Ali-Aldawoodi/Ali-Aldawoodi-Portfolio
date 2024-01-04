import { useState } from 'react';
import ReactDOM from 'react-dom/client';

// export default function MyForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   }

export default function Contact () {
  return (
    <div>
      <h1>Contact me at:</h1>
      <h2 id='contact-page-email'>Email: alialdawoodi99@yahoo.com</h2>
      <p id='contact-page-greeting'>Thank you!</p>
    </div>
)};
  

    // <form onSubmit={handleSubmit} className='container border w-25 p-3 mt-5'>
    //     <div>
    //   <label>Enter your name:
    //     <input
    //       type="text" 
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //   </label>
    //   </div>
    //   <div>
    //   <label>Enter your email:
    //     <input
    //       type="text" 
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //   </label>
    //   </div>
    //   <div>
    //   <label>Message:
    //     <input
    //       type="text" 
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //     />
    //   </label>
    //   </div>
    //   <input type="submit" />
    // </form>
  


