import { getSession } from "@/lib/auth/auth";
import connectDB from "@/lib/db";
import { Board } from "@/lib/models";
import { redirect } from "next/navigation";
import KanbanBoard from "@/components/kanban-board";
import { Suspense } from "react";

async function getBoard(userId: string) {
"use cache";

await connectDB();

const boardDoc = await Board.findOne({
    userId: userId,
    name: "Job Hunt",
}).populate({
    path: "columns",
    populate: {
    path: "jobApplications",
    },
});

if (!boardDoc) return null;

const board = JSON.parse(JSON.stringify(boardDoc));

return board;
}


async function DashboardPage() {
    
    const session = await getSession();
const board = await getBoard(session?.user.id ?? "");

if (!session?.user) {
    redirect("/sign-in");
}
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#bde5eb] to-[#d8eac7] ">
    <div className="container mx-auto px-6 py-10">

      {/* Header Section */}
    <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
        <h1 className="text-4xl font-bold tracking-tight text-primary">
            Job Hunt Board
        </h1>
        <p className="text-muted-foreground mt-2">
            Track, manage and optimize your job applications
        </p>
        </div>

        {/* Stats Card */}
        <div className="bg-white shadow-md rounded-2xl px-6 py-4 border">
        <p className="text-sm text-muted-foreground">Total Applications</p>
        <p className="text-2xl font-semibold text-primary">
            {board?.columns?.reduce(
            (acc: number, col: any) => acc + col.jobApplications.length,
            0
            ) ?? 0}
        </p>
        </div>
    </div>

      {/* Board Container */}
    <div className="bg-white rounded-2xl shadow-lg border p-6 transition-all duration-300 hover:shadow-xl">
        <KanbanBoard board={board} userId={session.user.id} />
    </div>

    </div>
</div>
    );
}
export default async function Dashboard() {
return (
    <Suspense fallback={<p>Loading...</p>}>
    <DashboardPage />
    </Suspense>
);
}