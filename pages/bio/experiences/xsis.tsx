import PageTemplate from "../../../components/templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";
import UnderConstruction from "../../../components/atoms/underConstruction";

const Xsis = () => (
    <PageTemplate>
        <Head>
            <title>PT Xsis Mitra Utama - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content="My work at PT Xsis Mitra Utama" />
        </Head>
        <UnderConstruction breadcrumb />
    </PageTemplate>
)

export default Xsis