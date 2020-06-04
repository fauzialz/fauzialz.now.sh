import PageTemplate from "../../templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";
import UnderConstruction from "../../atoms/underConstruction";

const PortofolioPage = () => (
    <PageTemplate>
        <Head>
            <title>Portofolio - {summary.first_name} {summary.last_name}</title>
        </Head>
        <UnderConstruction />
    </PageTemplate>
)

export default PortofolioPage