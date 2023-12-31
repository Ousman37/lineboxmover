import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = event => {
    const { id, value, type, checked } = event.target;
    if (type === 'checkbox') {
      const updatedService = checked
        ? [...formValues.service, value]
        : formValues.service.filter(service => service !== value);
      setFormValues(prevFormValues => ({
        ...prevFormValues,
        service: updatedService,
      }));
    } else {
      setFormValues(prevFormValues => ({
        ...prevFormValues,
        [id]: value,
      }));
    }
  };
  const sendEmail = event => {
    event.preventDefault();

    const newErrors = {};

    if (formValues.name.trim() === '') {
      newErrors.name = 'Please enter your name';
    }

    if (formValues.email.trim() === '') {
      newErrors.email = 'Please enter your email';
    }

    if (formValues.phone.trim() === '') {
      newErrors.phone = 'Please enter your phone number';
    }

    if (formValues.message.trim() === '') {
      newErrors.message = 'Please enter your message';
    }

    if (formValues.service.length === 0) {
      newErrors.service = 'Please select at least one service';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit the form or perform any other action
      console.log('Form submitted:', formValues);

      const templateParams = {
        to_name: 'Recipient Name',
        from_name: formValues.name,
        message: formValues.message,
      };

      emailjs
        .send(
          'service_wuxquxg',
          'template_84ge8pn',
          templateParams,
          'ce5vFm69RfNmX7OMY'
        )
        .then(result => {
          console.log('Email sent:', result.text);
          setIsSubmitted(true);
          // Optionally, you can update the formValues here to clear certain fields while keeping others
          setFormValues(prevFormValues => ({
            ...prevFormValues,
            name: '', // Clear the name field
            email: '', // Clear the email field
            // Keep the phone and service fields
            message: '', // Clear the message field
          }));
        })
        .catch(error => {
          console.error('Email error:', error.text);
        });
    }
  };

  return (
    <main className='py-20'>
      <article>
        <section className='container mx-auto'>
          <div className='flex flex-wrap justify-between'>
            <div className='w-full md:w-1/2 px-4 mb-8'>
              <h1 className='text-3xl font-bold text-orange-500 mb-6 mt-10'>
                Kontaktskjema
              </h1>
              <p className='text-orange-500 mb-8'>
                Vennligst fyllout skjemaet nedenfor dersom du ønsker å benytte
                deg av våre tjenester eller har noen spørsmål. Vi vil gjøre vårt
                beste for å svare deg så raskt som mulig.
              </p>

              {isSubmitted ? (
                <div className='text-green-600 mb-8'>
                  Thank you for your submission!
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail}>
                  <div className='mb-6'>
                    <input
                      type='text'
                      id='name'
                      placeholder='Navn'
                      required
                      value={formValues.name}
                      onChange={handleChange}
                      className='w-full h-12 px-4 border-2 border-green-600 rounded outline-none text-base'
                    />
                    {errors.name && (
                      <span className='error'>{errors.name}</span>
                    )}
                  </div>
                  <div className='mb-6'>
                    <input
                      type='email'
                      id='email'
                      placeholder='E-post'
                      required
                      value={formValues.email}
                      onChange={handleChange}
                      className='w-full h-12 px-4 border-2 border-green-600 rounded outline-none text-base'
                    />
                    {errors.email && (
                      <span className='error'>{errors.email}</span>
                    )}
                  </div>
                  <div className='mb-6'>
                    <input
                      type='tel'
                      id='phone'
                      placeholder='Telefon'
                      required
                      value={formValues.phone}
                      onChange={handleChange}
                      className='w-full h-12 px-4 border-2 border-green-600 rounded outline-none text-base'
                    />
                    {errors.phone && (
                      <span className='error'>{errors.phone}</span>
                    )}
                  </div>
                  <div className='mb-6'>
                    <p className='text-base font-bold'>Tjeneste:</p>
                    <div className='mb-2'>
                      <input
                        type='checkbox'
                        id='flytting'
                        name='service'
                        value='flytting'
                        checked={formValues.service.includes('flytting')}
                        onChange={handleChange}
                        className='mr-2'
                      />
                      <label
                        htmlFor='flytting'
                        className='text-base text-black'>
                        Flytting
                      </label>
                    </div>
                    <div className='mb-2'>
                      <input
                        type='checkbox'
                        id='kontorflytting-oslo'
                        name='service'
                        value='kontorflytting-oslo'
                        checked={formValues.service.includes(
                          'kontorflytting-oslo'
                        )}
                        onChange={handleChange}
                        className='mr-2'
                      />
                      <label
                        htmlFor='kontorflytting-oslo'
                        className='text-base text-black'>
                        Kontorflytting Oslo
                      </label>
                    </div>
                    <div className='mb-2'>
                      <input
                        type='checkbox'
                        id='minilager-oslo'
                        name='minilager-oslo'
                        value='minilager-oslo'
                        checked={formValues.service.includes('minilager-oslo')}
                        onChange={handleChange}
                        className='mr-2'
                      />
                      <label
                        htmlFor='minilager-oslo'
                        className='text-base text-black'>
                        Minilager Oslo
                      </label>
                    </div>
                    {errors.service && (
                      <span className='error'>{errors.service}</span>
                    )}
                  </div>
                  <div className='mb-6'>
                    <textarea
                      id='message'
                      rows='5'
                      placeholder='Melding'
                      required
                      value={formValues.message}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border-2 border-green-600 rounded outline-none text-base'></textarea>
                    {errors.message && (
                      <span className='error'>{errors.message}</span>
                    )}{' '}
                  </div>
                  <button
                    type='submit'
                    className='bg-green-600 text-white text-lg font-bold py-3 px-6 rounded transition-colors duration-300 hover:bg-green-700'>
                    Send
                  </button>
                </form>
              )}
            </div>

            <div className='w-full md:w-1/2 px-4 mb-8'>
              <h2 className='text-xl font-bold mb-6 mt-10'>Finn oss</h2>
              <div className='mt-8'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.1234567890123!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580d62f253f5f%3A0x4a4c0a635fd6a59e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1565689098785!5m2!1sen!2sus'
                  width='100%'
                  height='400'
                  frameBorder='0'
                  style={{ border: 'none' }}
                  title='Google Maps'
                  allowFullScreen=''
                  aria-hidden='false'
                  tabIndex='0'></iframe>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};
