import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Skeleton } from "../ui/skeleton"



function TableCard({ data, loading, error }) {
    if (loading) return <TableSkelton />
    return (
        <div className="flex flex-col gap-8 overflow-auto w-full">
            <div className="shadow-md rounded-lg overflow-hidden">
                < Table className="bg-white " >
                    <TableHeader>
                        <TableRow >
                            <TableHead className="text-black font-bold border">Id</TableHead>
                            <TableHead className="text-black font-bold border">Name</TableHead>
                            <TableHead className="text-black font-bold border">Quantity</TableHead>
                            <TableHead className="text-black font-bold border">Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="" >
                        {data && data.map((item, i) => (
                            <TableRow className="odd:bg-[#F6F6F6]" key={i}>
                                <TableCell className="border">{item.id}</TableCell>
                                <TableCell className="border" >{item.name}</TableCell>
                                <TableCell className="border">{item.quantity}</TableCell>
                                <TableCell className="border">{item.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table >
            </div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem className="rounded">
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem className="bg-white rounded border-[1px] border-black" >
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="bg-white rounded">
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="bg-white rounded">
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem className="bg-white rounded">
                        <PaginationLink href="#">9</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="bg-white rounded">
                        <PaginationLink href="#">10</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="bg-white rounded">
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>


        </div >
    )
}

function TableSkelton() {
    return <div className="flex flex-col overflow-auto w-full bg-white shadow-md rounded-lg relative">
        <div className="">
            <Skeleton className="border-b-2 w-full h-[100px] rounded-none" />
            <Skeleton className="border-b-2 w-full h-[100px] rounded-none" />
            <Skeleton className="border-b-2 w-full h-[100px] rounded-none" />
            <Skeleton className="border-b-2 w-full h-[100px] rounded-none" />
        </div>
    </div>
}

export default TableCard