import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailIcon from "../assets/icons/email.svg";
import SendButton from "./SendButton";

function ContactForm() {
  return (
    <div>
      <div
        className="p-[1px] mx-2 md:mx-6 rounded-[12px]"
        style={{ background: `linear-gradient(140.35deg, #35FEFE 0%, rgba(37, 84, 204, 0) 18.82%, rgba(55, 55, 178, 0) 80.86%, #35FEFE 100%)`}}
      >
        <div className="rounded-[10px] bg-gradient-to-r from-[#052275] to-[#040A19] p-6 md:p-10"
        >
          <div className="md:flex md:justify-between md:items-start gap-12">
           
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-[22px] md:text-[30px] font-bold leading-snug mb-3 md:mb-5 whitespace-nowrap text-white">
                Coffee? Code? Conversation?
              </h2>
              <p className="text-gray-300 text-[13px] md:text-[14px] leading-relaxed mb-2">
                Whatever you're looking for — solutions, support, or a simple chat —
              </p>
              <p className="text-gray-300 text-[13px] md:text-[14px] leading-relaxed mb-2">
                we're here and eager to connect.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <img src={emailIcon} alt="email" className="w-5 h-5" />
                <a
                  href="mailto:Business@mail.com"
                  className="text-blue-400 hover:underline text-sm md:text-[15px]"
                >
                  Business@mail.com
                </a>
              </div>
            </div>

           
            <div className="w-full md:w-1/2 text-base">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-b border-gray-500 bg-transparent py-[12px] text-white placeholder:text-gray-400 text-xs md:text-sm focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-b border-gray-500 bg-transparent py-[12px]  text-white placeholder:text-gray-400 text-xs md:text-sm focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b border-gray-500 bg-transparent py-[12px] text-white placeholder:text-gray-400 text-xs md:text-sm focus:outline-none focus:border-blue-500"
                />
                   {/* phone input here...... */}
                {/* <PhoneInput
                  country={'in'}
                  enableSearch
                  inputProps={{
                    name: 'phone',
                    required: true,
                  }}
                  containerClass="!w-full !border-b !border-gray-500 !pb-[2px]"
                  inputClass="!w-full !bg-transparent !text-white !text-xs md:!text-sm !pl-14 !pr-2 !py-[12px] !border-none !placeholder:text-gray-400 !focus:outline-none !font-normal"
                  buttonClass="!bg-transparent !border-none !text-white !text-xs md:!text-sm !pl-2 !font-normal"
                  dropdownStyle={{
                    backgroundColor: '#0B1A3C',
                    color: '#cbd5e1',
                    fontWeight: '400',
                  }}
                  searchStyle={{
                    backgroundColor: '#0B1A3C',
                    color: '#cbd5e1',
                    border: '1px solid #334155',
                    fontWeight: '400',
                  }}
                /> */}

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
                    placeholder="Write your message..."
                    rows={2}
                    className="border-b border-gray-500 bg-transparent py-2 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-blue-500 w-full  md:text-sm"
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






  


  

