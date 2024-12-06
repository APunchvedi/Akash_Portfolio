import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import error from "eslint-plugin-react/lib/util/error.js";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',

    })

    const handleChange = ({target: {name,value}}) => {
        setForm({...form, [name]: value});
    }

    //service_fqmvmij
    const handleSubmit = async(e) =>  {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
            'service_fqmvmij',
            'template_veg5ica',
            { from_name : form.name,
            to_name: 'Akash',
            from_email: form.email,
            to_email: 'punchvedi.akash96@gmail.com',
            message: form.message},
                'ZGkke8WGqqAHYfOEE'
            )

            setLoading(false);
            alert('Your Message has been sent.');
            setForm({
                name: '',
                email: '',
                message: '',
            });

        }   catch(error){
            setLoading(false);
            console.log(error);
            alert('Something went wrong!');
        }


    }
    return (
        <section id="contact">Contact
    <section className="c-space my-10">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">

                    <h3 className="head-text mt-7">Let's Talk </h3>
                    <p className="text-lg text-white-600 mt-3"> Whether you are looking to build a new web app, improve
                        your existing platform, or bring or a unique project to Life, I am here to help!</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col space-y-16">
                        <label className='space y-3'>
                            <span className="field-label"> Full Name </span>
                            <input type="text"
                                   name="name"
                                   value={form.name}
                                   onChange={handleChange}
                                   required
                                   className="field-input"
                                   placeholder="Full Name"
                        />
                    </label>

                    <label className='space y-3 -mt-10'>
                        <span className="field-label"> E-mail </span>
                        <input type="email"
                               name="email"
                               value={form.email}
                               onChange={handleChange}
                               required
                               className="field-input"
                               placeholder="email@example.com"
                    />
                </label>

                <label className='space y-3 -mt-10'>
                    <span className="field-label"> Your Message </span>
                    <textarea
                           name="message"
                           value={form.message}
                           onChange={handleChange}
                           required
                           rows={4}
                           className="field-input"
                           placeholder="Hi, I am interested in..."
                />
            </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow Up" className="field-btn_arrow"/>

                        </button>

        </form>
</div>
</div>
    </section>
</section>
)
}
export default Contact
