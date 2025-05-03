import TrapezoidCard from "@/components/TrapezoidCard";
import Link from "next/link";

export default function otp(){

return (
    <div className=" flex items-center justify-center min-h-screen bg-[#FEFCF8] relative">
    <div className="relative w-[900px] h-[500px] flex items-center justify-between">
{/* Rectangle on the left */}
    <div className="w-[400px] h-[500px] bg-[#FBF9EC] rounded-l-2xl flex items-center justify-center shadow-lg z-10">
        <img src="/cat1.png" alt="Cat" className="w-full h-auto" />
    </div>
    <TrapezoidCard> 
                <div className="w-full flex flex-col justify-center items-center shadow-lg px-10 py-8">
                {/* <img src="/logo.png" alt="logo" className="w-50" /> */}
                    <h2 className="text-2xl font-bold text-black mb-4">Enter Sent OTP</h2>
                    <input
                        type="password"
                        className="mb-3 p-2 border text-black border-gray-300 rounded w-4/5"
                        placeholder="New password"
                    />
                    <input
                        type="password"
                        className="mb-3 p-2 border text-black border-gray-300 rounded w-4/5"
                        placeholder="current password"
                    />

                    {/* New Password Section */}
{/* OTP Section */}
<div className="col-span-2 flex flex-col items-center mt-32 space-y-6">
    {/* <label className="text-6xl font-semibold text-[#557C55] absolute top-180">
    Enter Sent OTP
    </label> */}

    <div className="flex flex-row space-x-3 mt-2">
    {[...Array(4)].map((_, index) => (
    <input
        key={index}
        type="text"
        maxLength={1}
        className="w-14 h-20 text-center text-7xl border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#557C55] bg-[#8EA68E]"
    />
    ))}
    </div>

  {/* Message below the OTP Boxes */}
    <Link href='/otp'>
    <div className="mt-4 text-lg text-[#557C55] hover:underline cursor-pointer">
    Can't find code? Send OTP again!
        

    </div>
    </Link>
    {/* Confirm label */}
    <div className="py-3 px-3 flex items-center justify-center bg-[#DAABBC] text-white text-xl rounded shadow-lg hover:bg-[#c799ab] focus:outline-none">
    Confirm
    </div>

</div>

    <div className="space-y-4 mt-80 ">
        {/* New Password Label */}
        

    </div>
                </div>
            </TrapezoidCard>
    


    </div>
</div>
)

}