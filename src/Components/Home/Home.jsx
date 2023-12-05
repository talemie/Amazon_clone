import React from 'react'
import './home.css'
import Product from '../Product/Product';
function Home() {
    const [image1, image2, image3, image4, image5, image6] = [
			"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
			"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
			"https://m.media-amazon.com/images/I/71n5vk4vB-L._AC_UL480_FMwebp_QL65_.jpg",
			"https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL480_FMwebp_QL65_.jpg",
			"https://m.media-amazon.com/images/I/81MZ5D1wHpL._AC_UL480_QL65_.jpg",
			"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
		];
  return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id={1}
						title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
						image={image1}
						price={120}
						rating={5}
					/>
					<Product
						id={2}
						title="Brother Genuine Cartridge TN760 High Yield Black Toner,1 Pack"
						image={image2}
						price={89.99}
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id={3}
						title="Acer Aspire 5 A515-56-36UT, 15.6' Full HD Display, 11th Gen Intel Core i3-1115G4 Processor, 4GB DDR4, 128GB ..."
						image={image3}
						price={219.99}
						rating={2}
					/>
					<Product
						id={4}
						title="Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable ..."
						image={image4}
						price={59.99}
						rating={3}
					/>
					<Product
						id={5}
						title="Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1 Inch 3 Pack Tempered Glass"
						image={image5}
						price={29.99}
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product id={6} title="" image={image6} price={1119.99} rating={5} />
				</div>
			</div>
		</div>
	);
}

export default Home