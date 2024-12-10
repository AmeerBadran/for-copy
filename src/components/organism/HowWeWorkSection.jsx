const HowWeWorkSection = () => {
  const steps = [
    { title: 'البحث والتخطيط', description: 'نجمع المعلومات ونخطط للعملية.' },
    { title: 'التصميم', description: 'نصمم واجهة مستخدم مبتكرة وجذابة.' },
    { title: 'التطوير', description: 'نبني موقعك باستخدام أحدث التقنيات.' },
    { title: 'الإطلاق', description: 'ننشر الموقع ونوفر الدعم المستمر.' },
  ];

  return (
    <section id="how-we-work" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-my-color mb-6">كيف نعمل</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-my-color mb-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
