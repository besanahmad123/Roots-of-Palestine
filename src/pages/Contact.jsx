function Contact() {
  return (
    <div className="p-10 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-[#2c3e50] mb-6">تواصل معنا</h1>
      <p className="mb-4">يمكنكم التواصل معنا عبر البريد الإلكتروني أو من خلال مواقع التواصل الاجتماعي.</p>

      <p className="mb-2">📧 Email: info@rootsofpalestine.com</p>
      <p className="mb-2">🌐 Website: www.rootsofpalestine.com</p>

      {/* تقييم النجوم */}
      <div className="flex justify-center mt-6 gap-2">
        <span className="text-yellow-400 text-2xl">★</span>
        <span className="text-yellow-400 text-2xl">★</span>
        <span className="text-yellow-400 text-2xl">★</span>
        <span className="text-yellow-400 text-2xl">★</span>
        <span className="text-gray-300 text-2xl">★</span>
      </div>
    </div>
  );
}

export default Contact;
