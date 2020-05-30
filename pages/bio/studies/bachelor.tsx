import PageTemplate from "../../../components/templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";
import Breadscrumb from "../../../components/atoms/breadcrumb";
import Center from "../../../components/atoms/center";

const Bachelor = () => (
    <PageTemplate>
        <Head>
            <title>Telkom University - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content="Telkom University, Bachelor's Degree, Fauzi Al Aziz" />
        </Head>
        <Center>
            <Breadscrumb />
            Telkom University is under construction!
        </Center>
    </PageTemplate>
)

export default Bachelor