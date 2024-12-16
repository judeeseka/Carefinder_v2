import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { HandPlatter, Hospital, Search, UserRound } from "lucide-react";

const Dashboard = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12">
      <h1 className="font-bold text-2xl md:text-4xl">Dashboard Overview</h1>
      <p className="text-xl md:text-2xl font-medium">
        Welcome,{" "}
        <span className="text-blue-700">
          {loggedIn ? loggedIn.name : "Admin"}
        </span>
      </p>

      <main className="grid items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:gap-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Hospitals
              </CardTitle>
              <Hospital className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4,036</div>
              {/* <p className="text-xs text-muted-foreground">+5.2% from last month</p> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Providers
              </CardTitle>
              <HandPlatter className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">20</div>
              {/* <p className="text-xs text-muted-foreground">+3.1% from last month</p> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Search
              </CardTitle>
              <Search className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,280</div>
              {/* <p className="text-xs text-muted-foreground">+7.9% from last month</p> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <UserRound className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              {/* <p className="text-xs text-muted-foreground">+12.4% from last month</p> */}
            </CardContent>
          </Card>
        </div>

        {/* <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">Bar Chart</h2>
              <DashboardBarChart />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">Pie Chart</h2>
              <DashboardPieChart />
            </div>
          </div> */}
      </main>
    </section>
  );
};

export default Dashboard;