export default Contact;

// import React, { useState } from 'react';

// const Contact = () => {
//   const [formValues, setFormValues] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     service: [],
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const validateForm = event => {
//     event.preventDefault();

//     const newErrors = {};

//     if (formValues.name.trim() === '') {
//       newErrors.name = 'Please enter your name';
//     }

//     if (formValues.email.trim() === '') {
//       newErrors.email = 'Please enter your email';
//     }

//     if (formValues.phone.trim() === '') {
//       newErrors.phone = 'Please enter your phone number';
//     }

//     if (formValues.message.trim() === '') {
//       newErrors.message = 'Please enter your message';
//     }

//     if (formValues.service.length === 0) {
//       newErrors.service = 'Please select at least one service';
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       // Form is valid, submit the form or perform any other action
//       console.log('Form submitted:', formValues);
//       // You can reset the form values here if needed
//       setFormValues({
//         name: '',
//         email: '',
//         phone: '',
//         message: '',
//         service: [],
//       });
//       setIsSubmitted(true);
//     }
//   };

//   const handleChange = event => {
//     const { id, value, type, checked } = event.target;
//     if (type === 'checkbox') {
//       const updatedService = checked
//         ? [...formValues.service, value]
//         : formValues.service.filter(service => service !== value);
//       setFormValues(prevFormValues => ({
//         ...prevFormValues,
//         service: updatedService,
//       }));
//     } else {
//       setFormValues(prevFormValues => ({
//         ...prevFormValues,
//         [id]: value,
//       }));
//     }
//   };

//   return (
//     <main className='py-20'>
//       <article>
//         <section className='container mx-auto'>
//           <div className='flex flex-wrap justify-between'>
//             <div className='w-full md:w-1/2 px-4 mb-8'>
//               <h1 className='text-3xl font-bold text-orange-500 mb-6 mt-10'>
//                 Kontaktskjema
//               </h1>
//               <p className='text-orange-500 mb-8'>
//                 Vennligst fyll ut skjemaet nedenfor dersom du ønsker å benytte
//                 deg av våre tjenester eller har noen spørsmål. Vi vil gjøre vårt
//                 beste for å svare deg så raskt som mulig.
//               </p>

//               {isSubmitted ? (
//                 <div className='text-green-600 mb-8'>
//                   Thank you for your submission!
//                 </div>
//               ) : (
//                 <form onSubmit={validateForm}>
//                   <div className='mb-6'>
//                     <input
//                       type='text'
//                       id='name'
//                       placeholder='Navn'
//                       required
//                       value={formValues.name}
//                       onChange={handleChange}
//                       className='w-full h-12 px-4 border-2 border-green-600 rounded outline-none text-base'
//                     />
//                     {errors.name && (
//                       <span className='error'>{errors.name}</span>
//                     )}
//                   </div>
//                   <div className='mb-6'>
//                     <input
//                       type='email'
//                       id='email'
//                       placeholder='E-post'
//                       required
//                       value={formValues.email}
//                       onChange={handleChange}
//                       className='w-full h-12 px-4 border-2 border-green-600 rounded outline-none text-base'
//                     />
//                     {errors.email && (
//                       <span className='error'>{errors.email}</span>
//                     )}
//                   </div>
//                   <div className='mb-6'>
//                     <input
//                       type='tel'
//                       id='phone'
//                       placeholder='Telefon'
//                       required
//                       value={formValues.phone}
//                       onChange={handleChange}
//                       className='w-full h-12 px-4 border-2 border-green-600 rounded outline-none text-base'
//                     />
//                     {errors.phone && (
//                       <span className='error'>{errors.phone}</span>
//                     )}
//                   </div>
//                   <div className='mb-6'>
//                     <p className='text-base font-bold'>Tjeneste:</p>
//                     <div className='mb-2'>
//                       <input
//                         type='checkbox'
//                         id='flytting'
//                         name='service'
//                         value='flytting'
//                         checked={formValues.service.includes('flytting')}
//                         onChange={handleChange}
//                         className='mr-2'
//                       />
//                       <label
//                         htmlFor='flytting'
//                         className='text-base text-black'>
//                         Flytting
//                       </label>
//                     </div>
//                     <div className='mb-2'>
//                       <input
//                         type='checkbox'
//                         id='kontorflytting-oslo'
//                         name='service'
//                         value='kontorflytting-oslo'
//                         checked={formValues.service.includes(
//                           'kontorflytting-oslo'
//                         )}
//                         onChange={handleChange}
//                         className='mr-2'
//                       />
//                       <label
//                         htmlFor='kontorflytting-oslo'
//                         className='text-base text-black'>
//                         Kontorflytting Oslo
//                       </label>
//                     </div>
//                     <div className='mb-2'>
//                       <input
//                         type='checkbox'
//                         id='minilager-oslo'
//                         name='service'
//                         value='minilager-oslo'
//                         checked={formValues.service.includes('minilager-oslo')}
//                         onChange={handleChange}
//                         className='mr-2'
//                       />
//                       <label
//                         htmlFor='minilager-oslo'
//                         className='text-base text-black'>
//                         Minilager Oslo
//                       </label>
//                     </div>
//                     {errors.service && (
//                       <span className='error'>{errors.service}</span>
//                     )}
//                   </div>
//                   <div className='mb-6'>
//                     <textarea
//                       id='message'
//                       rows='5'
//                       placeholder='Melding'
//                       required
//                       value={formValues.message}
//                       onChange={handleChange}
//                       className='w-full px-4 py-2 border-2 border-green-600 rounded outline-none text-base'></textarea>
//                     {errors.message && (
//                       <span className='error'>{errors.message}</span>
//                     )}
//                   </div>
//                   <button
//                     type='submit'
//                     className='bg-green-600 text-white text-lg font-bold py-3 px-6 rounded transition-colors duration-300 hover:bg-green-700'>
//                     Send
//                   </button>
//                 </form>
//               )}
//             </div>

//             <div className='w-full md:w-1/2 px-4 mb-8'>
//               <h2 className='text-xl font-bold mb-6 mt-10'>Finn oss</h2>
//               <div>
//                 <p>
//                   <span className='text-black'>
//                     <b>LINEBOX Flytteservice</b>
//                   </span>
//                 </p>
//                 <p>
//                   <span className='text-black'>Nedre Ullevål 4 C</span>
//                 </p>
//                 <p>
//                   <span className='text-black'>0850 Oslo</span>
//                 </p>
//                 <p>
//                   <span className='text-black'>Norge</span>
//                 </p>
//               </div>
//               <div className='mt-8'>
//                 <iframe
//                   src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.1234567890123!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580d62f253f5f%3A0x4a4c0a635fd6a59e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1565689098785!5m2!1sen!2sus'
//                   width='100%'
//                   height='400'
//                   frameBorder='0'
//                   style={{ border: 'none' }}
//                   title='Google Maps'
//                   allowFullScreen=''
//                   aria-hidden='false'
//                   tabIndex='0'></iframe>
//               </div>
//             </div>
//           </div>
//         </section>
//       </article>
//     </main>
//   );
// };

// export default Contact;
