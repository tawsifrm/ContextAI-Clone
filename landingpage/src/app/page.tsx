import Hero from './components/hero';
import Overview from './components/overview';
import Testimonials from './components/testimonials';
import UserBehavior from './components/userbehaviour';
import Enterprise from './components/enterprise';
import GetStarted from './components/getstarted';

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between space-y-16 bg-white">
            <Hero />
            <Overview />
            <UserBehavior />
            <Enterprise />
            <Testimonials />
            <GetStarted />
        </main>
    );
};

export default Page;
