import { SiteHeader } from "@/components/site-header"
import { SectionCards } from "@/components/section-cards"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable, schema } from "@/components/data-table"
import { SidebarInset } from "@/components/ui/sidebar"
import { z } from "zod"

const mockData: z.infer<typeof schema>[] = [
    {
        id: 1,
        header: "Revenue Overview",
        type: "Financials",
        status: "Done",
        target: "100",
        limit: "200",
        reviewer: "Eddie Lake",
    },
    {
        id: 2,
        header: "User Growth",
        type: "Analytics",
        status: "In Progress",
        target: "50",
        limit: "100",
        reviewer: "Emily Whalen",
    },
    {
        id: 3,
        header: "System Health",
        type: "Infrastructure",
        status: "Done",
        target: "99.9",
        limit: "100",
        reviewer: "Jamik Tashpulatov",
    },
]

export default function Page() {
    return (
        <SidebarInset>
            <div className="@container/main flex flex-1 flex-col transition-all duration-300 ease-in-out">
                <SiteHeader />
                <div className="flex flex-1 flex-col gap-4 py-4 h-full">
                    <SectionCards />
                    <ChartAreaInteractive />
                    <DataTable data={mockData} />
                </div>
            </div>
        </SidebarInset>
    )
}
