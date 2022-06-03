import Head from 'next/head';

export default function About() {
    return (
        <div className="about">
            <Head>
                <title>VFL | About</title>
            </Head>
            <p>
                VFL (Venice Freestyle Lab) é il progetto editoriale di F.I.Ve.<br />
                SRL rivolto alle discipline Freestyle: Parkour, Bmx, Skateboard,<br />
                Downhill, Snowboard, ski freestyle, etc. VFL vuole: INFORMARE:<br />
                raccontando i veri valori del Freestyle tramite lo strumento del<br />
                video e dello Storytelling. DIVULGARE: tramite la sua<br />
                piattaforma web e un Network Social sostenuto dalla comunità dei<br />
                praticanti e indirizzato a tutti coloro che siano affascinati da<br />
                questo mondo. AGGREGARE: grazie ad un circuito di eventi<br />
                pubblici finalizzati a mostrare i valori di questo Mondo;<br />
                articolati fra dimostrazioni e workshop didattici. PROGETTARE:<br />
                per sviluppare nuovi paesaggi, urbani e naturali, dedicati ad<br />
                accogliere queste discipline e porsi come nuovi luoghi di<br />
                aggregazione.
            </p>
        </div>
    );
}
