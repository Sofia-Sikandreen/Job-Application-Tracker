"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signIn } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
        const [error, setError] = useState("")
        const [loading, setLoading] = useState(false)
        
        const router = useRouter();
    
        async function handleSubmit(e: React.FormEvent) {
            e.preventDefault();
            
            setError("")
            setLoading(true)
    
            try {
                const result = await signIn.email({
                    email,
                    password,
                });
                if(result.error){
                setError(result.error.message ?? "Failed to sign up");
                }else{
                    router.push("/dashboard");
                }
                
            } catch (err) {
                setError("An unexpected error occur");  
            } finally{
                setLoading(false);
            }
    
        }
    return (
        <div className="bg-gradient-to-b from-[#bde5eb] to-[#d8eac7] flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
            <Card className="w-full max-w-md shadow-lg bg-white/20 backdrop-blur-md rounded-xl ">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Sign-In</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                        Enter your credentials to access your account.
                    </CardDescription>
                </CardHeader>

                <form onSubmit={handleSubmit} className="mt-4">
                    <CardContent className="flex flex-col gap-4">
                        {error && (
                            <div className="rounded-md bg-destructive/15 p-2 text-sm text-destructive">
                                {error}
                            </div>)}
                        <div> 
                            <Label htmlFor="email">Email</Label>
                            <Input 
                            id="email" 
                            type="email" 
                            placeholder="anna@example.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            minLength={8} 
                            className="mt-1" />
                        </div>

                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input 
                            id="password" 
                            type="password" 
                            placeholder="anna123," 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={8} 
                            className="mt-1" />
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-2 mt-2">
                        <Button type="submit" className="bg-primary hover:bg-primary-hover text-white w-full py-2 rounded-xl">
                            Sign In
                        </Button>
                        <p className="text-sm text-gray-700 text-center">
                            If you don't have an account? <Link href="/sign-up" className="text-primary font-medium hover:underline">Sign Up</Link>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
