import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const COLORS = ['#6BC587', '#88D1A1', '#A9DEBA', '#C9EAD4', '#EAF6ED'];

function PieChartCard({ data, loading, error }) {
    if (loading) return <p>Loading</p>
    return (
        <div className="bg-white rounded-md shadow-md py-4 flex flex-col">
            <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={300} height={300}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            // label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data && data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="flex flex-col gap-4 px-6">
                {data && data.map((item, i) => {
                    return <div key={i} className="flex gap-2 items-center">
                        <div style={{ backgroundColor: COLORS[i % COLORS.length] }} className="h-4 w-4 rounded-full"></div>
                        <p>{item.label}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default PieChartCard