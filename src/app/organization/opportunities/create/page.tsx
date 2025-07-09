"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import type { Opportunity } from "@/data/opportunities"

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }),
  location: z.string().min(2, { message: "Location is required." }),
  category: z.enum(['Healthcare', 'Environment', 'Education', 'Animal Welfare', 'Arts & Culture'], {
    required_error: "You need to select a category.",
  }),
  photo: z.any().optional(),
})

const categories: { value: Opportunity['category']; label: string }[] = [
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Environment', label: 'Environment' },
    { value: 'Education', label: 'Education' },
    { value: 'Animal Welfare', label: 'Animal Welfare' },
    { value: 'Arts & Culture', label: 'Arts & Culture' },
];

export default function CreateOpportunityPage() {
  const { toast } = useToast()
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // In a real app, you would add the new opportunity to your database
    // and get back the new opportunity's ID.
    // For this prototype, we'll simulate this by redirecting to a pre-defined opportunity.
    const newOpportunityId = 8;
    toast({
      title: "Opportunity Created!",
      description: "Your new volunteer opportunity has been posted.",
    })
    router.push(`/opportunities/${newOpportunityId}`);
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg">
          <CardHeader>
             <Link href="/organization/dashboard" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4">
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
            </Link>
            <CardTitle className="text-3xl font-headline">Create a New Opportunity</CardTitle>
            <CardDescription>Fill out the form below to post a new volunteer role.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Opportunity Title</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Weekend Soup Kitchen Chef" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., San Francisco" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe the role, responsibilities, and impact..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="photo"
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>Opportunity Photo</FormLabel>
                      <FormControl>
                        <Input
                          {...fieldProps}
                          type="file"
                          accept="image/*"
                          onChange={(event) =>
                            onChange(event.target.files && event.target.files[0])
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Post Opportunity
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
