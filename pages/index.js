import Header from "../components/Header";
import Grid from "../components/Grid";

export default function Home() {
    return (
        <div className="home">
            <Header />
            <Grid
                items={[
                    {
                        title: "1 Lorem ipsum",
                        content:
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ut adipisci. Soluta accusantium, adipisci dignissimos natus eum dolores illo animi?",
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
                ]}
            />
        </div>
    );
}
