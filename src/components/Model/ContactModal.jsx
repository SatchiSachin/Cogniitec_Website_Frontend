import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";

const servicesList = [
  "AI & Data Science",
  "Cyber Security",
  "Game Development",
  "Multi-Cloud & AWS Services",
  "App Development",
  "Web Development",
  "Digital Marketing Services",
];

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const dropdownRef = useRef(null);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");



  /* Outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  /* Validation */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.service) newErrors.service = "Please select a service";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}api/contact/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        mobile_number: "",
        service: "",
        message: "",
      });
      setSelectedService("");
      setErrors({});
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: FaFacebookF, link: "https://www.facebook.com/cogniitec" },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/bnr_cogniitec_private_limited/",
    },
    { icon: FaTwitter, link: "https://x.com/bnr_cogniitec" },
    { icon: FaYoutube, link: "https://www.youtube.com/@cogniitec" },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/bnr-cogniitec-private-limited/",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      {/* SCROLL CONTAINER */}
      <div
        className="
    bg-white w-full max-w-5xl rounded-2xl relative
    max-h-[90vh]
    overflow-y-auto
    lg:overflow-hidden
    scrollbar-hide
    p-6 md:p-10
  "
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
        >
          <X size={22} />
        </button>

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-6">
          <div>
            <p className="text-sm text-gray-700 mb-2">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Get in touch with us.
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold">
              We&apos;re here to assist you.
            </h2>
          </div>

          <div className="flex md:flex-col gap-4">
            {socialLinks.map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-black hover:text-white"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* NAME */}
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">Your Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-b py-2 outline-none"
              />
              <span className="text-xs text-red-500 min-h-[14px]">
                {errors.name}
              </span>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-b py-2 outline-none"
              />
              <span className="text-xs text-red-500 min-h-[14px]">
                {errors.email}
              </span>
            </div>

            {/* PHONE */}
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">Phone Number</label>
              <input
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                className="border-b py-2 outline-none"
              />
              <span className="min-h-[14px]" />
            </div>

            {/* SERVICE */}
            <div className="flex flex-col relative" ref={dropdownRef}>
              <label className="text-sm mb-2 text-gray-600">Services</label>

              <button
                type="button"
                onClick={() => setServiceOpen((p) => !p)}
                className="flex justify-between border-b py-2"
              >
                <span className={!selectedService ? "text-gray-400" : ""}>
                  {selectedService || "Select a service"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 ${serviceOpen ? "rotate-180" : ""}`}
                />
              </button>

              <span className="text-xs text-red-500 min-h-[14px]">
                {errors.service}
              </span>

              {serviceOpen && (
                <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-3 z-30">
                  {servicesList.map((service, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        setSelectedService(service);
                        setFormData((p) => ({ ...p, service }));
                        setServiceOpen(false);
                      }}
                      className="px-3 py-2 text-sm hover:bg-[#195a7d] hover:text-white cursor-pointer"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col">
            <label className="text-sm mb-2 text-gray-600">Message</label>
            <textarea
              rows="3"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-b py-2 outline-none resize-none"
            />
            <span className="text-xs text-red-500 min-h-[14px]">
              {errors.message}
            </span>
          </div>

          {status === "success" && (
            <p className="text-green-600 text-sm">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm">
              Server error. Please try again later.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 bg-[#ec372d] text-white px-6 py-3 rounded-lg hover:bg-[#c72a22]"
          >
            {loading ? "Sending..." : "Leave Us a Message"}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
