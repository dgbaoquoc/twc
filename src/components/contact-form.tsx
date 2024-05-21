"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const contactSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      username: "",
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
          name="username"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="What’s Your Name"
                  {...field}
                  className="bg-transparent border-none placeholder:text-slate-800"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="Your Email"
                  {...field}
                  className="bg-transparent border-none placeholder:text-slate-800 focus-visible:ring-0 focus-visible:ring-offset-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="col-span-2 border-b-2 border-b-slate-800">
              <FormControl>
                <Input
                  placeholder="Tell Us About Your Project"
                  {...field}
                  className="bg-transparent border-none placeholder:text-slate-800"
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
