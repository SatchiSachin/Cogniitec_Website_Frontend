import { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { fetchServices } from "../../api/serviceApi";

const ContactForm = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const dropdownRef = useRef(null);
  const [servicesList, setServicesList] = useState([]);
  const [loadingServices, setLoadingServices] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    service: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.mobile_number.trim())
      newErrors.mobile_number = "Phone number is required";
    if (!formData.service.trim()) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const loadServices = async () => {
      setLoadingServices(true);
      const response = await fetchServices();

      // 👇 adjust based on API response structure
      setServicesList(response?.data || []);
      setLoadingServices(false);
    };

    loadServices();
  }, []);

  const socialLinks = [
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/cogniitec",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/bnr_cogniitec_private_limited/",
    },
    {
      icon: FaTwitter,
      link: "https://x.com/bnr_cogniitec",
    },
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/@cogniitec",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/bnr-cogniitec-private-limited/",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMsg("");
    setErrorMsg("");

    if (!validateForm()) return; // ⛔ stop if validation fails

    setSubmitting(true);

    try {
      const response = await fetch(
        "http://35.154.163.136:5000/api/contact/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Something went wrong");
      }

      setSuccessMsg("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        mobile_number: "",
        service: "",
        message: "",
      });
      setSelectedService("");
      setErrors({});
    } catch (error) {
      setErrorMsg(error.message || "Failed to submit form");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-20 relative">
      {/* Title Section */}
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
          <div className="flex-1">
            <p className="text-sm text-gray-700 mb-2">Get Started</p>
            <h2 className="text-3xl md:text-[46px] font-bold text-black leading-tight mb-2">
              Get in touch with us.
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              We&apos;re here to assist you.
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex md:flex-col gap-4 md:gap-6">
            {socialLinks.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form className="w-full space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-b border-gray-300 focus:border-black outline-none py-2 text-sm text-gray-600"
                 placeholder="Ex: Cogniitec Private Limited "
              />
              {errors.name && (
                <span className="text-xs text-red-500 mt-1">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-b border-gray-300 focus:border-black outline-none py-2 text-sm text-gray-600"
                placeholder="Ex: info@cogniitec.com"
              />
              {errors.email && (
                <span className="text-xs text-red-500 mt-1">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">
                Phone Number (Optional)
              </label>
              <input
                type="text"
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                className="border-b border-gray-300 focus:border-black outline-none py-2 text-sm text-gray-600"
                placeholder="Ex: +91 99999 00000"
              />
              {errors.mobile_number && (
                <span className="text-xs text-red-500 mt-1">
                  {errors.mobile_number}
                </span>
              )}
            </div>
           
            <div className="flex flex-col relative" ref={dropdownRef}>
              <label className="text-sm mb-2 text-gray-600">Services</label>

             
              <button
                type="button"
                onClick={() => setServiceOpen((prev) => !prev)}
                className="flex items-center justify-between border-b border-gray-300 focus:border-black outline-none py-2 text-gray-800"
              >
                <span className={!selectedService ? "text-gray-400 text-sm" : ""}>
                  {selectedService || "Select a service"}
                </span>

                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {errors.service && (
                <span className="text-xs text-red-500 mt-1">
                  {errors.service}
                </span>
              )}

              {/* Dropdown List */}
              {serviceOpen && (
                <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-2 z-30 overflow-hidden">
                  {loadingServices ? (
                    <li className="px-4 py-3 text-sm text-gray-400">
                      Loading services...
                    </li>
                  ) : servicesList.length === 0 ? (
                    <li className="px-4 py-3 text-sm text-gray-400">
                      No services available
                    </li>
                  ) : (
                    servicesList.map((service) => (
                      <li
                        key={service.id}
                        onClick={() => {
                          setSelectedService(service.name);
                          setFormData((prev) => ({
                            ...prev,
                            service: service.name,
                          }));
                          setServiceOpen(false);
                        }}
                        className="px-4 py-3 text-sm cursor-pointer hover:bg-[#195a7d] hover:text-white transition"
                      >
                        {service.name}
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>
          </div>

          {/* Message Box */}
          <div className="flex flex-col">
            <label className="text-sm mb-2 text-gray-600">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-b border-gray-300 focus:border-black outline-none py-2 resize-none"
            />
            {errors.message && (
              <span className="text-xs text-red-500 mt-1">
                {errors.message}
              </span>
            )}
          </div>

          {/* Button */}
          <div>
            {successMsg && (
              <p className="text-green-600 text-sm font-medium">{successMsg}</p>
            )}

            {errorMsg && (
              <p className="text-red-600 text-sm font-medium">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="group flex items-center justify-center border-2 border-[#ec372d] bg-[#ec372d] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c72a22] disabled:opacity-60 cursor-pointer"
            >
              {submitting ? "Sending..." : "Leave Us a Message"}
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
