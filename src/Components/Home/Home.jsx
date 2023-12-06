import React from 'react'
import './home.css'
import Product from '../Product/Product';
function Home() {
	// product images destructured here
    const [image1, image2, image3, image4, image5, image6] = [
			"https://m.media-amazon.com/images/I/61S+R5SLmrL._AC_SY200_.jpg",
			"https://m.media-amazon.com/images/I/51IFiSD+kCL._AC_SY200_.jpg",
			"https://m.media-amazon.com/images/I/71DDA+p+QqL._AC_UY218_.jpg",
			"https://m.media-amazon.com/images/I/51XLf5D0neL._AC_UY218_.jpg",
			"https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg",
			"https://m.media-amazon.com/images/I/81ds-A08OxL._AC_UL320_.jpg",
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
						title="HP DeskJet 2755e Wireless Color inkjet-printer, Print, scan, copy, Easy setup, Mobile printing, Best-for home, Instant Ink with HP+,white"
						image={image1}
						price={64.99}
						rating={5}
					/>
					<Product
						id={2}
						title="Apple iPad Air 10.5-inch (3rd Gen) Tablet A2152 (Wi-Fi Only) - 64GB / Space Gray (Renewed)"
						image={image2}
						price={89.99}
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id={3}
						title="Apple Watch Series 6 (GPS, 44mm) - Blue Aluminum Case with Deep Navy Sport Band (Renewed)"
						image={image3}
						price={219.99}
						rating={2}
					/>
					<Product
						id={4}
						title="[Apple MFi Certified] AirPods Pro Wireless Earbuds Bluetooth in Ear Light-Weight Headphones Built-in Microphone, with Touch Control, Noise Cancelling, Charging case"
						image={image4}
						price={199.99}
						rating={3}
					/>
					<Product
						id={5}
						title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs (Blue)"
						image={image5}
						price={49.99}
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id={6}
						title="SUPERJARE TV Stand for 55 Inch TV, Entertainment Center with Adjustable Shelf, 2 Cabinets, TV Console Table, Media Console, Solid Wood Feet, Cord Holes, for Living Room, Bedroom, Rustic Brown"
						image={image6}
						price={1119.99}
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home