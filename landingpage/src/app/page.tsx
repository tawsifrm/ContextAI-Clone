import Hero from './components/hero';
import Overview from './components/overview';
import Testimonials from './components/testimonials';
import UserBehavior from './components/userbehaviour';

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero />
            <Overview />
            <UserBehavior />
            <Testimonials />
        </main>
    );
};

export default Page;
