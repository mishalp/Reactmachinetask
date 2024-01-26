import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Skeleton } from "../ui/skeleton"

function Graph({ data, error, loading }) {
    if (loading) return <GraphSkelton />
    return (
        <div className="flex min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={600} height={400} data={data} className="bg-white pr-8 rounded-lg w-full shadow-md">
                    <Line type="monotone" dataKey="y" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="x" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph

function GraphSkelton() {
    return (
        <div className="w-full h-full bg-white p-4 shadow-md rounded-md">
            <Skeleton className="border-l-2 border-b-2 h-full relative rounded-none">
                <div className="flex justify-evenly w-full h-full">
                    <Skeleton className="w-[2px] h-full bg-[#aaa] rounded-none" />
                    <Skeleton className="w-[2px] h-full bg-[#aaa] rounded-none" />
                    <Skeleton className="w-[2px] h-full bg-[#aaa] rounded-none" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-evenly">
                    <Skeleton className="w-full h-[2px] bg-[#aaa] rounded-none" />
                    <Skeleton className="w-full h-[2px] bg-[#aaa] rounded-none" />
                    <Skeleton className="w-full h-[2px] bg-[#aaa] rounded-none" />
                </div>
            </Skeleton>
        </div>
    )
} 