import Image from 'next/image';
import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-text-container">
                <h1 className="hero-title">Text Analytics for LLM Products.</h1>
                <p className="hero-subtitle">Context.ai helps you understand natural language in your LLM powered products.</p>
                <div className="hero-buttons">
                    <button className="hero-button-outline">Book a demo</button>
                    <button className="hero-button-primary">Get Started →</button>
                </div>
            </div>
            <div className="hero-image-container">
                <Image src={heroImage} alt="Dashboard example" className="hero-image" />
            </div>
        </section>
    );
};

export default Hero;
