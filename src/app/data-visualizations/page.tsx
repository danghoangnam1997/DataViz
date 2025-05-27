"use client" // For Recharts

import { PageWrapper } from '@/components/page-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];


export default function DataVisualizationsPage() {
  // Note: In a real app, metadata would be static. This is fine for client components.
  // If this were a server component, this would be outside the component.
  // For simplicity, we'll leave it here.
  // export const metadata = { ... } would be used in server components.

  return (
    <PageWrapper>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gradient">Data Visualizations</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Exploring data through interactive charts and graphs. Below is an example visualization.
        </p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Monthly Project Engagement</CardTitle>
          <CardDescription>Mock data showing UV and PV values over months.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))"/>
                <Tooltip
                  contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Legend wrapperStyle={{ color: 'hsl(var(--foreground))' }} />
                <Bar dataKey="pv" fill="hsl(var(--primary))" name="Project Views" />
                <Bar dataKey="uv" fill="hsl(var(--accent))" name="Unique Visitors" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">More Visualizations Coming Soon</h2>
        <p className="text-muted-foreground">
          I'm currently working on developing more interactive data projects. Stay tuned!
        </p>
      </section>
    </PageWrapper>
  );
}
