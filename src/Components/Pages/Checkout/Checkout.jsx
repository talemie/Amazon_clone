import React from "react";
import "./checkout.css";
function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
				/>
				<h3>Hello</h3>
				<h2 className="checkout__title">Your Shopping Basket</h2>
			</div>
			<div className="checkout__right">
				<h1>Sub total</h1>
			</div>
		</div>
	);
}

export default Checkout;
