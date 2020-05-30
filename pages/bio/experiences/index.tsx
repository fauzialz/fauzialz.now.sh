import PageTemplate from "../../../components/templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";
import Breadscrumb from "../../../components/atoms/breadcrumb";
import Center from "../../../components/atoms/center";

const Experiences = () => (
    <PageTemplate>
        <Head>
            <title>Formal Work Experience Record - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content="Record of Fauzi Al Aziz Fromal Work Experience" />
        </Head>
        <Center>
            <Breadscrumb />
            This page is under construction!
        </Center>
    </PageTemplate>
)

export default Experiences