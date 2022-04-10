import Navbar from '../components/Navbar';
import { GlobalStyles } from '../styles/Theme';
import './_app.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
