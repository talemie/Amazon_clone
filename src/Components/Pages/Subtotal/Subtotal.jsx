import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
	return (
		<div>
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal(0 items):<strong>0</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" name="" id="" />
							This order contains a gift
						</small>
					</div>
				)}
				descimalScale={2}
				value={0}
				displayType={"text"}
				thousandSeparatot={true}
				prefix={"$"}
			/>
		</div>
	);
}

export default Subtotal;
