import React from "react";
import "./product.css";
function Product({id,title,image,price,rating}) {
	return (
		<div key={id} className="product">
			<div className="produc__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p>💛</p>
						))}
				</div>
			</div>
			<div>
				<img src={image} alt="" />
			</div>
			<div>
				<button>Add to Cart</button>
			</div>
		</div>
	);
}

export default Product;
