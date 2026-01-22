import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { fetchServices } from "../../api/serviceApi";

const HomeContactForm = () => {
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

  const [services, setServices] = useState([]);
  const dropdownRef = useRef(null);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  /* ---------------- FETCH SERVICES ---------------- */
  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        if (Array.isArray(data)) setServices(data);
        else if (Array.isArray(data?.data)) setServices(data.data);
        else setServices([]);
      } catch {
        setServices([]);
      }
    };
    loadServices();
  }, []);

  /* ---------------- CLICK OUTSIDE ---------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  /* ---------------- VALIDATION ---------------- */
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

  /* ---------------- SUBMIT ---------------- */
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

      if (!res.ok) throw new Error("Server error");

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
      icon: GrInstagram,
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
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-9xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-0 gap-8 ">
          <div className="flex-1 pt-7 ">
            <p className="text-[16px] text-gray-900 font-medium mb-2">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 tracking-widest">
              Get in touch with us.
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-widest  ">
              We&apos;re here to assist you.
            </h2>
          </div>

          <div className="flex md:flex-col gap-4 md:gap-6">
            {socialLinks.map(({ icon: Icon, link }, i) => (
              <a
                key={i}
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

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">
                Your Name / Company Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-b border-gray-300 py-2 outline-none text-sm text-gray-600"
                placeholder="Ex: Cogniitec Private Limited "
              />
              <span className="text-xs text-red-500 min-h-[14px]">
                {errors.name}
              </span>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-b border-gray-300 py-2 outline-none text-sm text-gray-600"
                placeholder="Ex: info@cogniitec.com"
              />

              <span className="text-xs text-red-500 min-h-[14px]">
                {errors.email}
              </span>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">
                Phone Number (optional)
              </label>
              <input
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                className="border-b border-gray-300 py-2 outline-none text-sm  text-gray-600"
                placeholder="Ex: +91 99999 00000"
              />
              <span className="min-h-[14px]" />
            </div>

            <div className="flex flex-col relative" ref={dropdownRef}>
              <label className="text-sm mb-2 text-gray-600">Services</label>

              <button
                type="button"
                onClick={() => setServiceOpen((p) => !p)}
                className="flex items-center justify-between border-b border-gray-300 py-2"
              >
                <span
                  className={!selectedService ? "text-gray-400 text-sm" : ""}
                >
                  {selectedService || "Select a service"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform cursor-pointer ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <span className="text-xs text-red-500 min-h-[14px]">
                {errors.service}
              </span>

              {serviceOpen && (
                <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-3 z-30">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      onClick={() => {
                        setSelectedService(service.name);
                        setFormData((p) => ({
                          ...p,
                          service: service.name,
                        }));
                        setServiceOpen(false);
                      }}
                      className="px-4 py-3 text-sm cursor-pointer hover:bg-[#195a7d] hover:text-white"
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-2 text-gray-600">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-b border-gray-300 py-2 outline-none resize-none"
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
            className="group flex items-center border-2 border-[#ec372d] bg-[#ec372d] text-white text-sm px-6 py-3 rounded-lg hover:bg-[#c72a22] cursor-pointer"
          >
            {loading ? "Sending..." : "Leave Us a Message"}
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeContactForm;
