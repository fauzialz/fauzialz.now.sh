import PageTemplate from "../../../components/templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";
import UnderConstruction from "../../../components/atoms/underConstruction";

const Komodo = () => (
    <PageTemplate>
        <Head>
            <title>Komodo eProcurement - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content="My work at Komodo eProcurement" />
        </Head>
        <UnderConstruction breadcrumb />
    </PageTemplate>
)

export default Komodo