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
            title: "#proRIDERproFILMER 4 PICKUP",
            content: "Tag: #prpf #provaprendermi #scifreestyle #surf #bmx",
            background:
                "https://m.media-amazon.com/images/I/71wtAtzLEeL._SX679_.jpg",
            links: [
                {
                    label: "Instagram",
                    url: "https://www.instagram.com/p/B19EKZtHyrM",
                },
            ],
        },
        {
            title: "SURF'N FUERTE",
            content: "Tag: #surf #video #SSFF #PSFF",
            background: "https://i.ytimg.com/vi/hal0yK3WqLY/maxresdefault.jpg",
            links: [
                {
                    label: "YouTube",
                    url: "https://youtu.be/HO-UKS_r2Ik",
                },
            ],
        },
        {
            title: "VFL goes to SKATEWEEK",
            content:
                "Partner: Milano Skate Week\n\nTag: #milano #goskateboardingday #video #report",
            background:
                "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_1000,h_1000/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2018/05/28/0dd495d8-b398-4de5-9f07-90733a27a646/red-bull-skate-week",
            links: [
                {
                    label: "YouTube",
                    url: "https://youtu.be/5JW4aTYts3A",
                },
            ],
        },
        {
            title: "SEISER ALM LEGENDS",
            content:
                "Partner: Prinoth\n\nTag: #Snowboard #worldchampionship #saiseralm #video",
            background:
                "https://freight.cargo.site/w/3508/q/75/i/12d69338cae75a356868658be1d39c52ed86886c4eee84ac63dc29ef1258d76d/sal.jpg",
            links: [
                {
                    label: "YouTube",
                    url: "https://youtu.be/XAL_o3Ici7w",
                },
            ],
        },
        {
            title: "Snowbike vs Motorbike",
            content: "Partner: Parto Nevoso Tag: #video #snowbike #motorbike",
            background:
                "https://vcdn.bergfex.at/images/resized/bb/59a867df74c47bbb_a2dd6988c8fb556a@2x.jpg",
            links: [
                {
                    label: "YouTube",
                    url: "https://youtu.be/UsTRXF5LCEQ",
                },
            ],
        },
        {
            title: "STREET LAB",
            content:
                "Partner: Corte Calle Legrenzi _ Biennale Urbana\nmTag: #street #events #videopremiere",
            background: "https://i.ytimg.com/vi/lDT8ZLIU9Xc/maxresdefault.jpg",
            links: [
                {
                    label: "SL1",
                    url: "https://www.youtube.com/watch?v=Ekqdb2nS6II",
                },
                {
                    label: "SL2",
                    url: "https://www.youtube.com/watch?v=7kdTEJGhOTg",
                },
                {
                    label: "SL3",
                    url: "https://www.youtube.com/watch?v=lDT8ZLIU9Xc",
                },
            ],
        },
        {
            title: "Teen Print Party",
            content:
                "Partner: Punta della dogana / Palazzo Grassi _ Fondazione Penault\n\nTag: #parkour #event #museum",
            background: "https://i.ytimg.com/vi/XZtUwyBEXa8/maxresdefault.jpg",
            links: [
                {
                    label: "YouTube",
                    url: "https://youtu.be/m12eQqoczE4",
                },
            ],
        },
        {
            title: "VFL @ IUAV",
            content:
                "Partner: Istituto Università di Architettura _ Porto di Venezia _ Comune di Venezia\nTag: #parkour #Bmx #Skate #university",
                background: "https://i.ytimg.com/vi/2N1KNkeeArA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAA49tdBCMX058OaKHQ6pSZmZ8xsA",
                links: [
                {
                    label: "Parkour",
                    url: "https://www.youtube.com/watch?v=oGuiMq6J-ZE"
                },
                {
                    label: "BMX",
                    url: "https://www.youtube.com/watch?v=2N1KNkeeArA"
                }
            ],
        },
        
    ];

    return (
        <div className="home">
            <Head>
                <title>VFL</title>
            </Head>
            <Grid items={items} />
        </div>
    );
}
