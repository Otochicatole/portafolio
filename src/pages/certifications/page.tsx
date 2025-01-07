import { motion } from "framer-motion";
import { useState } from "react";
import { FaAward, FaCalendarAlt, FaBuilding, FaTimes } from "react-icons/fa";
import { certificationsData } from "../../global/data/data";

const CertificationsPortfolio = () => {
  const [certifications] = useState(certificationsData);

  // Added state for image preview
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Certificaciones
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-700 rounded-sm overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(cert.image)}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/asd.bmp";
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                
                <div className="flex items-center text-gray-300 mb-2">
                  <FaBuilding className="mr-2" />
                  <span>{cert.organization}</span>
                </div>

                <div className="flex items-center text-gray-300 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{cert.date}</span>
                </div>

                <p className="text-gray-400 mb-4">{cert.description}</p>

                <div className="flex items-center text-emerald-400">
                  <FaAward className="mr-2" />
                  <span>Verified Certificate</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Preview Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl w-full mx-4">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                    (e.target as HTMLImageElement).src = "/asd.bmp";
                  }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationsPortfolio;