import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  bg-gradient-to-b from-[#F6EBDD] to-[#E8F1F2] max-w-4xl mx-auto text-center
">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div>
            <h1 className="text-foreground mb-6 text-6xl  font-bold">A better way to track you job application</h1>
            <p className="text-text-muted mt-2 mb-10 text-xl">
              Capture,Organize and manage your job search in one go.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button size="lg" className=" bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-xl shadow-sm transition duration-300 h-12 ps-8 text-lg font-medium">Add Application</Button>
              <p className="text-text-muted text-sm">
                Track and manage your job search efficiently
              </p>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}
