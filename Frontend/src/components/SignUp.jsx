import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import girl from "../assets/girl.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // New state to track successful signup

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        formData
      );
      // If successful, set success to true
      console.log(response.data);
      setSuccess(true);
    } catch (err) {
      setError("Error during sign up. Please try again.");
      console.error(err);
    }
  };

  // Redirect after successful signup using Link
  if (success) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Sign Up Successful!</h2>
        <Link
          to="/login"
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center items-center bg-white h-[100vh]">
        <div className="mx-auto flex w-full flex-col justify-center px-5 py-16 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">
          <Link to={"/"} className="mt-10 w-fit text-zinc-950 dark:text-white">
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
              Sign Up
            </p>
            <p className="mb-2.5 mt-2.5 font-normal text-zinc-950 dark:text-zinc-400">
              Enter your email and password to sign up!
            </p>
            <div className="mt-8">
              <form className="pb-2" onSubmit={handleSubmit}>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full text-zinc-950 py-6 dark:text-white"
                  type="submit"
                >
                  <span className="mr-2">
                    {/* SVG content omitted for brevity */}
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
              <form noValidate="" className="mb-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <label
                      className="text-zinc-950 dark:text-white"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                      placeholder="Name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
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
                    Sign Up
                  </button>
                </div>
              </form>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <p>
                <Link
                  to="/login"
                  className="font-medium text-blue-400 hover:text-blue-500 dark:text-white text-sm"
                >
                  Already have an account? Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="h-[60vh] w-[40%] border border-red-500 mr-32 mt-20 ">
          <img src={girl} alt="logo" className="h-full w-full " />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
