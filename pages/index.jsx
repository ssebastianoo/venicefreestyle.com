import Grid from "../components/Grid";
import Head from "next/head";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Home() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getProjects() {
            const querySnapshot = await getDocs(collection(db, "projects"));
            const projects = querySnapshot.docs.map((doc) => doc.data());
            setProjects(projects);
        }
        getProjects();
    }, []);

    return (
        <div className="home">
            <Head>
                <title>VFL</title>
            </Head>
            <Grid items={projects} />
        </div>
    );
}
