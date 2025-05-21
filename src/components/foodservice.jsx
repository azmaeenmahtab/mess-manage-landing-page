const FoodService = () => {


    return (
        <div className="flex justify-between items-center flex-row-reverse">
        {/* right text side */}
        <div className="textSide flex flex-col gap-[10px] max-w-[700px]">

            <div className="relative px-[20px] w-50% mb-[20px]">
            {/* right top border */}
            <div className="absolute top-0 right-25 border-t-4 border-r-4 w-[50px] h-[50px] border-[#FFE454]  "></div>

            <div className=" font-bold text-[45px] text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-300 text-start pl-[7px]">

                Food  Service  Supervisor
            </div>
            {/* left bottom border */}
            <div className="border-b-4 border-l-4 border-[#FFE454] absolute bottom-0 left-0 w-[50px] h-[50px] "></div>

            </div>

            {/* description */}
            <div className="text-start font-semibold text-gray-600 pb-[20px]">আমাদের অ্যাপে শুধু বাজার খরচ, মিলের হিসাব ও মেম্বারদের জমা/তোলার তথ্য ইনপুট করুন—বাকি হিসাব-নিকাশ অটোমেটিকভাবে হয়ে যাবে সবচেয়ে বড় সুবিধা? আপনার ডাটা সম্পূর্ণ সুরক্ষিত, কখনই হারাবে না যেকোনো ডিভাইসে লগ ইন করে অনায়াসে মেস ম্যানেজ করুন, রিয়েল-টাইমে চেক করুন পুরো মেসের আপডেটেড আর্থিক অবস্থা সহজ, স্মার্ট এবং নির্ভরযোগ্য—মেস ম্যানেজমেন্ট এখন আপনার হাতের মুঠোয়!"</div>
            <div  className="text-start font-semibold text-gray-600 pb-[20px]">খাতা-কলম, ক্যালকুলেটরের ঝামেলা থেকে মুক্তি পেতে এখনই ডাউনলোড করুন!</div>
            {/* download app section */}
            <div className="flex flex-start">
                 <button className="blueBtn">Download Now</button>
            </div>
        </div>
        {/* right image side */}
        <div className="imageSide relative flex items-center justify-center p-8 ">
            <div className="absolute inset-0 w-[500px] rounded-full bg-purple-400/30 blur-2xl" />
            <img className="relative w-full z-10" src="/src/assets/person.png" alt="Hero Image" />
        </div>
    </div>
    )
}

export { FoodService };