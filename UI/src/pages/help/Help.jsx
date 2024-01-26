import Navbar from "@/components/navbar/Navbar"

function Help() {
    return (
        <div className="w-screen max-w-full grid grid-cols-1 lg:grid-cols-[auto,1fr] relative">
            <Navbar active={3} />
            <div className="bg-[#E8EDFE] px-10 py-6 flex flex-col gap-8 max-lg:mt-[5rem]">
                Help Page
            </div>
        </div>
    )
}

export default Help