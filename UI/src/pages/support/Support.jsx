import Navbar from "@/components/navbar/Navbar"

function Support() {
    return (
        <div className="w-screen max-w-full grid grid-cols-[auto,1fr] relative">
            <Navbar active={1} />
            <div className="bg-[#E8EDFE] px-10 py-6 flex flex-col gap-8">
                Support Page
            </div>
        </div>
    )
}

export default Support