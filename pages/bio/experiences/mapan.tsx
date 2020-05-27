import PageTemplate from "../../../components/templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";
import Breadscrumb from "../../../components/atoms/breadcrumb";

const Mapan = () => (
    <PageTemplate>
        <Head>
            <title>Mapan - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content="My work at Mapan - PT RUMA" />
        </Head>
        <Breadscrumb />
        This page is under construction!
    </PageTemplate>
)

export default Mapan