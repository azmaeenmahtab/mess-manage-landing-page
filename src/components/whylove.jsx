const Whylove = () => {

    return(
        <div>
            <div className="flex justify-between items-center gap-[10px]">
        {/* right text side */}
        <div className="textSide flex flex-col gap-[10px] max-w-[700px]">

            <div className="relative px-[20px] w-50% mb-[20px]">
            {/* right top border */}
            <div className="absolute top-0 right-25 border-t-4 border-r-4 w-[50px] h-[50px] border-[#FFE454]  "></div>

            <div className=" font-bold text-[45px] text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-300 text-start pl-[7px]">

            Why you love it?
            </div>
            {/* left bottom border */}
            <div className="border-b-4 border-l-4 border-[#FFE454] absolute bottom-0 left-0 w-[50px] h-[50px] "></div>

            </div>

            {/* description */}
            <div className="text-start font-semibold text-gray-600 pb-[20px]">
                * Mess Chat<br /> 
                * সম্পূর্ণ অনলাইন ব্যবস্থা ,ফলে যেকোন সময় যেকোন মোবাইল দিয়ে 
   আপনার একাউন্ট এ প্রবেশ করে মেস ম্যানেজ করতে পারবেন <br />
* অটোমেটিক বাজার করার তারিখ সেট করা<br />
* মিল,খরচ,জমা যুক্ত করলে অথবা ইডিট করলেই নোটিফিকেশন যাবে<br />
* বর্তমান এবং পূর্বের সকল মাসের হিসাব এর বিস্তারিত<br />
* যেকোন প্রয়োজনে বর্তমান ম্যানেজারের সম্মতিতে ম্যানেজার পরিবর্তন<br />
* পিডিএফ ডাওনলোড<br />
* টু-লেট দেয়ার সুবিধা<br />
* 24/7 সাপোর্ট টিম ( যেকোন প্রয়োজনে ফেসবুক পেইজ এ ইনবক্স করুন )</div>
            <div  className="text-start font-semibold text-gray-600 pb-[20px]">খাতা-কলম, ক্যালকুলেটরের ঝামেলা থেকে মুক্তি পেতে এখনই ডাউনলোড করুন!</div>
            {/* download app section */}
            <div className="flex flex-start">
                 <button className="blueBtn">Download Now</button>
            </div>
        </div>
        {/* right image side */}
        <div className="imageSide relative flex items-center justify-center p-8 ">
            <div className="absolute left-[-100px] top-0 w-[600px] h-[700px] rounded-full bg-purple-400/30 blur-2xl" />
            <img className="relative left-[70px] w-full z-10" src="/src/assets/Artboard 1.png" alt="Hero Image" />
        </div>
    </div>
        </div>
    )
}

export { Whylove }