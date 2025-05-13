import sendIcon from "../assets/icons/send.svg";
import emailIcon from "../assets/icons/email.svg";

function ContactForm() {
  return (
    <div className="bg-[#0B0B3B] text-white px-4 md:px-8 py-12 rounded-2xl max-w-7xl mx-auto mt-20 shadow-xl font-lato">
      <div className="md:flex md:justify-between md:items-start gap-12">
       
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Coffee? Code? Conversation? <br />
            
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-2">
            Whatever you're looking for — solutions, support, or a simple chat —
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
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

        
        <form className="md:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="border-b border-gray-500 bg-transparent py-4 px-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border-b border-gray-500 bg-transparent py-4 px-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b border-gray-500 bg-transparent py-4 px-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border-b border-gray-500 bg-transparent py-4 px-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />

          
          <div className="col-span-2">
            <label className="block mb-2 text-white text-sm">Select Subject (Optional)</label>
            <div className="flex flex-wrap gap-6 items-center text-sm text-white">
              {["General Inquiry", "Brand Identity", "UI/UX", "Packaging Design"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="radio" name="subject" value={item} className="accent-blue-500" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Message Box..... */}
          <div className="col-span-2">
            <label className="block mb-1 text-white text-sm">Message</label>
            <textarea
              placeholder="Write your message..."
              rows={5}
              className="border-b border-gray-500 bg-transparent py-3 px-2 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-blue-500 w-full"
            />
          </div>

          {/* Send button..... */}
          <div className="col-span-2 flex justify-end">
            <img
              src={sendIcon}
              alt="Send"
              className="w-30 h-30 hover:scale-110 cursor-pointer transition-transform"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;







