import emailIcon from "../assets/icons/email.svg";
import SendButton from "./SendButton";

function ContactForm() {
  return (
    <div
      className="text-white px-4 md:px-8 py-16 rounded-[10px] max-w-[1707px] mx-auto mt-20 shadow-xl font-lato"
      style={{
        background: "linear-gradient(90deg, #052275 0%, #040A19 100%)",
      }}
    >
     
      <div className="p-[2px] rounded-[12px] bg-gradient-to-r from-[#35FEFE] via-[#2554CB] to-[#35FEFE]">
        <div className="rounded-[10px] bg-gradient-to-r from-[#052275] to-[#040A19] p-8">
          <div className="md:flex md:justify-between md:items-start gap-16">
            
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-[40px] md:text-[48px] font-bold leading-snug mb-6 md:mb-8 whitespace-nowrap">
                Coffee? Code? Conversation?
              </h2>
              <p className="text-gray-300 text-[16px] leading-relaxed mb-2">
                Whatever you're looking for — solutions, support, or a simple chat —
              </p>
              <p className="text-gray-300 text-[16px] leading-relaxed mb-2">
                we're here and eager to connect.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <img src={emailIcon} alt="email" className="w-5 h-5" />
                <a
                  href="mailto:Business@mail.com"
                  className="text-blue-400 hover:underline text-sm md:text-base"
                >
                  Business@mail.com
                </a>
              </div>
            </div>

          
            <div className="w-full md:w-1/2">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-b border-gray-500 bg-transparent py-[14px] px-2 text-white placeholder:text-gray-400 text-sm md:text-base focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-b border-gray-500 bg-transparent py-[14px] px-2 text-white placeholder:text-gray-400 text-sm md:text-base focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b border-gray-500 bg-transparent py-[14px] px-2 text-white placeholder:text-gray-400 text-sm md:text-base focus:outline-none focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border-b border-gray-500 bg-transparent py-[14px] px-2 text-white placeholder:text-gray-400 text-sm md:text-base focus:outline-none focus:border-blue-500"
                />

                
                <div className="col-span-2">
                  <label className="block mb-2 text-white text-sm">
                    Select Subject (Optional)
                  </label>
                  <div className="flex flex-wrap gap-6 items-center text-sm text-white">
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

                {/* Message............... */}
                <div className="col-span-2">
                  <label className="block mb-2 text-white text-sm">Message</label>
                  <textarea
                    placeholder="Write your message..."
                    rows={1}//changed for spacing...............initial (5)
                    className="border-b border-gray-500 bg-transparent py-3 px-2 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>

                {/* Send Button.............. */}
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




