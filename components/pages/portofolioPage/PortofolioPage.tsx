import PageTemplate from "../../templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";

const PortofolioPage = () => (
    <PageTemplate>
        <Head>
            <title>Portofolio - {summary.first_name} {summary.last_name}</title>
        </Head>
        Portofolio is under construction!
    </PageTemplate>
)

export default PortofolioPage