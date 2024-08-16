import Hero from './components/hero';
import Overview from './components/overview';
import Testimonials from './components/testimonials';

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero />
            <Overview />
            <Testimonials />
        </main>
    );
};

export default Page;
