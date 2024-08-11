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
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import axios from "@/lib/axios";
import { toast } from "@/components/ui/use-toast";
import { useAuthStore } from "@/lib/store/auth";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

function Login() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state: any) => state.setAuth);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await axios.post("/auth/login", data);
      const tokens = res.data.responseObject.tokens;
      const user = res.data.responseObject.user;

      localStorage.setItem("token", JSON.stringify(tokens));
      setAuth({ isAuthorized: true, user });
      navigate("/dashboard");
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
      <Card className="max-w-[650px] w-full">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Sign-in to access services</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="test@test.com" {...field} />
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
                      <Input placeholder="" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full p-4">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="justify-center p-4">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-[#0029FF]">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
