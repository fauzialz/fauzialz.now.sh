import { Fragment } from "react";
import Header from "../../molecules/header";
import PageTemplate from "../../templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";

const BioPage = () => (
    <PageTemplate>
        <Head>
            <title>{summary.title} - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content={summary.about} />
        </Head>
        Profile
    </PageTemplate>
)

export default BioPage