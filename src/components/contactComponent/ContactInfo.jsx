function ContactInfo() {
  return (
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
  );
}

export default ContactInfo;