import Image from "next/image";

export default function Nav() {
    return (
        <div className="nav">
            <div className="left">
                <p>Follow us</p>
                <a href="https://www.facebook.com/venicefreestylelab/">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Ffacebook.png?alt=media&token=70ceef56-48de-4a8d-93fe-45dfe7b8641a" width="40" height="40" />
                </a>
                <a href="https://www.instagram.com/venice_freestyle/">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Finstagram.png?alt=media&token=7d3ae8b1-a5bf-4dae-8123-9317976a7f99" width="40" height="40" />
                </a>
                <a href="https://www.youtube.com/channel/UCY8VRN7zA_otXCbU3UoQueg">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Fyoutube.png?alt=media&token=04d36499-22f5-4de0-a735-6e493b966a9a" width="40" height="40" />
                </a>
                <a href="https://www.linkedin.com/company/freestyle-in-venice-srl/">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Flinkedin.png?alt=media&token=84da56b8-6ac1-464d-b31b-1a2fd3a16b85" width="40" height="40" />
                </a>
            </div>
            <div className="right">
                <p>Contact us</p>
                <a href="#">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Ftelegram.png?alt=media&token=b66d59a5-f17b-4607-a235-fc5bf790b0df" width="40" height="40" />
                </a>
                <a href="#">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Fmessenger.png?alt=media&token=a05689ca-4c0a-403a-bae6-0e72ff232ad3" width="40" height="40" />
                </a>
                <a href="#">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/buttons%2Fwebsite.png?alt=media&token=74048865-ead7-4138-8f7a-02023e992df4" width="40" height="40" />
                </a>
            </div>
        </div>
    );
}
