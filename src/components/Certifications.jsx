import cert1 from "../assets/u_cert.png";
import cert2 from "../assets/u1_cert.png";
import cert3 from "../assets/u2_cert.png";

export default function Certifications() {
  const certifications = [cert1, cert2, cert3];

  return (
    <div id="certifications" className="bg-gray-50 text-gray-900 py-12 px-6">
      <h2 className="text-3xl text-yellow-700 font-bold text-center mb-10">Certifications</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white border-5 border-yellow-600 shadow-md rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="w-full h-auto object-fit"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
