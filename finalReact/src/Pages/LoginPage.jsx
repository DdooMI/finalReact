import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../zustand/auth";

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    
});

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    login(data, navigate);
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: "url('../public/ff.jpg')" }}
    >
      <div className="w-full max-w-md bg-[#6e5a46] p-8 text-center rounded-2xl border-4 border-white shadow-lg">
        <h2 className="text-white text-2xl font-bold mb-3 capitalize">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
            className="p-2 border-2 border-[#A67B5B] rounded-lg text-lg focus:outline-none bg-white"
          />
          <p className="text-red-500">{errors.email?.message}</p>

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="p-2 border-2 border-[#A67B5B] rounded-lg text-lg focus:outline-none bg-white"
          />
          <p className="text-red-500">{errors.password?.message}</p>

          <button className="w-3/4 mx-auto p-3 text-white bg-[#A67B5B] text-xl rounded-lg hover:bg-white hover:text-[#A67B5B] border-2 border-transparent hover:border-[#A67B5B] transition">
            Log In
          </button>

          <p className="text-white">Don&apos;t have an account? <NavLink to="/signup" className="text-[#dfb58e]">
            Sign Up
          </NavLink> </p>

          <h3 className="text-white text-lg font-semibold mt-4">Other sign-up options</h3>
          <div className="flex justify-center space-x-8 mt-2">
            <a
              href="#"
              title="Sign up with Google"
              className="px-5 py-3 border-2 border-white rounded-md hover:bg-[#A67B5B] text-red-500"
            >
              <i className="fa-brands fa-google"></i>
            </a>
            <a
              href="#"
              title="Sign up with Facebook"
              className="px-5 py-3 border-2 border-white rounded-md hover:bg-[#A67B5B] text-blue-500"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="#"
              title="Sign up with GitHub"
              className="px-5 py-3 border-2 border-white rounded-md hover:bg-[#A67B5B] text-black"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;