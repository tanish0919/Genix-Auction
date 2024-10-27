import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import girl from "../assets/girl.png";


const Login = () => {
    

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your login API
      const response = await axios.post(
        "http://localhost:3000/user/login",
        formData
      );
      
      // Handle successful login, you can redirect or save auth data here
      console.log(response.data);

      // If login is successful, you can navigate using Link with a state or context
      window.location.href = "/"; // OR use useNavigate if not using Link-based navigation
    } catch (err) {
      if (err.response) {
        setError("Invalid email or password");
      } else if (err.request) {
        setError("Network error. Please try again.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center bg-white h-[100vh]">
      <div className="mx-auto flex w-full flex-col justify-center px-5 py-16 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">
        <Link to="/" className="mt-10 w-fit text-zinc-950 dark:text-white">
          <div className="flex w-fit items-center lg:pl-0 lg:pt-0 xl:pt-0">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              className="mr-3 h-[13px] w-[8px] text-zinc-950 dark:text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
            </svg>
            <p className="ml-0 text-sm text-zinc-950 dark:text-white">
              Back to the website
            </p>
          </div>
        </Link>

        <div className="my-auto mb-auto flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[50px] lg:max-w-[450px]">
          <p className="text-[32px] font-bold text-zinc-950 dark:text-white">
            Log In
          </p>
          <p className="mb-2.5 mt-2.5 font-normal text-zinc-950 dark:text-zinc-400">
            Enter your email and password to sign in!
          </p>
          {error && <p className="text-red-500 text-sm mb-2.5">{error}</p>}
          <div className="mt-8">
            <form onSubmit={handleSubmit} className="pb-2">
              <input type="hidden" name="provider" value="google" />
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full text-zinc-950 py-6 dark:text-white"
                type="submit"
              >
                <span className="mr-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                    enableBackground="new 0 0 48 48"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    {/* Other SVG paths for Google button */}
                  </svg>
                </span>
                <span>Google</span>
              </button>
            </form>
          </div>

          <div className="relative my-4">
            <div className="relative flex items-center py-1">
              <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
              <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} noValidate className="mb-4">
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <label
                    className="text-zinc-950 dark:text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label
                    className="text-zinc-950 mt-2 dark:text-white"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    placeholder="Password"
                    type="password"
                    autoComplete="current-password"
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </form>

            <p>
              <Link
                to="/signup"
                className="font-medium text-blue-400 hover:text-blue-500 dark:text-white text-sm"
              >
                Do not have an account? Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="h-[60vh] w-[40%] border border-red-500 mr-32 mt-20">
        <img src={girl} alt="logo" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Login;
