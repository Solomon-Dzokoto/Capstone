import { InputWithLabel, CheckboxInput } from "@components/ui/Input";
import Button from "@components/ui/Button";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { registerUser } from "@api/auth";
import { toast } from "sonner";
import { Spinner } from "@/global/Icons";
const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);

  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    userName: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be minimum of 6")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const signupUser = async (data) => {
    console.log("FormData", data);
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    await registerUser(data);
    reset();
    toast.success("User Registered Successfully");
  };
  return (
    <main className="absolute  md:static md:left-0 md:top-0 md:translate-x-0  z-30 w-full left-1/2 transform top-[45%] -translate-x-1/2  flex items-center justify-center  ">
      <form
        onSubmit={handleSubmit(signupUser)}
        className="w-[90%] bg-white md:bg-transparent p-4 md:rounded-none md:shadow-none rounded-2xl shadow-md md:sha space-y-2 md:min-w-[60%]"
      >
        <h1 className="text-center mb-4 text-[1.4rem] md:text-[1.8rem] font-bold text-primary ">
          Create an Account
        </h1>
        <InputWithLabel
          placeholder="eg. Kofi Yesu"
          label="Full Name"
          {...register("fullName")}
          name="fullName"
          type="text"
        />
        {errors && (
          <p className="text-danger text-[.7rem] ">
            {errors?.fullName?.message}
          </p>
        )}
        <InputWithLabel
          placeholder="eg. MaaHMooD"
          label="UserName"
          {...register("userName")}
          name="userName"
          type="text"
        />
        {errors && (
          <p className="text-danger text-[.7rem]">
            {errors?.userName?.message}
          </p>
        )}
        <InputWithLabel
          placeholder="eg. example.gmail.com"
          label="Email"
          name="email"
          {...register("email")}
          type="email"
        />
        {errors && (
          <p className="text-danger text-[.7rem]">{errors?.email?.message}</p>
        )}
        <InputWithLabel
          placeholder="Password"
          label="Password"
          {...register("password")}
          name="password"
          type="password"
        />
        {errors && (
          <p className="text-danger text-[.7rem]">
            {errors?.password?.message}
          </p>
        )}
        <InputWithLabel
          placeholder="Password"
          label="Confirm Password"
          {...register("confirmPassword")}
          name="confirmPassword"
          type="password"
        />
        {errors && (
          <p className="text-danger text-[.7rem]">
            {errors?.confirmPassword?.message}
          </p>
        )}
        <CheckboxInput
          onChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
          label="Remember me"
        />
        <Button
          type="submit"
          className="w-[95%] text-[.7rem] md:text-[1rem] mx-auto py-2 justify-center flex "
        >
          {isSubmitting ? (
            <>
              <Spinner />
            </>
          ) : (
            "Sign up"
          )}
        </Button>
        <p className="text-[.6rem] md:text-[.8rem] block mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-primary hover:text-secondary">
            Login
          </Link>{" "}
        </p>
      </form>
    </main>
  );
};

export default Signup;
