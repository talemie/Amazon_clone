import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Components/Pages/Checkout/Checkout";

function App() {

	return (
		<>
			<Header />
			
			<Routes>
				<Route path="checkout" element={<Checkout />} />
				<Route path="/" element={<Home />}/>
			</Routes>
		</>
	);
}

export default App;
