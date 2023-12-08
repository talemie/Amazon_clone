import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Login from "./Components/Pages/Login/Login";

function App() {
	return (
		<>
			<Routes>
				<Route exact path={"/login"} element={<Login />} />
				<Route exact path={"/checkout/login"} element={<Login />} />
				<Route
					path="checkout"
					element={
						<>
							<Header />
							<Checkout />
						</>
					}
				/>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Home />
						</>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
