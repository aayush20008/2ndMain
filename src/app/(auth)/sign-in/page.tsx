'use client'
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInSchema } from "@/schemas/signInSchema";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useState } from "react";



function SignIn() {
    const { toast } = useToast();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm< z.infer<typeof signInSchema> >({
      resolver: zodResolver(signInSchema),
      defaultValues: {
        identifier: '',
        password: ''
      }
    });
  
    const onSubmit = async (data: z.infer< typeof signInSchema> ) => {
        setIsSubmitting(true);
  
      try {
        const result = await signIn('credentials', {
          redirect: false,
          identifier: data.identifier,
          password: data.password
        });
    
        if(result?.error){
          toast({
            title: "Sign In failed",
            description: "Incorrect username or password",
            variant: "destructive"
          });
        }
    
        if(result?.url){
          router.replace('/dashboard');
        }
      } catch (error) {
        console.log(`error in sign-in - ${error}`);
      }
      finally{
        setIsSubmitting(false);
        }
    }
  
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md mx-5">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                Sign-In
              </h1>
            </div>
  
            <Form {...form}>
              <form onSubmit={ form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                name="identifier" 
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email"  
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password" 
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="password"  
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {
                    isSubmitting ? (
                        <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait
                        </>
                    ) : ( 'Sign-in' )
                }
              </Button>
  
              </form>
            </Form>
            <div className="text-center mt-4">
              <p>
                Not a member yet?{' '}
                <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
      </div>
    )
  }
  
  export default SignIn
  