import Image from 'next/image';

export default function SocialButton({ url }) {
    let img;

    if (url.includes('facebook.com')) {
        img = 'https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Ffacebook.png?alt=media&token=70ceef56-48de-4a8d-93fe-45dfe7b8641a';
    } else if (url.includes('instagram.com')) {
        img = 'https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Finstagram.png?alt=media&token=7d3ae8b1-a5bf-4dae-8123-9317976a7f99';
    } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
        img = 'https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Fyoutube.png?alt=media&token=04d36499-22f5-4de0-a735-6e493b966a9a';
    } else {
        img = 'https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Fwebsite.png?alt=media&token=74048865-ead7-4138-8f7a-02023e992df4';
    }

    return <Image src={img} width={20} height={20} className="social-button" />;
}