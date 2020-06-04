import PageTemplate from "../../templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";
import UnderConstruction from "../../atoms/underConstruction";

const BlogPage = () => (
    <PageTemplate>
        <Head>
            <title>Blog - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content={summary.about} />
        </Head>
        <UnderConstruction />
    </PageTemplate>
)

export default BlogPage