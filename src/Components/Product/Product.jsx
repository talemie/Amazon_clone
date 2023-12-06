import React from "react";
import "./product.css";
import { useStateValue } from "../StateProvider/StateProvider";
function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue()
	console.log('This is the basket',basket);
	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				price: price,
				image:image,
				rating:rating
			}
	})
}	
	return (
		<div key={id} className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((item,i) => (
							<p key={i}>💛</p>
						))}
				</div>
			</div>
			<div>
				<img src={image} alt="" />
			</div>
			<div>
				<button onClick={addToBasket}>Add to Cart</button>
			</div>
		</div>
	);
}

export default Product;
