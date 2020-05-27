import PageTemplate from "../../../components/templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";
import Breadscrumb from "../../../components/atoms/breadcrumb";

const Experiences = () => (
    <PageTemplate>
        <Head>
            <title>Formal Work Experience Record - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content="Record of Fauzi Al Aziz Fromal Work Experience" />
        </Head>
        <Breadscrumb />
        This page is under construction!
    </PageTemplate>
)

export default Experiences