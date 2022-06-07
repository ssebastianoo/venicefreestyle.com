import Image from 'next/image';

export default function SocialButton({ url }) {
    let img;

    if (url.includes('facebook.com')) {
        img = 'https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Ffacebook.png?alt=media&token=5e5957e7-a8c6-4bec-a28a-84a4e7c24d93';
    } else if (url.includes('instagram.com')) {
        img = 'https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Finstagram.png?alt=media&token=f427896e-898e-4667-b0ac-70cc3a2721f9';
    } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
        img = 'https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Fyoutube.png?alt=media&token=a356d6c7-54f9-444a-871f-5ae081da697e';
    } else {
        img = 'https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Fwebsite.png?alt=media&token=f5b44498-c195-4f7d-835e-f26304f6d1ee';
    }

    return <Image src={img} width={20} height={20} className="social-button" />;
}