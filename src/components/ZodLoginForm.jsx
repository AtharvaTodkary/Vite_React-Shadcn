import React from 'react';
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Navigate, NavLink } from 'react-router-dom';

const formSchema = z.object({
  emailAddress: z.string().email("Invalid Email Address").nonempty("Email Address is required"),
  password: z.string().min(1, "Password is required"),
  passwordConfirm: z.string().min(1, "Password confirmation is required")
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords do not match",
  path: ["passwordConfirm"]
});

function ZodLoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: '',
      password: '',
      passwordConfirm: ''
    }
  });

  const handleSubmit = (data) => {
    console.log("Form Data:", data);
    Navigate('/about')
  };

  return (
    <div className="grid flex justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem className="w-80">
                <FormLabel className="text-black">Email Address</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Email Address" type="email" />
                </FormControl>
                <FormMessage className="text-xs"/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="pt-4">
                <FormLabel className="text-black">Enter Password</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Password" type="password" />
                </FormControl>
                <FormMessage className="text-xs"/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem className="pt-4">
                <FormLabel className="text-black">Confirm Password</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Confirm Password" type="password" />
                </FormControl>
                <FormMessage className="text-xs"/>
              </FormItem>
            )}
          />

          <FormItem className="flex justify-center pt-4">
            <Button type="submit">Login</Button>
          </FormItem>
        </form>
      </Form>
    </div>
  );
}

export default ZodLoginForm;
