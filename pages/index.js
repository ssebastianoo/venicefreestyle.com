import Header from "../components/Header";
import Grid from "../components/Grid";
import Head from "next/head";

export default function Home() {
    const items = [
        {
            title: "Urban Bootcamp by Tau Marin",
            content:
                "Partner: Tau Marin\n\nTag: #bootcamp #Socialnetwork #videocampaign #creativecontest #telegramchat",
            background:
                "https://indexmedical.it/wp-content/uploads/2015/05/LogoTauMarin-704x340.jpg",
            links: [
                {
                    label: "Open",
                    url: "https://www.tau-marin.it/magazine/a-tu-per-tu-con-i-ragazzi-di-vfl/",
                },
                {
                    label: "Instagram",
                    url: "https://www.instagram.com/p/CRBnMCpLaW4\nLink_02",
                },
            ],
        },
        {
            title: "From Venice to…",
            content: "Tag: #Travel #Video #Report #Streaming",
            background:
                "https://www.amadriapark.com/wp-content/uploads/sites/5/2018/08/ap-excursion-Venice.jpg",
            links: [
                {
                    label: "YouTube",
                    url: "https://youtu.be/UME82USgOMY",
                },
            ],
        },
        {
            title: " #unsaltoinavanti | ON AIR",
            content: "Tag: #live #Streaming #Format #Events",
            background:
                "https://sportbusinessmag.sport-press.it/wp-content/uploads/sites/5/2020/08/COVER_1080x1080-1024x1024.png",
            links: [
                {
                    label: "YouTube",
                    url: "https://youtu.be/7SDhrXgjvdQ",
                },
            ],
        },
        {
            title: "STOP IT! Covid 19",
            background:
                "https://sportbusinessmag.sport-press.it/wp-content/uploads/sites/5/2020/08/COVER_1080x1080-1024x1024.png",
            content:
                "Partner: Croce Rossa Italiana\n\nTag: #unsaltoinavanti #Crocerossaitaliana #crowfounding",
            links: [
                {
                    label: "YouTube",
                    url: "https://youtu.be/yl6J7spQnHk",
                },
            ],
        },
        {
            title: "SKATE THE MUSEUM",
            content:
                "Partner: Punta della dogana / Palazzo Grassi _ Fondazione Penault\n\nTag: #skateboarding #venezia #muesum #artnight",
            background:
                "https://www.4actionsport.it/wp-content/uploads/2018/06/skate-the-museum.jpg",
            links: [
                {
                    url: "https://www.palazzograssi.it/it/eventi/tutti/art-night-skate-the-museum/",
                    label: "Open",
                },
            ],
        },
        {
            title: "6 Lorem ipsum",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ut adipisci. Soluta accusantium, adipisci dignissimos natus eum dolores illo animi?",
        },
    ];

    return (
        <div className="home">
            <Head>
                <title>VFL</title>
            </Head>
            <Header />
            <Grid items={items} />
        </div>
    );
}
