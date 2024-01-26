import Graph from "@/components/graph/Graph"
import Navbar from "@/components/navbar/Navbar"
import PieChartCard from "@/components/pieChartCard/PieChartCard"
import ProfileCard from "@/components/profile/ProfileCard"
import ProfileSmall from "@/components/profile/ProfileSmall"
import TableCard from "@/components/table/TableCard"
import useFetch from "@/hooks/useFetch"

function Dashboard() {

    const { data: graph, loading: graphLoading, error: graphError } = useFetch('api/graph')
    const { data: pie, loading: pieLoading, error: pieError } = useFetch('api/pie-chart')
    const { data: table, loading: tableLoading, error: tableError } = useFetch('api/table')

    return (
        <div className="w-screen max-w-full grid grid-cols-1 lg:grid-cols-[auto,1fr] relative">
            <Navbar active={0} />
            <div className="bg-[#E8EDFE] px-6 lg:px-10 py-6 flex flex-col gap-8 max-lg:mt-[5rem]">
                <div className="flex justify-between items-center">
                    <p>Good Morning ! 🌞</p>
                    <ProfileSmall />
                </div>
                <div className="flex flex-col gap-6 w-full h-full">
                    <div className="grid lg:grid-cols-[minmax(300px,1fr),350px] gap-8 w-full min-h-[400px]">
                        <Graph data={graph} loading={graphLoading} error={graphError} />
                        <PieChartCard data={pie} loading={pieLoading} error={pieError} />
                    </div>
                    <div className="grid lg:grid-cols-[auto,250px] gap-8 w-full">
                        <TableCard data={table} loading={tableLoading} error={tableError} />
                        <ProfileCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard