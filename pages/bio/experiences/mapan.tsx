import PageTemplate from "../../../components/templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";
import Breadscrumb from "../../../components/atoms/breadcrumb";
import Center from "../../../components/atoms/center";

const Mapan = () => (
    <PageTemplate>
        <Head>
            <title>Mapan - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content="My work at Mapan - PT RUMA" />
        </Head>
        <Center>
            <Breadscrumb />
            This page is under construction!
        </Center>
    </PageTemplate>
)

export default Mapan