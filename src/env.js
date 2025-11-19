import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AdminAnalytics } from "@/components/admin/analytics";

export default async function AdminAnalyticsPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  // TEMP: Skip role check — let anyone see admin page for now
  // In real app, you'd add a `role` column to users table
  // For your project, just show the page

  return <AdminAnalytics />;
}
