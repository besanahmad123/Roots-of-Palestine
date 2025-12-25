import { useState } from "react";
import StarRating from "../components/starRating.jsx";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح ");
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6 rtl">
      <h1 className="text-4xl font-extrabold text-[#2c3e50] mb-6 text-center">
        تواصل معنا
      </h1>

      <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-center leading-relaxed">
        يسعدنا تواصلك معنا لأي استفسار أو اقتراح يساهم في تطوير موقع جذور فلسطين
           املأ النموذج أدناه أو تواصل معنا مباشرة عبر البريد الإلكتروني وGitHub
      </p>

      {/* نموذج التواصل */}
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

      {/* معلومات التواصل */}
      <div className="bg-white max-w-lg mx-auto p-6 rounded-xl shadow-md mb-12 text-center">
        <h2 className="text-xl font-bold text-[#2c3e50] mb-4">معلومات التواصل</h2>
        <p className="text-gray-700 mb-2">
          📧 البريد الإلكتروني:{" "}
          <a
            href="mailto:roots.palestine@gmail.com"
            className="text-blue-600 hover:underline"
          >
            roots.palestine@gmail.com
          </a>
        </p>
        <p className="text-gray-700">
          💻 GitHub:{" "}
          <a
            href="https://github.com/besanahmad123/Roots-of-Palestine"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/besanahmad123/Roots-of-Palestine
          </a>
        </p>
      </div>

      {/* تقييم النجوم */}
      <StarRating />

      {/* الفوتر */}
      <Footer />
    </div>
  );
}

export default Contact;