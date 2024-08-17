import Image from 'next/image';
import Logo2 from '../assets/logo2.png';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
          <Image 
            src={Logo2} 
            alt="Logo" 
            width={24} 
            height={24} 
            className="transition-transform duration-500 ease-in-out transform hover:rotate-180" 
          />
          <span className="text-sm text-gray-600 ml-4">© 2023-2024 Context</span>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-800">Terms and Conditions</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
            Compare Models →
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
