import Image from 'next/image';
import intentImage from '../assets/intent.png';  
import signalImage from '../assets/signal.png';

const Overview = () => {
    return (
        <>
            <section className="overview-section w-full flex flex-wrap justify-center items-start space-x-6 p-12 bg-white">
                <div className="flex flex-col md:flex-row w-full md:w-auto gap-6">
                    <div className="overview-card bg-white shadow-md rounded-lg p-4 flex flex-col items-start mb-6 w-full md:w-[28rem] h-[21.375rem]">
                        <div className="scale-content transform scale-95 w-full h-full">
                            <h3 className="text-blue-500 text-lg font-bold mb-2">Learn How People Use Your Product</h3>
                            <p className="text-gray-600 mb-4">
                                Segment user inputs into subgroups, detecting user intents and trends in behaviors.
                            </p>
                            <div className="overview-image mt-auto w-full">
                                <Image src={intentImage} alt="Product Insights" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    <div className="overview-card bg-white shadow-md rounded-lg p-4 flex flex-col items-start mb-6 w-full md:w-[28rem] h-[21.375rem]">
                        <div className="scale-content transform scale-95 w-full h-full">
                            <h3 className="text-blue-500 text-lg font-bold mb-2">Measure Success from User Signals</h3>
                            <p className="text-gray-600 mb-4">
                                Track performance with implicit and explicit user feedback signals to identify areas for improvement.
                            </p>
                            <div className="overview-image mt-auto w-full">
                                <Image src={signalImage} alt="User Signals" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video-section w-full flex justify-center py-8 bg-white">
                <video controls className="w-full max-w-4xl rounded-lg shadow-md">
                    <source src="https://blob.context.ai/2024MayAnalyticswBackground.mp4" type="video/mp4" />
                </video>
            </section>
        </>
    );
};

export default Overview;
