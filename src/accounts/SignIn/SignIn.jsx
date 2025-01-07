import React, { useContext, useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import PageTitle from "../../components/PageTitle/PageTitle";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, handleGoogleAuth, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const validatePassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password);

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    if (!email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        "Password must be at least 6 characters long and include one uppercase, one lowercase, one digit, and one special character."
      );
      return;
    }

    signInUser(email, password)
      .then(() => {
        // console.log("Successfully Signed In!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        if (
          err.code === "auth/wrong-password" ||
          err.code === "auth/user-not-found"
        ) {
          toast.error("Invalid email or password!");
        } else {
          toast.error("Something went wrong. Please try again!");
        }
        console.error("ERROR:", err.message);
      });
  };

  const handleGoogleSignIn = () => {
    handleGoogleAuth()
      .then((result) => {
        const { displayName, email, photoURL } = result.user;

        // User data object
        const userData = {
          name: displayName,
          email: email,
          photo: photoURL,
        };

        // Post user data to the database
        fetch("https://equipify-server-side.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("User added to database:", data);
            // navigate(`/`);
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => {
            toast.error("Failed to add user to database:", error.message);
          });
      })
      .catch((error) => {
        toast.error("Google Sign-In failed:", error.message);
      });
  };

  return (
    <div>
      <PageTitle title={"Sign In"}></PageTitle>
      <div className="min-h-screen flex items-center justify-center ">
        <div
          className="flex flex-col lg:flex-row items-center shadow-2xl rounded-xl max-w-5xl overflow-hidden"
          data-aos="fade-up"
        >
          {/* Left Side: Info */}
          <div
            className="lg:w-1/2 w-full p-10 flex flex-col items-center justify-center"
            data-aos="zoom-in"
          >
            <h2 className="text-4xl font-bold mb-4 text-left">Welcome Back!</h2>
            <p className="text-lg mb-6 text-start">
              Sign in to Equipify and start managing your sports gear
              efficiently. If you don’t have an account, sign up today!
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2 w-full p-10">
            <form
              onSubmit={handleSignIn}
              className="space-y-6"
              data-aos="fade-left"
            >
              <h1 className="text-3xl font-bold ">Sign In</h1>
              <p className="text-gray-500 text-sm">
                Enter your credentials to access your account.
              </p>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2 relative">
                <label className="">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-8 text-blue-500 hover:text-blue-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google Sign In */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition-all"
            >
              <FcGoogle className="mr-3" /> Sign In with Google
            </button>

            {/* Redirect to Sign Up */}
            <p className="text-center mt-6 text-gray-600">
              Don't have an account?{" "}
              <Link to={`/signUp`} className="text-blue-500 font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
