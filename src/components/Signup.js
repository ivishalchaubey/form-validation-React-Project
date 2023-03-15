import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Locations from "./Locations";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
  });
  const [varified, setvarified] = useState(false);

  function onChange(value) {
    setvarified(true);
  }
  const setData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const onBlurFunction = () => {
    const { name, email, username, phone } = userData;
    // For Phone Validation
    let phoneElement = document.getElementById("phonelbl");
    if (isNaN(phone) || phone.length > 10 || phone.length < 10) {
      if (!phone) {
        phoneElement.classList.remove("sucess");
        phoneElement.classList.add("error");
        phoneElement.innerText = "*";
      } else {
        phoneElement.classList.remove("sucess");
        phoneElement.classList.add("error");
        phoneElement.innerText = "Invalid..";
      }
    } else {
      phoneElement.classList.remove("error");
      phoneElement.classList.add("sucess");
      phoneElement.innerText = "Confirmed..";
    }
    // For Name Validation
    let nameElement = document.getElementById("namelbl");
    if (/[^a-zA-Z" "/]/.test(name)) {
      nameElement.classList.remove("sucess");
      nameElement.classList.add("error");
      nameElement.innerText = "Invalid";
    } else {
      if (!name) {
        nameElement.classList.remove("sucess");
        nameElement.classList.add("error");
        document.getElementById("namelbl").innerText = "*";
      } else {
        nameElement.classList.remove("error");
        nameElement.classList.add("sucess");
        nameElement.innerText = "Confirmed..";
      }
    }

    // For Email Validation
    let emailElement = document.getElementById("emaillbl");
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      if (!email) {
        emailElement.classList.remove("sucess");
        emailElement.classList.add("error");
        emailElement.innerText = "*";
      } else {
        emailElement.classList.remove("sucess");
        emailElement.classList.add("error");
        emailElement.innerText = "Invalid..";
      }
    } else {
      emailElement.classList.remove("error");
      emailElement.classList.add("sucess");
      emailElement.innerText = "Confirmed..";
    }

    // For Username Validation

    let usernameElement = document.getElementById("usernamelbl");
    if (/[^a-zA-Z0-9\-/]/.test(username)) {
      usernameElement.innerText = "Invalid..";
      usernameElement.classList.remove("sucess");
      usernameElement.classList.add("error");
    } else {
      if (!username) {
        usernameElement.innerText = "*";
        usernameElement.classList.remove("sucess");
        usernameElement.classList.add("error");
      } else {
        usernameElement.innerText = "Confirmed..";
        usernameElement.classList.remove("error");
        usernameElement.classList.add("sucess");
      }
    }
  };
  const submitData = (e) => {
    e.preventDefault();
    const { name, email, username, phone } = userData;
    if (name && email && username && phone) {
      if (
        isNaN(phone) ||
        phone.length > 10 ||
        (phone.length < 10 &&
          /[^a-zA-Z" "/]/.test(name) &&
          /[^a-zA-Z0-9\-/]/.test(username) &&
          !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email
          ))
      ) {
        alert("Invalid Data");
      } else {
        alert("Login Successfull..");
      }
    } else {
      alert("All Fields are required..");
    }
  };
  return (
    <div className="signup-div">
      <div className="signup-inner-div">
        <img
          src="https://www.shutterstock.com/image-vector/new-user-online-registration-sign-260nw-1982734163.jpg"
          alt="Signup Logo"
        />
        <form
          action="POST"
          className="signup-form"
          onSubmit={(e) => submitData(e)}
        >
          {/* Name Input Field */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Full Name.."
            onChange={(e) => setData(e)}
            onBlur={() => onBlurFunction()}
          />
          <label htmlFor="name" id="namelbl"></label>
          {/* Email Input Field..*/}
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email Address"
            onChange={(e) => setData(e)}
            onBlur={() => onBlurFunction()}
          />
          <label htmlFor="email" id="emaillbl"></label>
          {/* Username Input Field */}
          <input
            type="text"
            name="username"
            placeholder="Enter Your Username"
            onChange={(e) => setData(e)}
            onBlur={() => onBlurFunction()}
          />
          <label htmlFor="username" id="usernamelbl"></label>
          {/* Phone Input Field */}
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter Your Phone Number"
            onChange={(e) => setData(e)}
            onBlur={() => onBlurFunction()}
          />
          <label
            htmlFor="phone"
            id="phonelbl"
            style={{ marginBottom: "12px" }}
          ></label>
          <Locations />
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
          <button type="submit" disabled={!varified}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
