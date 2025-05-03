import TrapezoidCard from "@/components/TrapezoidCard";
import Link from "next/link";
export default function ForgetPasswordPage() {
    return(
            <div className=" flex items-center justify-center min-h-screen bg-[#FEFCF8] relative">
                <div className="relative w-[900px] h-[500px] flex items-center justify-between">
      {/* Rectangle on the left */}
                <div className="w-[400px] h-[500px] bg-[#FBF9EC] rounded-l-2xl flex items-center justify-center shadow-lg z-10">
                    <img src="/cat2.png" alt="Cat" className="w-full h-auto" />
                </div>

                <TrapezoidCard> 
                <div className="w-full flex flex-col justify-center items-center shadow-lg px-10 py-8">
                {/* <img src="/logo.png" alt="logo" className="w-50" /> */}
                    <h2 className="text-2xl font-bold text-black mb-4">Sign In</h2>
                    <input
                        className="mb-3 p-2 border text-black border-gray-300 rounded w-4/5"
                        placeholder="Email"
                    />
                    <div className="flex justify-center w-full mt-5">
                        <Link href="/login" className="text-md text-black py-3 px-3 ">
                            Cancel
                        </Link>
                        <button className="bg-[#DAABBC] text-black py-3 px-3 rounded hover:bg-[#c799ab]">
                            Reset Password
                        </button>
                    </div>

                </div>
            </TrapezoidCard>
            </div>

        </div>
    )
}