"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart for CRM performance"

const chartData = [
  { date: "2024-06-01", enrichment: 85, cleaning: 45, attribution: 65, automation: 25 },
  { date: "2024-06-03", enrichment: 98, cleaning: 52, attribution: 82, automation: 32 },
  { date: "2024-06-05", enrichment: 72, cleaning: 38, attribution: 58, automation: 18 },
  { date: "2024-06-07", enrichment: 45, cleaning: 22, attribution: 32, automation: 12 },
  { date: "2024-06-09", enrichment: 88, cleaning: 48, attribution: 78, automation: 28 },
  { date: "2024-06-11", enrichment: 92, cleaning: 50, attribution: 80, automation: 30 },
  { date: "2024-06-13", enrichment: 68, cleaning: 35, attribution: 55, automation: 15 },
  { date: "2024-06-15", enrichment: 75, cleaning: 40, attribution: 60, automation: 20 },
  { date: "2024-06-17", enrichment: 38, cleaning: 18, attribution: 28, automation: 8 },
  { date: "2024-06-19", enrichment: 82, cleaning: 42, attribution: 62, automation: 22 },
  { date: "2024-06-21", enrichment: 95, cleaning: 55, attribution: 75, automation: 35 },
  { date: "2024-06-23", enrichment: 65, cleaning: 32, attribution: 52, automation: 14 },
  { date: "2024-06-25", enrichment: 105, cleaning: 65, attribution: 85, automation: 45 },
  { date: "2024-06-27", enrichment: 80, cleaning: 40, attribution: 60, automation: 20 },
  { date: "2024-06-29", enrichment: 85, cleaning: 45, attribution: 65, automation: 25 },
  { date: "2024-06-30", enrichment: 90, cleaning: 50, attribution: 70, automation: 30 },
]

const chartConfig = {
  enrichment: {
    label: "Enrichment",
    color: "hsl(var(--primary))",
  },
  cleaning: {
    label: "Cleaning",
    color: "hsl(var(--primary))",
  },
  attribution: {
    label: "Attribution",
    color: "hsl(var(--primary))",
  },
  automation: {
    label: "Automation",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [activeMetric, setActiveMetric] = React.useState<keyof typeof chartConfig>("enrichment")

  return (
    <Card className="@container/card">
      <CardHeader>
        <div className="grid gap-1">
          <CardTitle>CRM Performance Overview</CardTitle>
          <CardDescription>
            Showing data for {chartConfig[activeMetric].label} over the last 30 days
          </CardDescription>
        </div>
        <CardAction>
          <ToggleGroup
            type="single"
            value={activeMetric}
            onValueChange={(value) => value && setActiveMetric(value as keyof typeof chartConfig)}
            variant="outline"
            className="hidden @[600px]/card:flex"
          >
            <ToggleGroupItem value="enrichment" className="px-3">Enrichment</ToggleGroupItem>
            <ToggleGroupItem value="cleaning" className="px-3">Cleaning</ToggleGroupItem>
            <ToggleGroupItem value="attribution" className="px-3">Attribution</ToggleGroupItem>
            <ToggleGroupItem value="automation" className="px-3">Automation</ToggleGroupItem>
          </ToggleGroup>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData} margin={{ left: -20, right: 10 }}>
            <defs>
              <linearGradient id="fillMetric" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.1}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.01}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={12}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey={activeMetric}
              type="natural"
              fill="url(#fillMetric)"
              stroke="hsl(var(--primary))"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
