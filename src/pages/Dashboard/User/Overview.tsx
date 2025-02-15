import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Total', value: 1 },
  { name: 'Pending', value: 1 },
  { name: 'Approved', value: 0 },
  { name: 'Completed', value: 0 },
  { name: 'Cancelled', value: 0 },
];

const Overview = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Overview</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
          {data.map((item) => (
            <Card key={item.name} className="p-4">
              <CardHeader>
                <CardTitle className="text-xl">
                  {item.value.toString().padStart(2, '0')}
                </CardTitle>
                <p className="text-muted-foreground">{item.name} Bookings</p>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="bg-white p-4 shadow rounded-lg w-full h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" barSize={30}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip />
              <Bar dataKey="value" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Overview;
