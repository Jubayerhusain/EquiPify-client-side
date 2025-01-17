import React, { useContext, useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS animation styles
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import PageTitle from "../../components/PageTitle/PageTitle";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { createUser, handleGoogleAuth } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validatePassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();
    const photo = event.target.photo.value.trim();

    // POST: fetch the user db collection url and post the user information
    const userData = { name, photo, email };
    fetch("https://equipify-server-side.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
      })
      .catch((error) => {
        // console.log('ERROR', error.message);
      });

    let tempErrors = {};

    if (!name) {
      tempErrors.name = "Name is required!";
    }

    if (!validateEmail(email)) {
      tempErrors.email = "Invalid email address!";
    }

    if (!validatePassword(password)) {
      tempErrors.password =
        "Password must be at least 6 characters long and include at least one uppercase letter and one number!";
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setErrors({}); // Clear errors if all validations pass

    createUser(email, password)
      .then((res) => {
        toast.success("Successfully Signed Up!");
        navigate(`/`);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            toast.error("This email is already in use!");
            break;
          default:
            toast.error("Something went wrong. Try again!");
        }
        console.error("ERROR:", err.message);
      });
  };
  const handleGoogleSignUp = () => {
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
      <PageTitle title={"Sign Up"}></PageTitle>
      <div
        className="min-h-screen flex items-center justify-center "
        data-aos="fade-up"
      >
        <div
          className="flex flex-col lg:flex-row items-center  shadow-2xl rounded-xl max-w-5xl overflow-hidden"
          data-aos="zoom-in"
        >
          {/* Left Side: Form */}
          <div className="lg:w-1/2 w-full p-10">
            <form
              onSubmit={handleRegister}
              className="space-y-6"
              data-aos="fade-right"
            >
              <h1 className="text-3xl font-bold ">
                Welcome to Equipify!
              </h1>
              <p className="text-gray-300 text-sm">
                Start managing your sports equipment effortlessly.
              </p>

              {/* Name Field */}
              <div className="space-y-2">
                <label className="">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Photo URL Field */}
              <div className="space-y-2">
                <label className="">Profile Picture</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter the URL of your profile picture"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2 relative">
                <label className="">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-8 text-blue-500 hover:text-blue-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                  Create Account
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google Sign-Up */}
            <button
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition-all"
            >
              <FcGoogle className="mr-3" /> Sign Up with Google
            </button>

            {/* Redirect to Sign In */}
            <p className="text-center mt-6 text-gray-600">
              Already have an account?{" "}
              <Link to={`/signIn`} className="text-blue-500 font-semibold">
                Sign In
              </Link>
            </p>
          </div>

          {/* Right Side: Information Section */}
          <div className="lg:w-1/2 w-full p-10 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
            <h2 className="text-4xl font-bold mb-4">Join Equipify Today!</h2>
            <p className="text-lg mb-6">
              Manage and share your sports equipment effortlessly. Start now
              with Equipify and gear up for success!
            </p>
            <p className="text-sm text-green-200">
              Sign up now and organize your sports essentials in style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
