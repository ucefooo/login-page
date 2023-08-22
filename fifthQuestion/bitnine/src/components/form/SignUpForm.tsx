'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import React, { use } from "react";
import Link from 'next/link';
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

const FormSchema = z
.object({
    username: z.string().min(1,'Username is required').max(30),
    email: z.string().min(1,'Email is required').email('Invalid Email'),
    password: z.string().min(1,'Password is required').min(8,'Password must have more than 8 characters'),
    confirmPassword: z.string().min(1,'Password confirmation is required').min(8,'Password must have more than 8 characters'),
})
.refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
})


  
const SignUpForm = () => {
    const router = useRouter();
    const {toast} = useToast();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
      })
      const onSubmit = async (values:z.infer<typeof FormSchema>) => {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: values.username,
                email: values.email,
                password: values.password,
            })
        })
        if (response.ok)
        {
            toast({
                title: "Success",
                description: "You have successfully signed up!",
                variant: 'default',
              })
            router.refresh()
            router.push('/sign-in')
        }
        else
        {
            toast({
                title: "Error",
                description: "Oops! Something went wrong.",
                variant: 'destructive',
              })
        }
      };
    return  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                <FormItem>
                    <FormLabel >Username</FormLabel>
                    <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormLabel >Email</FormLabel>
                    <FormControl>
                    <Input placeholder="Enter your E-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                    <Input placeholder="Enter your Password" type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Re-Enter your Password</FormLabel>
                    <FormControl>
                    <Input placeholder="Re-Enter your Password" type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>
      <Button className="w-full mt-6" type="submit">
        Sign Up
      </Button>
    </form>
    <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px
        before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
    </div>
    <p className="text-center text-sm text-gray-600 mt-2">
        Already have an account? please&nbsp;
        <Link className="text-blue-500 hover:underline" href='/sign-in'>Sign In</Link>
    </p>
  </Form>;
};

export default SignUpForm;
