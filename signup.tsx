import TrapezoidCard from "@/components/TrapezoidCard";
import Link from "next/link";
export default function LoginPage() {
return (
    <div className="flex items-center justify-center min-h-screen bg-[#FEFCF8] relative">
    {/* card container */}
    <div className="relative w-[900px] h-[500px] flex items-center justify-between">
      {/* Rectangle on the left */}
        <div className="w-[400px] h-[500px] bg-[#FBF9EC] rounded-l-2xl flex items-center justify-center shadow-lg z-10">
            <img src="/cat1.png" alt="Cat" className="w-full" />
        </div>

      {/* Trapezoid on the right, slightly overlapping */}
        < div className="w-[500px] h-[500px] -ml-10 z-20  ">
            <TrapezoidCard> 
                <div className="w-full flex flex-col justify-center items-center shadow-lg px-10 py-8">
                <img src="/logo.png" alt="logo" className="w-50" />
                    {/* <h2 className="text-2xl font-bold text-black mb-4">Sign In</h2> */}
                    <input
                        className="mb-4 p-2 border text-black border-gray-300 rounded w-4/5"
                        placeholder="Name"
                    />
                    <input
                        className="mb-3 p-2 border text-black border-gray-300 rounded w-4/5"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        className="mb-4 p-2 border text-black border-gray-300 rounded w-4/5"
                        placeholder="Password"
                    />
                    <input
                        className="mb-3 p-2 border text-black border-gray-300 rounded w-4/5"
                        placeholder="Phone number"
                    />

                    <button className="bg-[#DAABBC] text-black py-3 px-3 rounded hover:bg-[#c799ab]">
                        Next
                    </button>
                </div>
            </TrapezoidCard>
            </div>
        </div>
    </div>
);
}
