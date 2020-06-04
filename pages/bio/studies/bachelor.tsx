import PageTemplate from "../../../components/templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";
import UnderConstruction from "../../../components/atoms/underConstruction";

const Bachelor = () => (
    <PageTemplate>
        <Head>
            <title>Telkom University - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content="Telkom University, Bachelor's Degree, Fauzi Al Aziz" />
        </Head>
        <UnderConstruction breadcrumb />
    </PageTemplate>
)

export default Bachelor