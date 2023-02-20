import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://localhost:8080/api/user";

export const Signup = () => {
  const navigate = useNavigate();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const signupHandler = (event) => {
    event.preventDefault();

    const inputName = nameInputRef.current.value;
    const inputEmail = emailInputRef.current.value;
    const inputPassword = passwordInputRef.current.value;

    const userData = {
      name: inputName,
      email: inputEmail,
      password: inputPassword,
    };

    if (userData.name == '' || userData.email == '' || userData.password == '') {
      // do nothing
      return;
    } else {
      console.log(userData);
      signupData(userData);
    }
  };

  async function signupData(userData) {
    await axios.post(`${baseUrl}/adduser`, userData).then(() => navigate("/"));
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white sm:bg-[#BCB4F9]">
      <div className="flex h-5/6 w-full flex-col justify-center rounded-xl bg-white sm:w-[640px]">
        <header className="mb-5 flex justify-center sm:mb-10">
          <h1 className="w-5/6 text-center text-[32px] font-bold text-black sm:w-3/5">
            Sign Up
          </h1>
        </header>
        <form className="flex flex-col items-center gap-5" onSubmit={signupHandler}>
          <div className="w-5/6 sm:w-3/5">
            <label htmlFor="name" className="font-medium text-black">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 w-full rounded-[9999px] border-[2px] border-slate-500"
              placeholder="Name"
              ref={nameInputRef}
            />
          </div>

          <div className="w-5/6 sm:w-3/5">
            <label htmlFor="email" className="font-medium text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full rounded-[9999px] border-[2px] border-slate-500"
              placeholder="example@gmail.com"
              ref={emailInputRef}
            />
          </div>

          <div className="w-5/6 sm:w-3/5">
            <label htmlFor="password" className="font-medium text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 w-full rounded-[9999px] border-[2px] border-slate-500"
              placeholder="Password"
              ref={passwordInputRef}
            />
          </div>

          <div className="w-5/6 sm:w-3/5">
            <button
              type="submit"
              className="h-[42px] w-full rounded-[9999px] border-[2px] border-[#4E38D4] bg-[#4E38D4] text-base font-semibold text-white hover:border-[2px] hover:border-[#12008a]"
            >
              Sign Up
            </button>
          </div>
        </form>
        <footer className="mt-10 flex justify-center">
          <span className="w-5/6 text-xs font-light text-slate-600 sm:w-3/5">
            &copy;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mdasifmunshe"
              className="underline hover:text-[#4E38D4]"
            >
              Md Asif Munshe.
            </a>{" "}
            All rights reserved.
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
