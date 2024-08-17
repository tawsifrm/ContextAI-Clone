import Image from 'next/image';
import AicpaSocLogo from '../assets/aicpa.png';

const Enterprise = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-lg p-6 md:p-16 shadow-lg max-w-[90%] md:max-w-[80%] mx-auto">
                    <div className="text-center mb-4">
                        <h2 className="text-gray-500 uppercase tracking-wider text-base mb-0.5">Enterprise</h2>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Trust and Security for Enterprise</h3>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-4">
                            <Image src={AicpaSocLogo} alt="AICPA SOC Logo" width={112} height={112} className="w-28 h-28" />
                            <div className="text-center md:text-left">
                                <h4 className="text-base font-semibold text-gray-900 mb-1">SOC 2 Compliant</h4>
                                <p className="text-gray-700 text-sm mb-0 leading-tight">
                                    Context.ai is SOC 2 Type II compliant, so you can have confidence your data 
                                    is handled with the highest levels of security.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4 md:space-y-0">
                            <div className="text-center md:text-left">
                                <h4 className="text-base font-semibold text-gray-900 mb-1">Self-Hosted Deployment</h4>
                                <p className="text-gray-700 text-sm mb-0 leading-tight">
                                    Context.ai offers a self-hosted option for customers with the strictest data 
                                    residency requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Enterprise;
