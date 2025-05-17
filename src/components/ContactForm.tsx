import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/semantic-ui.css'
import emailIcon from "../assets/icons/email.svg";
import SendButton from "./SendButton";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      // Debug: Log form data before sending
      const formData = new FormData(formRef.current);
      console.log(Object.fromEntries(formData.entries()));

      emailjs.sendForm(
        'service_mindscale',
        'template_h6vtyct',
        formRef.current,
        { publicKey: 'LHy02rYiVmkXCmrm5' }
      )
        .then(() => {
          alert('Message sent successfully!');
          formRef.current?.reset();
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send message. Please try again.');
        });
    }
  };

  return (
    <div>
      <div
        className="p-[1px] mx-2 md:mx-6 rounded-[12px]"
        style={{ background: `linear-gradient(140.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)` }}
      >
        <div className="rounded-[10px] bg-gradient-to-r from-[#052275] to-[#040A19] p-6 md:p-10">
          <div className="md:flex md:justify-between md:items-start gap-12">

            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-[22px] md:text-[30px] font-bold leading-snug mb-3 md:mb-5 whitespace-nowrap text-white">
                Coffee? Code? Conversation?
              </h2>
              <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-2">
                Whatever you're looking for — solutions, support, or a simple chat —
              </p>
              <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-2">
                we're here and eager to connect.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <img src={emailIcon} alt="email" className="w-5 h-5" />
                <a
                  href="mailto:info@mindscale.in"
                  className="text-blue-400 hover:underline text-base md:text-[15px]"
                >
                  info@mindscale.in
                </a>
              </div>
            </div>


            <div className="w-full md:w-1/2 text-base">
              <form 
                ref={formRef} 
                onSubmit={sendEmail}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4"
              >
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="border-b border-gray-500 bg-transparent py-[12px] text-white placeholder:text-gray-400 text-xs md:text-sm focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="border-b border-gray-500 bg-transparent py-[12px] text-white placeholder:text-gray-400 text-xs md:text-sm focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  name="email_id"
                  placeholder="Email"
                  className="border-b border-gray-500 bg-transparent py-[12px] text-white placeholder:text-gray-400 text-xs md:text-sm focus:outline-none focus:border-blue-500"
                />
                <div className="mt-4">
                  <PhoneInput
                    country={'in'}
                    enableSearch
                    disableSearchIcon
                    placeholder="Phone Number"
                    inputProps={{
                      name: 'phone',
                      required: true,
                    }}
                    dropdownStyle={{
                      backgroundColor: 'white',
                      color: 'black',
                      zIndex:100
                    }}
                    searchStyle={{
                      backgroundColor: 'white',
                      color: 'black',
                    }}
                    buttonStyle={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      padding: '0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                    }}
                    inputStyle={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      borderBottom: '1px solid #6B7280',
                      color: 'white',
                      fontSize: '0.75rem',
                      padding: '12px 0 12px 50px',
                    }}
                    dropdownClass="custom-dropdown"
                    autoFormat
                  />
                </div>

                <div className="col-span-2">
                  <label className="block mb-2 text-white">
                    Select Subject (Optional)
                  </label>
                  <div className="flex flex-wrap gap-6 items-center text-white">
                    {[
                      "General Inquiry",
                      "Brand Identity",
                      "UI/UX",
                      "Packaging Design",
                    ].map((item) => (
                      <label key={item} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="subject"
                          value={item}
                          className="accent-blue-500"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="block mb-2 text-white">Message</label>
                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    rows={2}
                    className="border-b border-gray-500 bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none focus:border-blue-500 w-full md:text-sm flex items-center"
                  />
                </div>

                <div className="col-span-2 flex justify-end mt-2">
                  <SendButton text="Send Message" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;











