import { SiteHeader } from "@/components/site-header"
import { SectionCards } from "@/components/section-cards"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable, schema } from "@/components/data-table"
import { SidebarInset } from "@/components/ui/sidebar"
import { z } from "zod"

const mockData: z.infer<typeof schema>[] = [
    {
        id: 1,
        header: "HubSpot Data Cleanup",
        type: "Data Cleaning",
        status: "Done",
        target: "5000",
        limit: "10000",
        reviewer: "CRM Ops Team",
    },
    {
        id: 2,
        header: "Salesforce Lead Enrichment",
        type: "Enrichment",
        status: "In Progress",
        target: "2500",
        limit: "5000",
        reviewer: "Growth Team",
    },
    {
        id: 3,
        header: "UTM Attribution Sync",
        type: "Attribution",
        status: "Done",
        target: "100",
        limit: "100",
        reviewer: "Marketing Ops",
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
