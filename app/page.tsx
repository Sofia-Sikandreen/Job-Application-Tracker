import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Layout, Calendar, BarChart2 } from 'lucide-react';
import ImageTabs from "@/components/ui/image-tabs";

export default function Home() {
  return (
<div className="flex min-h-screen flex-col bg-gradient-to-b from-[#bde5eb] to-[#d8eac7] text-center">

      <main className="flex-1">
        {/*hero section*/}
        <section className="container mx-auto px-4 py-32 max-w-4xl">
          <div>
            <h1 className="text-foreground mb-4 text-6xl  font-bold">A better way to track you job application</h1>
            <p className="text-text-muted mt-2 mb-10 text-xl">
              Capture,Organize and manage your job search in one go.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
              <Button size="lg" className=" bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-xl shadow-sm transition duration-300 h-12 ps-8 text-lg font-bold flex items-center gap-2 ">
                START HERE <ArrowRight className = "ml-2"/>
                </Button>
                </Link>
              <p className="text-text-muted text-sm">
                Free Forever No Credit Card Required
              </p>
            </div>
          </div>
        </section>
        <ImageTabs/>
           {/* Icons */}
        <section className="mb-16">
        <div className="flex justify-center gap-20 grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-gray-700">
            <Layout size={50} className="mb-2 text-primary" />
            <span>Organize Boards</span>
            <p className="text-muted-foreground">
                  Create custom boards and columns to track your job
                  applications at every stage of the process.
                </p>
          </div>

          <div className="flex flex-col items-center text-gray-700">
            <Calendar size={50} className="mb-2 text-primary" />
            <span>Track Schedule</span>
            <p className="text-muted-foreground">
                  Monitor your application status from applied to interview to
                  offer with visual Kanban boards.
                </p>
          </div>

          <div className="flex flex-col items-center text-gray-700">
            <BarChart2 size={50} className="mb-2 text-primary" />
            <span>Analyze Progress</span>
            <p className="text-muted-foreground">
                  Never lose track of an application. Keep all your job search
                  information in one centralized place.</p>
          </div>
        </div>
        </section>

      </main>
      
    </div>
  );
}
