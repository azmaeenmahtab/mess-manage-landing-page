const FoodService = () => {


    return (
        <div className="flex justify-between items-center flex-row-reverse">
        {/* left text side */}
        <div className="textSide flex flex-col gap-[10px] max-w-[600px]">
            
             
            <div className="py-[20px] font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-300 text-start">Food Service Supervisor</div>
            <div className="text-start font-semibold text-gray-600 pb-[20px]">আমাদের অ্যাপে শুধু বাজার খরচ, মিলের হিসাব ও মেম্বারদের জমা/তোলার তথ্য ইনপুট করুন—বাকি হিসাব-নিকাশ অটোমেটিকভাবে হয়ে যাবে সবচেয়ে বড় সুবিধা? আপনার ডাটা সম্পূর্ণ সুরক্ষিত, কখনই হারাবে না যেকোনো ডিভাইসে লগ ইন করে অনায়াসে মেস ম্যানেজ করুন, রিয়েল-টাইমে চেক করুন পুরো মেসের আপডেটেড আর্থিক অবস্থা সহজ, স্মার্ট এবং নির্ভরযোগ্য—মেস ম্যানেজমেন্ট এখন আপনার হাতের মুঠোয়!"</div>
            <div  className="text-start font-semibold text-gray-600 pb-[20px]">খাতা-কলম, ক্যালকুলেটরের ঝামেলা থেকে মুক্তি পেতে এখনই ডাউনলোড করুন</div>
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
            <img className="relative w-full z-10" src="/src/assets/person.png" alt="Hero Image" />
        </div>
    </div>
    )
}

export { FoodService };