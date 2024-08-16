import Image from 'next/image';
import Quote from '../assets/quote.png';

const GetStarted = () => {
  return (
    <div className="relative bg-blue-500 rounded-lg overflow-hidden px-8 py-4 mx-auto flex items-center" style={{ maxWidth: '1000px', width: '100%' }}>
      {/* Content on the left */}
      <div className="relative z-10 text-white w-1/2 ml-20"> {/* Added margin-left */}
        <h2 className="text-xl font-bold mb-2">Measure & Improve LLM<br /> Product Performance.</h2>
        <a
          href="#"
          className="inline-block bg-white text-black font-normal px-4 py-2 rounded shadow-lg hover:bg-blue-100 transition duration-300 text-sm"
        >
          Get Started →
        </a>
      </div>

      {/* Image on the right */}
      <div className="relative w-1/2 h-72">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={Quote} // Adjust the path if necessary
            alt="Decorative Image"
            layout="fill"
            objectFit="cover" // Ensures the image covers the container
            className="object-center" // Adjusted scaling removed
          />
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-blue-500 opacity-75" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
