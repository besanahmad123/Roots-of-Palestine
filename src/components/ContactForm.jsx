import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح");
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white max-w-lg mx-auto p-8 rounded-xl shadow-lg mb-12"
    >
      <input
        type="text"
        name="name"
        placeholder="الاسم"
        value={formData.name}
        onChange={handleChange}
        className="w-full mb-5 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2c3e50]"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="البريد الإلكتروني"
        value={formData.email}
        onChange={handleChange}
        className="w-full mb-5 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2c3e50]"
        required
      />
      <textarea
        name="message"
        placeholder="رسالتك"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        className="w-full mb-5 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2c3e50]"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full bg-[#2c3e50] text-white py-3 rounded-lg font-semibold hover:bg-black transition"
      >
        إرسال الرسالة
      </button>
    </form>
  );
}

export default ContactForm;