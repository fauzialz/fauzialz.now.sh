import PageTemplate from "../../../components/templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";
import Breadscrumb from "../../../components/atoms/breadcrumb";

const Xsis = () => (
    <PageTemplate>
        <Head>
            <title>PT Xsis Mitra Utama - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content="My work at PT Xsis Mitra Utama" />
        </Head>
        <Breadscrumb />
        This page is under construction!
    </PageTemplate>
)

export default Xsis