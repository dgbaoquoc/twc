"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "./ui/textarea";

const contactSchema = z.object({
  firstName: z
    .string({
      message: "Please enter your first name",
    })
    .max(50, {
      message: "First name must be less than 50 characters",
    }),
  lastName: z
    .string({
      message: "Please enter your last name",
    })
    .max(50, {
      message: "Last name must be less than 50 characters",
    }),
  company: z.string({
    message: "Please enter your company name",
  }),
  title: z.string({
    message: "Please enter your title",
  }),
  email: z
    .string({
      message: "Please enter your email",
    })
    .email({
      message: "Please enter a valid email address",
    }),
  region: z.string({
    message: "Please enter your region",
  }),
  category: z.enum(["", "media", "marketing"]).default(""),
  message: z
    .string({
      message: "Please enter your message",
    })
    .max(500, {
      message: "Message must be less than 500 characters",
    }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      category: "",
    },
  });

  function onSubmit(data: z.infer<typeof contactSchema>) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-screen-lg grid gap-8 lg:gap-16 lg:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...field}
                  className="bg-transparent border-none uppercase placeholder:text-slate-800"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="Last Name"
                  {...field}
                  className="bg-transparent border-none uppercase placeholder:text-slate-800 focus-visible:ring-0 focus-visible:ring-offset-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="Company"
                  {...field}
                  className="bg-transparent border-none uppercase placeholder:text-slate-800 focus-visible:ring-0 focus-visible:ring-offset-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="Title"
                  {...field}
                  className="bg-transparent border-none uppercase placeholder:text-slate-800 focus-visible:ring-0 focus-visible:ring-offset-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="bg-transparent border-none uppercase placeholder:text-slate-800 focus-visible:ring-0 focus-visible:ring-offset-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="Region"
                  {...field}
                  className="bg-transparent border-none uppercase placeholder:text-slate-800 focus-visible:ring-0 focus-visible:ring-offset-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="col-span-2 border-b-2 border-b-slate-800">
              <FormControl>
                <select
                  className="w-full bg-transparent border-none uppercase placeholder:text-slate-800 focus-visible:ring-0 focus-visible:ring-offset-transparent focus:outline-none px-3 py-2"
                  onChange={field.onChange}
                  defaultValue={field.value}
                >
                  <option value="">
                    Choose the category that best describes your inquiry
                  </option>
                  <option value="media">Media Solution</option>
                  <option value="marketing">Marketing Solution</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2 border-b-2 border-b-slate-800">
              <FormControl>
                <Textarea
                  {...field}
                  rows={5}
                  placeholder="How can we help your brand?"
                  className="bg-transparent border-none uppercase placeholder:text-slate-800"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="ml-auto col-span-2 bg-transparent border-slate-800 border-2 rounded-3xl
        "
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
}
