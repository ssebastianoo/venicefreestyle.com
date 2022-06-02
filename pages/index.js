import Header from "../components/Header";
import Grid from "../components/Grid";
import Head from "next/head";

export default function Home() {
    const items = [
        {
            title: "Uraban Bootcamp by Tau Marin",
            content: 'Partner: Tau Marin\n\nTag: #bootcamp #Socialnetwork #videocampaign #creativecontest #telegramchat\n\nLink_01: https://www.instagram.com/p/CRBnMCpLaW4\nLink_02: https://www.tau-marin.it/magazine/a-tu-per-tu-con-i-ragazzi-di-vfl/',
        },
        {
            title: "2 Lorem ipsum",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ut adipisci. Soluta accusantium, adipisci dignissimos natus eum dolores illo animi?",
        },
        {
            title: "3 Lorem ipsum",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ut adipisci. Soluta accusantium, adipisci dignissimos natus eum dolores illo animi?",
        },
        {
            title: "4 Lorem ipsum",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ut adipisci. Soluta accusantium, adipisci dignissimos natus eum dolores illo animi?",
        },
        {
            title: "5 Lorem ipsum",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ut adipisci. Soluta accusantium, adipisci dignissimos natus eum dolores illo animi?",
        },
        {
            title: "6 Lorem ipsum",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ut adipisci. Soluta accusantium, adipisci dignissimos natus eum dolores illo animi?",
        },
        {
            title: "6 Lorem ipsum",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ut adipisci. Soluta accusantium, adipisci dignissimos natus eum dolores illo animi?",
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
