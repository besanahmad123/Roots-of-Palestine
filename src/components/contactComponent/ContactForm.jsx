import { useState } from "react";


function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }




  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); 
      if (data.success) {
        alert("APIتم إرسال رسالتك بنجاح ووصلت للـ ");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(" صار خطأ، جربي مرة ثانية");
      }
    } catch (error) {
      alert(" مشكلة بالاتصال بالسيرفر");
    }
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