import PageTemplate from "../../templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";
import AboutMe from "../../molecules/aboutMe";
import Study from "../../molecules/study";

const BioPage = () => (
    <PageTemplate>
        <Head>
            <title>{summary.title_short} - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content={summary.about} />
        </Head>
        <AboutMe />
        <Study />
    </PageTemplate>
)

export default BioPage