import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Ensure Toastify CSS is imported

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const formPayload = new FormData();
    formPayload.append("access_key", "d2244be5-c3cf-4024-b947-124ab8db998b");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);

    const object = Object.fromEntries(formPayload);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast.success(res.message);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Form submission error. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div id='contact' className='contact'>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's connect.</h1>
            <p>I am always open to connecting and hearing about potential opportunities. If you're interested in mentorship or arranging a meeting, please feel free to reach out and let me know.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <p>iloloizu97@gmail.com</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder='Enter your name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder='Enter your email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="message">Your message</label>
            <textarea
              name="message"
              rows="8"
              placeholder='Enter your message'
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactPage;