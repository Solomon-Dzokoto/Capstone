import React from "react";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
	return (
		<main className="grid relative md:grid-cols-2 min-h-dvh">
			<div
				style={{
					background: "url(/assets/profile.jpeg)",
					backgroundPosition: "center center",
					backgroundSize: "cover",
				}}
				className="min-h-dvh md:overflow-hidden absolute inset-0 md:relative "
			>
				<div className="inset-0 absolute z-10 bg-primary/70" />
				<div className=" absolute size-[10rem] z-10 border-[2rem] rounded-full -right-16 -bottom-16 bg-transparent" />
				<div className=" absolute size-[10rem] z-10 border-[2rem] rounded-full -left-16 -top-16 bg-transparent" />
				<div className="relative p-4 z-20 flex flex-col md:text-start text-center md:justify-center h-full">
					<h2 className="text-[1.8rem]  font-semibold text-white ">
						Welcome to{" "}
					</h2>
					<div className="flex items-center">
						<img
							className="w-[10rem] "
							loading="lazy"
							src="/assets/logo.png"
							alt="logo"
						/>
						<h1 className="text-[2.5rem] text-white  font-extrabold ">
							Afrima Hr{" "}
						</h1>
					</div>
				</div>
			</div>
			<Outlet />
		</main>
	);
};

export default AuthLayout;
