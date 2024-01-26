import Navbar from "@/components/navbar/Navbar"

function Dashboard() {
    return (
        <div className="w-screen max-w-full grid grid-cols-[auto,1fr]">
            <Navbar active={0} />
            <div className="bg-[#f2f2f2]"></div>
        </div>
    )
}

export default Dashboard