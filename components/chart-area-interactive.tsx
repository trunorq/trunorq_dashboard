"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart for marketing metrics"

const chartData = [
  { date: "2024-06-01", impressions: 85, clicks: 45, leads: 65, customers: 25 },
  { date: "2024-06-03", impressions: 98, clicks: 52, leads: 82, customers: 32 },
  { date: "2024-06-05", impressions: 72, clicks: 38, leads: 58, customers: 18 },
  { date: "2024-06-07", impressions: 45, clicks: 22, leads: 32, customers: 12 },
  { date: "2024-06-09", impressions: 88, clicks: 48, leads: 78, customers: 28 },
  { date: "2024-06-11", impressions: 92, clicks: 50, leads: 80, customers: 30 },
  { date: "2024-06-13", impressions: 68, clicks: 35, leads: 55, customers: 15 },
  { date: "2024-06-15", impressions: 75, clicks: 40, leads: 60, customers: 20 },
  { date: "2024-06-17", impressions: 38, clicks: 18, leads: 28, customers: 8 },
  { date: "2024-06-19", impressions: 82, clicks: 42, leads: 62, customers: 22 },
  { date: "2024-06-21", impressions: 95, clicks: 55, leads: 75, customers: 35 },
  { date: "2024-06-23", impressions: 65, clicks: 32, leads: 52, customers: 14 },
  { date: "2024-06-25", impressions: 105, clicks: 65, leads: 85, customers: 45 },
  { date: "2024-06-27", impressions: 80, clicks: 40, leads: 60, customers: 20 },
  { date: "2024-06-29", impressions: 85, clicks: 45, leads: 65, customers: 25 },
  { date: "2024-06-30", impressions: 90, clicks: 50, leads: 70, customers: 30 },
]

const chartConfig = {
  impressions: {
    label: "Impressions",
    color: "hsl(var(--primary))",
  },
  clicks: {
    label: "Clicks",
    color: "hsl(var(--primary))",
  },
  leads: {
    label: "Leads",
    color: "hsl(var(--primary))",
  },
  customers: {
    label: "Customers",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [activeMetric, setActiveMetric] = React.useState<string>("leads")
  const [timeRange, setTimeRange] = React.useState("30d")

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader className="flex flex-col gap-4 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-1">
              <span>Filter by:</span>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="h-auto border-none p-0 bg-transparent shadow-none font-semibold text-primary focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-1">
              <Select defaultValue="all">
                <SelectTrigger className="h-auto border-none p-0 bg-transparent shadow-none font-semibold text-primary focus:ring-0">
                  <SelectValue placeholder="All networks" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All networks</SelectItem>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="meta">Meta</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Spend</span>
            <span className="text-2xl font-bold text-muted-foreground">$16,543.00</span>
          </div>
        </div>
        <div className="flex justify-start">
          <ToggleGroup
            type="single"
            value={activeMetric}
            onValueChange={(value) => value && setActiveMetric(value)}
            variant="outline"
            className="flex rounded-md border p-0.5 overflow-hidden"
          >
            <ToggleGroupItem value="impressions" className="px-4 py-2 text-xs font-medium data-[state=on]:bg-muted data-[state=on]:text-foreground rounded-none border-r last:border-r-0">
              Impressions
            </ToggleGroupItem>
            <ToggleGroupItem value="clicks" className="px-4 py-2 text-xs font-medium data-[state=on]:bg-muted data-[state=on]:text-foreground rounded-none border-r last:border-r-0">
              Clicks
            </ToggleGroupItem>
            <ToggleGroupItem value="leads" className="px-4 py-2 text-xs font-medium data-[state=on]:bg-muted data-[state=on]:text-foreground rounded-none border-r last:border-r-0">
              Leads
            </ToggleGroupItem>
            <ToggleGroupItem value="customers" className="px-4 py-2 text-xs font-medium data-[state=on]:bg-muted data-[state=on]:text-foreground rounded-none border-r last:border-r-0">
              Customers
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[350px] w-full"
        >
          <AreaChart data={chartData} margin={{ left: -20, right: 10 }}>
            <defs>
              <linearGradient id="fillMetric" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.01}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" verticalFill={['#f9fafb', '#ffffff']} fillOpacity={0.5} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }).split('/').reverse().join('/')
              }}
              style={{ fontSize: '10px', fontWeight: 500 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={10}
              fontWeight={500}
              domain={[0, 'dataMax + 20']}
            />
            <ChartTooltip
              cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '4 4' }}
              content={
                <ChartTooltipContent
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey={activeMetric}
              type="linear"
              fill="url(#fillMetric)"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ r: 4, fill: "hsl(var(--primary))", strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
