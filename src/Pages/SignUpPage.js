import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../Styles/SignUpPage.css";
import shieldIcon from "../Images/shield-icon.png"; // Ensure this path matches the actual location of the image

function SignUpPage() {
  const [firstName, setFirstName] = useState(""); // Add this
  const [lastName, setLastName] = useState("");   // Add this
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation logic
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      setError("Please fill in all fields required.");
      return;
    }

    // Simulate successful login
    setError(""); // Clear any previous errors
    navigate("/welcome"); // Navigate to the Welcome page
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-logo-container">
          <img
            src={shieldIcon}
            alt="Blue House Tech Recharge"
            className="signup-logo"
          />
          <h2 className="signup-title">
            <span className="signup-title-line">Blue House Tech</span>
            <span className="signup-title-line">Recharge</span>
          </h2>
        </div>
        <p className="signup-subtitle">
          <b>Referred by System</b>
        </p>
        <h1 className="signup-heading">SIGN UP</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="FirstName"
            className="signup-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="LastName"
            className="signup-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="signup-input"
            // You may want to add a state for mobile number as well
          />
          <input
            type="email"
            placeholder="Email"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="signin-error">{error}</p>}
          <label className="signin-remember">
            <input type="checkbox" className="signup-checkbox" /> Remember Me
          </label>
          <button type="submit" className="signup-button">
            Sign up
          </button>
          <p className="signin-footer">
            Already have an account?{" "}
            <Link to="/" className="welcome-link" style={{ color: "#13866b" }}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;




//  import signup from '../assets/signup.png';import React from "react";
// import { useNavigate } from "react-router-dom";
// import onboardingPage from "../images/onboarding_page.jpg";
// import iconImage from "../images/icon.png";
// import "./onboarding_page.css";

// function OnboardingPage() {
//   const navigate = useNavigate();

//   const handleNext = () => {
//     navigate('/signin');
//   };

//   return (
//     <div
//       className="onboarding-container"
//       style={{
//         width: "100vw",
//         minHeight: "100vh",
//         backgroundImage: `url(${onboardingPage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         display: "flex",
//         marginBottom: "100px",
//         flexDirection: "column",
//         alignItems: "center",
//         position: "relative",
//         overflowY: "auto",
        
//         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//         margin: "0 auto",
//         padding: "0 2vw",
//       }}
//     >
//       {/* Move welcome text to the very top */}
//       <div
//         className="onboarding-text"
//         style={{
//           textAlign: "center",
//           marginBottom: "20vh", // Reduced margin to move it up
//           color: "#fff",
//           width: "100%",
//           maxWidth: "400px",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
//             fontWeight: "bold",

//             margin: "0 0 1vh 0",
//           }}
//         >
//           Welcome to swap & sell
//         </h1>
//         <p
//           style={{
//             fontSize: "clamp(1rem, 3vw, 1.2rem)",
//             margin: "2vh 0 0",
//             opacity: "0.9",
//           }}
//         >
//           The best app to swap & sell your unused product
//         </p>
//       </div>

//       {/* Icon section */}
//       <div
//         className="onboarding-icon"
//         style={{
//           marginTop: "5vh",
//           position: "relative",
//           width: "25vw",
//           height: "25vw",
//           minWidth: "100px",
//           minHeight: "100px",
//           marginBottom: "10vh",
//           maxWidth: "150px",
//           maxHeight: "150px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div
//           className="ripple-1"
//           style={{
//             position: "absolute",
//              marginBottom: "20vh",
//             width: "150%",
//             height: "150%",
//             borderRadius: "50%",
//             backgroundColor: "rgba(255, 255, 255, 0.1)",
//             border: "2px solid rgba(255, 255, 255, 0.3)",
//             animation: "ripple 3s infinite",
//           }}
//         />
//         <div
//           className="ripple-2"
//           style={{
//             position: "absolute",
//             width: "200%",
//              marginBottom: "20vh",
//             height: "200%",
//             borderRadius: "50%",
//             border: "2px solid rgba(255, 255, 255, 0.2)",
//             animation: "ripple 3s infinite 0.5s",
//           }}
//         />
//         <div
//           className="ripple-3"
//           style={{
//             position: "absolute",
//             width: "250%",
//             height: "250%",
//             borderRadius: "50%",
//              marginBottom: "20vh",
//             border: "2px solid rgba(255, 255, 255, 0.1)",
//             animation: "ripple 3s infinite 1s",
//           }}
//         />
//         <img
//           src={iconImage}
//           alt="Swap & Sell Icon"
//           style={{
//             width: "60%",
//             height: "60%",
//             maxWidth: "60px",
//             maxHeight: "60px",
//              marginBottom: "20vh",
//             objectFit: "contain",
//           }}
//           className="onboarding-icon-img"
//         />
//       </div>

//       {/* Button at the bottom */}
//       <button
//         onClick={handleNext}
//         className="onboarding-button"
//         style={{
//           position: "fixed",
//           bottom: "5vh",
//            marginBottom: "5%",
//           left: "50%",
//           transform: "translateX(-50%)",
//           background:
//             "linear-gradient(90deg, #1E90FF 0%, #1E90FF 80%, #191970 80%, #191970 100%)",
//           color: "#fff",
//           padding: "1.5vh 5vw",
//           borderRadius: "25px",
//           textDecoration: "none",
//           fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
//           fontWeight: "bold",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           width: "60vw",
//           maxWidth: "220px",
//           boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
//           transition: "background-color 0.3s",
//           overflow: "hidden",
//           border: "none",
//           marginTop: "10%",
//           cursor: "pointer",
//         }}
//       >
//         <span>WELCOME</span>
//         <span
//           className="onboarding-button-arrow"
//           style={{
//             backgroundColor: "#191970",
//             width: "20%",
//             height: "100%",
//             display: "flex",
//             marginTop: "",
//             alignItems: "center",
//             justifyContent: "center",
//             borderTopRightRadius: "25px",
//             borderBottomRightRadius: "25px",
//           }}
//         >
//           →
//         </span>
//       </button>
//     </div>
//   );
// }

// export default OnboardingPage;
