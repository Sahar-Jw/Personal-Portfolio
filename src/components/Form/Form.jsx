
import { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
        const subject = `New Contact Form: ${formData.name}`;
        const mailtoLink = `mailto:saharjwar86@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit} className=" flex flex-wrap lg:gap-5 gap-3">
            <div className=" w-full flex justify-between">

            <input 
                type="text" 
                placeholder="Full name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value })}
                className="h-11 lg:h-auto w-[49%] lg:px-5 lg:py-4 lg:text-[16px] px-4 py-3 text-[14px] font-normal placeholder:font-inter border-[0.3px] border-border rounded-lg text-primary-text placeholder:text-placeholder placeholder:text-[14px] lg:placeholder:text-[16px] focus:outline-none focus:border-main" 
            />
            <input 
                type="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value })}
                className="h-11 lg:h-auto w-[49%] lg:px-5 lg:py-4 lg:text-[16px] px-4 py-3 text-[14px] font-normal placeholder:font-inter border-[0.3px] border-border rounded-lg text-primary-text placeholder:text-placeholder placeholder:text-[14px] lg:placeholder:text-[16px] focus:outline-none focus:border-main" 
            />
            </div>
            <input 
                type="number" 
                placeholder="Phone number" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value })}
                className="h-11 lg:h-auto w-full lg:px-5 lg:py-4 lg:text-[16px] px-4 py-3 text-[14px] font-normal placeholder:font-inter border-[0.3px] border-border rounded-lg text-primary-text placeholder:text-placeholder placeholder:text-[14px] lg:placeholder:text-[16px] focus:outline-none focus:border-main" 
            />
            <textarea 
                rows="5" 
                placeholder="Message" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value })}
                className=" w-full lg:px-5 lg:py-4 lg:text-[16px] px-4 py-3 text-[14px] font-normal placeholder:font-inter border-[0.3px] border-border rounded-lg text-primary-text placeholder:text-placeholder placeholder:text-[14px] lg:placeholder:text-[16px] focus:outline-none focus:border-main resize-none" 
            />
            <button type="submit" className="cursor-pointer px-8 py-3 lg:px-12.5 lg:py-4 bg-main text-white font-medium rounded-lg hover:bg-[#0c96e2c2] transition-colors lg:text-[16px] text-[14px]">Send Message</button>
        </form>
    )
}
