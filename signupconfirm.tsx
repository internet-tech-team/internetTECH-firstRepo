import TrapezoidCard from "@/components/TrapezoidCard";
import Link from "next/link";

export default function SignupConfirm() {
return (
    <div className="flex items-center justify-center min-h-screen bg-[#FEFCF8] relative">
    <div className="relative w-[900px] h-[500px] flex items-center justify-between">
        {/* Rectangle on the left */}
        <div className="w-[400px] h-[500px] bg-[#FBF9EC] rounded-l-2xl flex items-center justify-center shadow-lg z-10">
        <img src="/cat3.png" alt="Cat" className="w-full h-auto" />
        </div>

        {/* Right - Trapezoid card with form */}
        <TrapezoidCard>
        <div className="w-full flex flex-col justify-center items-center shadow-lg px-10 py-8">
            <h2 className="text-2xl font-bold text-black mb-4">Tell Us About Yourself!</h2>

            {/* Status dropdown */}
            <select
            className="mb-3 p-2 border text-black border-gray-300 rounded w-4/5 bg-white"
            defaultValue=""
            >
            <option value="" disabled>
                Choose your status
            </option>
            <option value="married">Married</option>
            <option value="single">Single</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
            <option value="complicated">It's Complicated</option>
            </select>

            {/* Job input */}
            <input
            type="text"
            className="mb-3 p-2 border text-black border-gray-300 rounded w-4/5"
            placeholder="Current Job"
            />

            {/* Confirm button */}
            <div className="flex justify-center w-full mt-5">
            <Link href='/otp'>
            <button className="bg-[#DAABBC] text-white py-3 px-3 rounded hover:bg-[#c799ab]">
                Confirm
            </button>
            </Link>
            </div>
        </div>
        </TrapezoidCard>
    </div>
    </div>
);
}
