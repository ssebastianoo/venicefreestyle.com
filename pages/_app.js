import "../styles/style.scss";
import Nav from "../components/Nav";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Nav />
            <Header />
            <Component {...pageProps} />
        </>
    );
}
