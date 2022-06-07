import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    const description = `VFL (Venice Freestyle Lab) é il progetto editoriale di F.I.Ve.
SRL rivolto alle discipline Freestyle: Parkour, Bmx, Skateboard,
Downhill, Snowboard, ski freestyle, etc. VFL vuole: INFORMARE:
raccontando i veri valori del Freestyle tramite lo strumento del
video e dello Storytelling. DIVULGARE: tramite la sua
piattaforma web e un Network Social sostenuto dalla comunità dei
praticanti e indirizzato a tutti coloro che siano affascinati da
questo mondo. AGGREGARE: grazie ad un circuito di eventi
pubblici finalizzati a mostrare i valori di questo Mondo;
articolati fra dimostrazioni e workshop didattici. PROGETTARE:
per sviluppare nuovi paesaggi, urbani e naturali, dedicati ad
accogliere queste discipline e porsi come nuovi luoghi di
aggregazione.`;

    const keywords = ['Venice Freestyle Lab', 'Venice Freestyle', 'VFL', 'sport', 'freestyle', 'skateboard', 'surf', 'bmx', 'parkour', 'snowboard', 'sci freestyle', 'sci', 'ski', 'ski freestyle', 'events', 'eventi', 'video', 'social network'];

    return (
        <Html>
            <Head>
                <link rel="icon" href="./assets/loghi/logo-white.ico" />
                <meta name="description" content={description} />
                <meta name="theme-color" content="#ffffff" />
                <meta name="author" content="F.I.Ve. SRL" />
                <meta property="og:title" content="VFL" />
                <meta property="og:description" content={description} />
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta
                    property="og:image"
                    content="https://firebasestorage.googleapis.com/v0/b/venicefreestylelab-4289d.appspot.com/o/logos%2Flogo-white.png?alt=media&token=30d9e716-1656-4352-a5bf-a8e85e16f73d"
                />
                <meta property="keywords" content={keywords.join(", ")} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
