import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import z from "zod";
import { useAuth } from "../zustand/auth";

const schema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email(),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .max(15, "Password must not be more than 15 characters long"),
    confirmPassword: z.string(),
    role: z.enum(["designer", "beginner"], {
      required_error: "Please select a role",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signUp(data, navigate);
    console.log(data);
  }

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: "url('../public/ff.jpg')" }}
    >
      <div className="w-full max-w-md bg-[#6e5a46] p-8 text-center rounded-2xl border-4 border-white shadow-lg">
        <h2 className="text-white text-2xl font-bold mb-3 capitalize">Create an account</h2>
        <p className="text-white text-lg font-semibold mb-5">Create an account to enjoy the services for free</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2">
          <input type="text" placeholder="Full Name" {...register("username")} className="p-2 border-2 bg-white border-[#A67B5B] rounded-lg text-lg focus:outline-none" />
          <p className="text-red-500 ">{errors.username?.message}</p>

          <input type="email" placeholder="Email Address" {...register("email")} className="p-2 border-2 bg-white border-[#A67B5B] rounded-lg text-lg focus:outline-none" />
          <p className="text-red-500">{errors.email?.message}</p>

          <input type="password" placeholder="Password" {...register("password")} className="p-2 border-2 bg-white border-[#A67B5B] rounded-lg text-lg focus:outline-none" />
          <p className="text-red-500">{errors.password?.message}</p>

          <input type="password" placeholder="Confirm your password" {...register("confirmPassword")} className="p-2 bg-white border-2 border-[#A67B5B] rounded-lg text-lg focus:outline-none" />
          <p className="text-red-500">{errors.confirmPassword?.message}</p>

          <p className="text-white text-lg font-semibold">Choose your role</p>
          <div className="flex justify-evenly p-4 border-2 border-white rounded-lg">
            <div>
              <input
                type="radio"
                id="rad1"
                value="designer"
                {...register("role")}
                className="hidden peer"
              />
              <label
                htmlFor="rad1"
                className="cursor-pointer text-white font-bold text-lg px-4 py-2 rounded-md border-2 border-white peer-checked:bg-[#A67B5B] peer-checked:text-white"
              >
                Designer
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="rad2"
                value="customer"
                {...register("role")}
                className="hidden peer"
              />
              <label
                htmlFor="rad2"
                className="cursor-pointer text-white font-bold text-lg px-4 py-2 rounded-md border-2 border-white peer-checked:bg-[#A67B5B] peer-checked:text-white"
              >
                Beginner
              </label>
            </div>
          </div>
          <button className="w-3/4 mx-auto p-3 text-white bg-[#A67B5B] text-xl rounded-lg hover:bg-white hover:text-[#A67B5B] border-2 border-transparent hover:border-[#A67B5B] transition">Create Account</button>

          <p className="text-white">Already have an account? <NavLink to="/login" className="text-[#dfb58e]">
            Log In
          </NavLink> </p>

          <h3 className="text-white text-lg font-semibold mt-4">Other sign-up options</h3>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="#" title="Sign up with Google" className="px-6 py-2 border-2 hover:bg-[#A67B5B] border-white rounded-md text-red-500"><i className="fa-brands fa-google"></i></a>
            <a href="#" title="Sign up with Facebook" className="px-6 py-2 border-2 hover:bg-[#A67B5B] border-white rounded-md text-blue-500"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" title="Sign up with GitHub" className="px-6 py-2 border-2 hover:bg-[#A67B5B] border-white rounded-md text-black"><i className="fa-brands fa-github"></i></a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;