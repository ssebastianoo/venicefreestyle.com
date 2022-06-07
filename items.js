const fs = require("fs");

const raw = `
Title:Urban Bootcamp by Tau Marin
Partner: Tau Marin (https://www.tau-marin.it/)
Tag: #bootcamp #Socialnetwork #videocampaign #creativecontest #telegramchat 
Instagram: https://www.instagram.com/p/CRBnMCpLaW4/
Website: https://www.tau-marin.it/magazine/a-tu-per-tu-con-i-ragazzi-di-vfl/
—————————————
Title: From Venice to…

Tag: #Travel #Video #Report #Streaming
YouTube: https://youtu.be/UME82USgOMY
Instagram: https://www.instagram.com/tv/CEEfMxGF2V9/
—————————————
Title: #unsaltoinavanti | ON AIR

Tag: #live #Streaming #Format #Events
Youtube: https://youtu.be/7SDhrXgjvdQ
—————————————
Title: STOP IT! Covid 19
Partner: Croce Rossa Italiana (https://cri.it/)
Tag: #unsaltoinavanti #Crocerossaitaliana #crowfounding 
Youtube: https://youtu.be/yl6J7spQnHk
Instagram: https://www.instagram.com/tv/B-xBSX3FnOA/
Website: https://sportbusinessmag.sport-press.it/2020/08/27/vlf-il-freestyle-contro-il-covid-nella-campagna-unsaltoinavanti/
—————————————
Title: SKATE THE MUSEUM
Partner: Punta della dogana / Palazzo Grassi _ Fondazione Penault (https://www.palazzograssi.it/)
Tag: #skateboarding #venezia #muesum #artnight
Website: https://www.palazzograssi.it/it/eventi/tutti/art-night-skate-the-museum/
Youtube: https://youtu.be/d1fAZpFHRGA
Youtube: https://youtu.be/lga8wrSLgyI
Youtube: https://youtu.be/8snKVxV6zoE
—————————————
Title: #proRIDERproFILMER 4 PICKUP
Partner: PickUp _ Bahlsen Italia (https://www.pickup.it/)
Tag: #prpf #provaprendermi #scifreestyle #surf #bmx
Instagram: https://www.instagram.com/p/B19EKZtHyrM/
Website: cancella
—————————————
Title: SURF'N FUERTE
Partner: Boardfarm (https://www.instagram.com/boardfarmco/), Wenzel (https://www.instagram.com/wenzel.surfboards/), Dreammachine (https://www.dreammachinesurfboards.com/), Bowl la Jares (https://bowllajares.com/), Casa Maccaroni (https://www.casamaccaroni.com/)
Tag: #surf #video #SSFF #PSFF
Youtube: https://youtu.be/HO-UKS_r2Ik
Website: https://2019.ssff.it/portfolio/surfin-fuerte/
—————————————
Title: VFL goes to SKATEWEEK
Partner: Milano Skate Week (https://www.redbull.com/it-it/events/red-bull-skate-week)
Tag: #milano #goskateboardingday #video #report
YouTube: https://youtu.be/5JW4aTYts3A
—————————————
Title: SEISER ALM LEGENDS
Partner: Prinoth (https://www.prinoth.com/), F-Tech Snowpark (https://f-techsnowparks.com/) 
Tag: #Snowboard #worldchampionship #saiseralm #video
YouTube: https://youtu.be/XAL_o3Ici7w
—————————————
Title: Snowbike vs Motorbike
Partner: Parto Nevoso (https://pratonevoso.com/)
Tag: #video #snowbike #motorbike #
YouTube: https://youtu.be/UsTRXF5LCEQ
—————————————
Title: STREET LAB
Partner: Corte Calle Legrenzi (https://www.instagram.com/callecortelegrenzi/) _ Biennale Urbana (https://www.instagram.com/buurrb/)
Tag: #street #events #videopremiere
Link_01: https://youtu.be/7kdTEJGhOTg
Link_03: https://youtu.be/Ekqdb2nS6II
Link_02: https://youtu.be/lDT8ZLIU9Xc
—————————————
Title: Teen Print Party
Partner: Punta della dogana / Palazzo Grassi _ Fondazione Penault (https://www.palazzograssi.it/)
Tag: #parkour #event #museum
YouTube: https://youtu.be/m12eQqoczE4
Website: https://www.palazzograssi.it/it/eventi/tutti/teens-print-party/
—————————————
Title: VFL @ IUAV
Partner: Istituto Università di Architettura (http://www5.iuav.it/homepage/index.htm), Porto di Venezia (https://www.port.venice.it/it), Comune di Venezia (https://www.comune.venezia.it/)
Tag: #parkour #Bmx #Skate #university
Link_01: https://youtu.be/oGuiMq6J-ZE
Link_02: https://youtu.be/2N1KNkeeArA
`

const items = raw.split("—————————————").map(
    (item, index) => {
        const lines = item.trim().split("\n");
        const title = lines[0].replace("Title:", "").trim();
        const content = (lines[1] + '\n' + lines[2]).trim();

        lines.shift();
        lines.shift();
        lines.shift();

        const links = lines.map((line) => {
            return {
                label: line.split(' ')[0],
                url: line.split(' ')[1]
            }
        });

        return {
            id: index,
            title,
            content,
            links,
        }
    }
);

fs.writeFile('projects.json', JSON.stringify(items, null, 4), (err) => {
    if (err) throw err;
});