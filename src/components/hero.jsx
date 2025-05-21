const Hero = () => {
    return (
        <div className="flex justify-between items-center ">
            {/* left text side */}
            <div className="textSide flex flex-col gap-[10px] max-w-[600px]">
                
                <div className=" text-blue-600 font-semibold bg-purple-100 rounded-full px-4 py-[4px] w-1/2">টাকা ম্যানেজ করুন আরও সহজে🥳</div>
                <div className="py-[20px] font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-300 text-start">স্মার্ট ফাইন্যান্স <br /> সুরক্ষিত ভবিষ্যৎ</div>
                <div className="text-start font-semibold text-gray-600 pb-[20px]">আমাদের অভিজ্ঞ ফাইন্যান্সিয়াল অ্যাডভাইজাররা আপনাকে গাইড করবে সঠিক বিনিয়োগ অপশন, সাশ্রয়ী লোন প্ল্যান, ট্যাক্স সেভিং টিপস এবং দীর্ঘমেয়াদি সম্পদ বৃদ্ধির স্ট্র্যাটেজি নিয়ে। ডিজিটাল বা অফলাইন – যেভাবে সুবিধা, সেখানেই পরামর্শ নিন!</div>
                {/* download app section */}
                <div className="flex gap-4">
                    {/* google play button */}
                    <div className="flex items-center gap-[10px] border-2 border-black-300 rounded-full px-[20px] py-[5px]">
                        <div> <img src="/src/assets/vector.png" alt="google play" /> </div>
                        <div className="text-start">
                            <div className="text-gray-500 font-bold">Get on</div>
                            <div className="font-bold text-[22px]">Google Play</div>
                        </div>
                    </div>
                    {/* app store button */}
                    <div className="flex items-center gap-[10px] border-2 border-black-300 rounded-full px-[20px] py-[5px]">
                        <div> 
                            <img src="/src/assets/apple.png" alt="app store" /> 
                        </div>
                        <div className="text-start">
                            <div className="text-gray-500 font-bold">Download on the</div>
                            <div className="font-bold text-[22px]">App Store</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* right image side */}
            <div className="imageSide relative flex items-center justify-center p-8">
                <div className="absolute inset-0 rounded-full bg-purple-400/30 blur-2xl" />
                <img className="relative w-full z-10" src="/src/assets/iPhone 15 Pro.png" alt="Hero Image" />
            </div>
            {/* review section */}
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export { Hero };    