import ContactForm from "../components/contactComponent/ContactForm.jsx";
import ContactInfo from "../components/contactComponent/ContactInfo.jsx";
import StarRating from "../components/contactComponent/starRating.jsx";
import Footer from "../components/Footer";


function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6 rtl">
      <h1 className="text-4xl font-extrabold text-[#2c3e50] mb-6 text-center">
        تواصل معنا
      </h1>

      <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-center leading-relaxed">
        يسعدنا تواصلك معنا لأي استفسار أو اقتراح يساهم في تطوير موقع جذور فلسطين
        املأ النموذج أدناه أو تواصل معنا مباشرة عبر البريد الإلكتروني وGitHub
      </p>

      <ContactForm />
      <ContactInfo />
      <StarRating />
      <Footer />
    </div>
  );
}

export default Contact;