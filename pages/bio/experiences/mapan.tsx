import PageTemplate from "../../../components/templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";
import UnderConstruction from "../../../components/atoms/underConstruction";

const Mapan = () => (
    <PageTemplate>
        <Head>
            <title>Mapan - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content="My work at Mapan - PT RUMA" />
        </Head>
        <UnderConstruction breadcrumb />
    </PageTemplate>
)

export default Mapan