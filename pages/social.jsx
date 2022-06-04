import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';

export default function Social() {
    return (
        <div className="social">
            <Head>
                <title>VFL | Social</title>
            </Head>
            <div className="social-item instagram">
                <a href="https://www.instagram.com/venice_freestyle/"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <div className="social-item youtube">
                <a href="https://www.youtube.com/c/VeniceFreestyleLab"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
            <div className="social-item facebook">
                <a href="https://www.facebook.com/venicefreestylelab/"><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
        </div>
    );
}
