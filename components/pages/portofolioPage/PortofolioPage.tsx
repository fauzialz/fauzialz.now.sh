import PageTemplate from "../../templates/pageTemplate/PageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";

const PortofolioPage = () => (
    <PageTemplate>
        <Head>
            <title>Portofolio - {summary.first_name} {summary.last_name}</title>
        </Head>
        Portofolio
    </PageTemplate>
)

export default PortofolioPage