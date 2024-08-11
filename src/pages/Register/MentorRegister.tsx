import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "@/lib/axios";

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  acceptTerms: z.literal(true),
  role: z.enum(["user", "mentor"]),
  careerField: z.string().trim(),
  yearOfExperience: z.number(),
  location: z.string().optional(),
  linkedInProfile: z.string().url(),
  portfolioLink: z.string().url(),
});

function MentorRegister() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      careerField: "",
      yearOfExperience: 0,
      location: "",
      linkedInProfile: "",
      portfolioLink: "",
      acceptTerms: true,
      role: "mentor",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await axios.post("/auth/register", data);
      toast({ description: "Mentor account created successfully" });
      navigate("/login");
    } catch (err: any) {
      if (err.response && err.response.data) {
        const error = err.response.data.error;
        toast({ description: error });
      } else {
        toast({ description: "An unexpected error occurred" });
      }
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[#E7ECFF]">
      <Card className="w-[650px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Create a new account, {"  "}
            {form.getValues().role === "user" ? (
              <span>
                Sign up as a{" "}
                <Link
                  to="/register?role=mentor"
                  className="text-[#0029FF] cursor-pointer"
                >
                  Mentor
                </Link>
              </span>
            ) : (
              <span>
                Sign up as a{" "}
                <Link
                  to="/register?role=user"
                  className="text-[#0029FF] cursor-pointer"
                >
                  User
                </Link>
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="careerField"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Career Field</FormLabel>
                    <FormControl>
                      <Input placeholder="Career Field" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearOfExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year of Experience</FormLabel>
                    <FormControl>
                      <Input placeholder="0" type="number" {...field} />
                    </FormControl>
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
                      <Input placeholder="location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="linkedInProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn Profile</FormLabel>
                    <FormControl>
                      <Input placeholder="LinkedIn Profile" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="portfolioLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio Link</FormLabel>
                    <FormControl>
                      <Input placeholder="Portfolio Link" {...field} />
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
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      I accept{" "}
                      <Link to="/privacy-policy" className="underline">
                        Privary Policy
                      </Link>{" "}
                      and{" "}
                      <Link to="/terms" className="underline">
                        Terms
                      </Link>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full p-4">
                Sign up
              </Button>
            </form>
          </Form>
          <CardFooter className="justify-center p-4">
            <p>
              Have an account?{" "}
              <Link to="/login" className="text-[#0029FF]">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
}

export default MentorRegister;
