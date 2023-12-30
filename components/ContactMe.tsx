"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, 
    FormItem, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactPayload } from "@/typings";
import { Loader2 } from "lucide-react"
import { useState } from "react";
import { toast } from "sonner";





const contactFormSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be of word of alphabets",
    }).min(2, {
        message: "I know you're busy but please enter your name",
    }).max(150, {
        message: "Name must be not exit 150 characters.",
    }),
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be contain @ and .",
    }).email({
        message: "Email must contain @ and .",
    }),
    phone: z.string({
        required_error: "Phone Number is required",
        invalid_type_error: "Phone Number must be only numbers",
    }).length(11, {
        message: "Mobile Number must be 11 digits.",
    }),
    message: z.string({
        required_error: "Message is required",
        invalid_type_error: "Message must be of word of alphabets",
    }).min(2, {
        message: "i will be glad if you leave me a message",
    }),
})

const requiredForm = contactFormSchema.required();
    


const ContactMe = () => {

    const [sending, setSending] = useState<boolean>(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof requiredForm>>({
        resolver: zodResolver(requiredForm),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        },
    })

    async function onSubmit(values: z.infer<typeof requiredForm>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        const apiEndpoint = '/api/email';

        setSending(true);

        const body : contactPayload = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message,
        }

        fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
            'Content-Type': 'application/json', // Specify the content type
            },
        })
        .then((res) => res.json())
        .then((response) => {
        toast("Thanks for reaching out", {
            description: "I'll get back to you shortly!",
        });
        setSending(false);
        form.reset();
        //alert(response.message);
        })
        .catch((err) => {
            toast("Oops!!, A problem occured", {
                description: "Try again later!",
            });
            setSending(false);
            form.reset();
            //alert(err);
        });
    }


  return (
    <div>
        <div className="w-full py-20 bg-gray-200 flex flex-col space-y-16 items-center">
            <div className="border-4 w-max p-5 border-black flex items-center justify-center rounded-sm">
                <h2 id="contact_me" className="text-lg md:text-3xl font-bold">CONTACT</h2>
            </div>

            <div className="text-center w-full px-10">
                <h4 className="text-md lg:text-2xl w-full leading-loose">Feel free to reach out for collaborations, inquiries, or a discussion on innovative projects—I'm just an email away from exploring new possibilities together.</h4>
            </div>

            <div className="flex items-center space-x-3">
                <hr className="h-1 w-10 border-2 rounded-md border-black"/>
                <h4 className="font-bold text-md">\\v//</h4>
                <hr className="h-1 w-10 border-2 rounded-md border-black"/>
            </div>

            <div className="w-full px-10 md:px-40 lg:px-80">
                {/* shadcn form component here */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center space-y-14">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="border-solid border-black border-l-4 border-b-4">
                                        <Input className="h-10 focus:outline-none bg-gray-200 border-none px-5 text-lg" type="text" id="name" placeholder="ENTER YOUR NAME" {...field}/>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="border-solid border-black border-l-4 border-b-4">
                                    
                                        <Input className="h-10 focus:outline-none bg-gray-200 border-none px-5 text-lg" type="email" id="email" placeholder="ENTER YOUR EMAIL" {...field}/>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="border-solid border-black border-l-4 border-b-4">
                                    
                                        <Input className="h-10 focus:outline-none bg-gray-200 border-none px-5 text-lg" type="tel" id="phone" placeholder="PHONE NUMBER" {...field}/>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="border-solid border-black border-l-4 border-b-4">
                                        <Textarea className="h-24 focus:outline-none bg-gray-200 border-none px-5 text-lg" placeholder="YOUR MESSAGE" {...field}/>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <div className="w-full items-center flex justify-center">
                            {sending ? (
                                <button disabled className="w-50 h-32 flex space-x-5 items-center self-center">
                                    <hr className="border border-black bg-black w-1 h-10"/>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    <p className="text-xl font-bold">Sending</p>
                                    <hr className="border border-black bg-black w-1 h-10" />
                                </button>
                            ) : (
                                <button className="w-50 h-32 flex space-x-5 items-center self-center" type="submit">
                                    <hr className="border border-black bg-black w-1 h-10"/>
                                    <p className="text-xl font-bold">SUMBIT</p>
                                    <hr className="border border-black bg-black w-1 h-10" />
                                </button>
                            )}
                            
                        </div>
                    </form>
                </Form>

            </div>

        </div>
    </div>
  )
}

export default ContactMe