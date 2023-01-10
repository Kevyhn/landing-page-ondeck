import '../css/Footer.css';
import NetflixLogo from '../Assets/Netflix Logo.svg';
import ShopifyLogo from '../Assets/Shopify Logo.svg';
import SpotifyLogo from '../Assets/Spotify Logo.svg';
import WalmartLogo from '../Assets/Walmart Logo.svg';

export function Footer() {
	return (
		<footer className="footer">
			<p>Trusted by 3+ million people at companies like</p>
			<div className="logos-companies">
				<img src={NetflixLogo} alt="Netflix"/>
				<img src={ShopifyLogo} alt="Shopify"/>
				<img src={SpotifyLogo} alt="Spotify"/>
				<img src={WalmartLogo} alt="Walmart"/>
			</div>			
		</footer>
	);
}