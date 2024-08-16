import Image from 'next/image';
import rodSmyth from '../assets/rodsmyth.jpg';
import matthewPhillips from '../assets/matthewphillips.jpg';
import sullyOmar from '../assets/sullyomar.jpg';

const Testimonials = () => {
  return (
    <div className="customers-container w-full py-8 bg-white flex flex-col items-center">
      <h2 className="customers-title text-center text-gray-700 mb-12 text-sm font-semibold">
        Hear from Our Customers
      </h2>
      
      <div className="customers-grid w-[85%] max-w-[1200px] flex flex-col gap-8">
        <div className="flex flex-wrap justify-center gap-8 w-full">
          <div className="flex flex-col items-start w-[40%] min-w-[240px] h-[300px]">
            <div className="customer-card bg-blue-50 p-6 rounded-lg flex flex-col justify-center h-full w-full">
              <p className="customer-quote text-base leading-relaxed text-gray-700 text-sm">
                &ldquo;The challenge that the scale of AI chat brings is understanding which needle to look for in the haystack.<br /><br /> <strong>Context.ai immediately gave me what I needed:</strong> Data that I could use to close more sales and insights for engineering to improve the user experience.&rdquo;
              </p>
            </div>
            <div className="customer-info flex items-center mt-4">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-2 border-gray-300 rounded-full" style={{ margin: '4px' }}></div>
                <Image src={rodSmyth} alt="Rod Smyth" className="relative rounded-full scale-95" />
              </div>
              <div className="flex flex-col ml-4">
                <p className="customer-name text-sm font-semibold text-gray-800">Rod Smyth</p>
                <p className="customer-title text-xs text-gray-500">CEO & Co-Founder at Glyde Talent</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start w-[40%] min-w-[240px] h-[300px]">
            <div className="customer-card bg-blue-50 p-6 rounded-lg flex flex-col justify-center h-full w-full">
              <p className="customer-quote text-base leading-relaxed text-gray-700 text-sm">
                &ldquo;Context.ai gives us confidence that changes will perform well before we ship them to production, and then shows their performance with real users - this is incredibly helpful.&rdquo;
              </p>
            </div>
            <div className="customer-info flex items-center mt-4">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-2 border-gray-300 rounded-full" style={{ margin: '4px' }}></div>
                <Image src={matthewPhillips} alt="Matthew Phillips" className="relative rounded-full scale-95" />
              </div>
              <div className="flex flex-col ml-4">
                <p className="customer-name text-sm font-semibold text-gray-800">Matthew Phillips</p>
                <p className="customer-title text-xs text-gray-500">CEO & Co-Founder at Superflows</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-[40%] min-w-[240px] mx-auto h-[300px]">
          <div className="customer-card bg-blue-50 p-6 rounded-lg flex flex-col justify-center h-full w-full">
            <p className="customer-quote text-base leading-relaxed text-gray-700 text-sm">
              &ldquo;We struggled to gain meaningful insights from the large amounts of data generated by our platform. It was difficult to understand exactly how users were interacting with the system and what they were trying to accomplish.<br /><br /> <strong>With Context.ai, we are able to derive more insights into how users interact with our product.&rdquo;</strong> This has been huge for understanding our users better, so we can focus on the areas that matter.&rdquo;
            </p>
          </div>
          <div className="customer-info flex items-center mt-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-2 border-gray-300 rounded-full" style={{ margin: '4px' }}></div>
              <Image src={sullyOmar} alt="Sully Omar" className="relative rounded-full scale-95" />
            </div>
            <div className="flex flex-col ml-4">
              <p className="customer-name text-sm font-semibold text-gray-800">Sully Omar</p>
              <p className="customer-title text-xs text-gray-500">CEO & Co-Founder at Cognosys</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
