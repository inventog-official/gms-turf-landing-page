import React, { useState } from "react";
import TextHoverAnimation from "../textHoverAnimation";
import { useCantacts } from "@/hook/useContact";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface props{
    setIsPopupOpen:(value:boolean) => void
}
interface Errors {
  name?: string;
  email?: string;
  message?: string;
}
const ContactForm:React.FC<props> = ({setIsPopupOpen}) => {
  const { createContact } = useCantacts();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      await createContact
        .mutateAsync({ phone: "1234567890", ...formData })
        .then(() => {
            localStorage.setItem("contacts-gms",JSON.stringify({value:true}))
            setIsPopupOpen(false)
            setFormData({ name: "", email: "", message: "" });
          setErrors({});
        });
      console.log("Form submitted successfully", formData);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5">
      <h1 className="flex gap-2 text-2xl md:text-4xl font-primary uppercase justify-start items-center text-white z-[11] opacity-0 animate-lineUp">
        <span className="text-white">Let's</span>
        <span className="text-secondary">
          <TextHoverAnimation text="Talk" />
        </span>
      </h1>
      <div className="flex flex-col">
        <label className="block text-sm uppercase font-medium text-white mb-1">
          {" "}
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
        />
        {errors.email && !formData.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="block text-sm uppercase font-medium text-white mb-1">
          {" "}
          Your Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="block bg-transparent w-full text-secondary border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
        />
        {errors.email && !formData.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="block text-sm font-medium uppercase text-white mb-1">
          Your Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="block text-secondary bg-transparent w-full border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
          rows={4}
        />
        {errors.email && !formData.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>
      <div className="w-full flex justify-end items-end text-md">
        <button
          type="submit"
          className="w-[35%] bg-secondary text-white py-2 rounded-full hover:bg-cursor-hover"
        >
          {createContact.isPending ? "Loading.." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
