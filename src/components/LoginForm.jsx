import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ZodLoginForm from "./ZodLoginForm"
import { Link } from "react-router-dom"


export function LoginForm() {
  return (
    <Card className="w-screen sm:w-[350px] md:w-[350px] lg:w-[350px]">
      <CardHeader>
        <CardTitle className="text-2xl lg:text-3xl font-bold">Login</CardTitle>
        <CardDescription className="text-sm lg:text-base">Login to your Account</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid w-full items-center gap-4">
          <ZodLoginForm />
        </div>
      </CardContent>
      <CardFooter className="pt-8 text-xs flex justify-start items-center">
        <span>New to Vite App? <Link to="/register" className="text-blue-700 underline">Register</Link></span>
      </CardFooter>
    </Card>
  )
}
