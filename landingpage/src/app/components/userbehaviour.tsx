import Image from 'next/image';
import codeImage from '../assets/code.png';
import semanticsImage from '../assets/semantics.png';
import filterImage from '../assets/filter.png';

const UserBehavior = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full py-12 bg-white">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Understand user<br /> behavior in production
      </h2>

      <div className="absolute top-32 bottom-0 inset-x-1/2 w-px bg-gray-300 pointer-events-none"></div> 
      
      <div className="relative flex items-start w-3/4 mb-8">
        <div className="absolute left-1/2 top-8 w-3.5 h-3.5 bg-gray-300 rounded-full transform -translate-x-1/2"></div>
        
        <div className="flex items-start w-1/2 pr-8">
          <Image src={codeImage} alt="Code Snippet" className="w-full h-auto" />
        </div>
        <div className="flex flex-col justify-start w-1/2 pl-8 mt-6"> 
          <h3 className="text-lg font-bold">1. Ingest transcripts in less than 30 minutes</h3>
          <p className="mt-2 text-sm text-gray-700">
            Integrate using our SDKs, or send transcripts directly via the API.
          </p>
          <div className="text-left mt-4">
            <button className="px-4 py-2 text-sm text-blue-500 border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Learn more →
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative flex items-start w-3/4 mb-8">
        <div className="absolute left-1/2 top-8 w-3.5 h-3.5 bg-gray-300 rounded-full transform -translate-x-1/2"></div>

        <div className="flex items-start w-1/2 pr-8">
          <Image src={semanticsImage} alt="Semantics" className="w-full h-auto" />
        </div>
        <div className="flex flex-col justify-start w-1/2 pl-8 mt-6"> 
          <h3 className="text-lg font-bold">2. Group conversations into categories</h3>
          <p className="mt-2 text-sm text-gray-700">
            Use an LLM to group conversations into relevant categories. Context.ai suggests relevant clusters of conversations too, helping you uncover hidden behavior patterns.
          </p>
        </div>
      </div>
      
      <div className="relative flex items-start w-3/4">
        <div className="absolute left-1/2 top-8 w-3.5 h-3.5 bg-gray-300 rounded-full transform -translate-x-1/2"></div>

        <div className="flex items-start w-1/2 pr-8">
          <Image src={filterImage} alt="Filter Options" className="w-full h-auto" />
        </div>
        <div className="flex flex-col justify-start w-1/2 pl-8 mt-6">
          <h3 className="text-lg font-bold">3. Identify and resolve poor experiences</h3>
          <p className="mt-2 text-sm text-gray-700">
            Understand why users are having good or bad experiences. Search and filter by signs of user satisfaction to understand how you can improve their experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserBehavior;
