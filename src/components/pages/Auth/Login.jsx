import { InputWithLabel, CheckboxInput } from "@components/ui/Input";
import Button from "@components/ui/Button";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { loginUser } from "@api/auth";
import { toast } from "sonner";
import { Spinner } from "@global/Icons";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const schema = yup.object().shape({
    userName: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(6, "Password must be minimum of 6")
      .required("Password is required"),
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

  const onSubmit = async (data) => {
    console.log("FormData", data);
    await loginUser(data);
    reset();
    toast.success("Login Successfully");
  };
  return (
    <main className="absolute  md:static md:left-0 md:top-0 md:translate-x-0  z-30 w-full left-1/2 transform top-[45%] -translate-x-1/2  flex items-center justify-center  ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] bg-white md:bg-transparent p-4 md:rounded-none md:shadow-none rounded-2xl shadow-md md:sha space-y-2 md:min-w-[60%]"
      >
        <h1 className="text-center mb-4 text-[1.8rem] font-bold text-primary ">
          Login into your account
        </h1>
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
        <CheckboxInput
          onChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
          label="Remember me"
        />
        <div className="my-4">
          <Button
            type="submit"
            className="w-[95%] mx-auto py-2 justify-center flex "
          >
            {isSubmitting ? (
              <>
                <Spinner />
              </>
            ) : (
              "Login"
            )}
          </Button>
        </div>

        <p className="text-[.7rem] md:text-[.8rem] block mt-4">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-primary hover:text-secondary">
            Signup
          </Link>{" "}
        </p>
      </form>
    </main>
  );
};

export default Login;
