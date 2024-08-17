import Image from 'next/image';
import heroImage from '../assets/hero.png';
import algoliaLogo from '../assets/algolia.png';
import hasbroLogo from '../assets/hasbro.png';
import robinAILogo from '../assets/robinAI.png';
import cognosysLogo from '../assets/cognosys.png';
import juiceboxLogo from '../assets/juicebox.png';
import lennyLogo from '../assets/lenny.png';

const Hero = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section flex flex-col lg:flex-row items-center justify-center lg:justify-between p-6 lg:p-16 bg-white">
                <div className="hero-text-container flex flex-col items-center lg:items-start max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                    <h1 className="hero-title text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                        <span className="text-blue-500">Text Analytics</span> for LLM Products.
                    </h1>
                    <p className="hero-subtitle text-lg lg:text-xl text-gray-600 mb-6">
                        Context.ai helps you understand natural language in your LLM powered products.
                    </p>
                    <div className="hero-buttons flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                        <button className="hero-button-outline px-6 py-3 border border-blue-500 text-blue-500 rounded-md font-medium hover:bg-blue-50 transition">
                            Book a demo
                        </button>
                        <button className="hero-button-primary px-6 py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition">
                            Get Started →
                        </button>
                    </div>
                </div>
                <div className="hero-image-container mt-8 lg:mt-0 lg:ml-12">
                    <Image src={heroImage} alt="Dashboard example" className="hero-image w-full lg:w-auto" />
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="trusted-by-section text-center py-8 lg:py-12 bg-white">
                <h2 className="text-gray-600 text-lg lg:text-xl mb-4 font-semibold">Trusted by</h2>
                <div className="logos flex flex-wrap justify-center items-center gap-6 lg:gap-8">
                    <Image src={algoliaLogo} alt="Algolia" className="w-24 lg:w-32 h-auto" />
                    <Image src={hasbroLogo} alt="Hasbro" className="w-24 lg:w-32 h-auto" />
                    <Image src={robinAILogo} alt="Robin AI" className="w-24 lg:w-32 h-auto" />
                    <Image src={cognosysLogo} alt="Cognosys" className="w-24 lg:w-32 h-auto" />
                    <Image src={juiceboxLogo} alt="Juicebox" className="w-24 lg:w-32 h-auto" />
                    <Image src={lennyLogo} alt="Lenny's Newsletter" className="w-24 lg:w-32 h-auto" />
                </div>
            </section>
        </div>
    );
};

export default Hero;
