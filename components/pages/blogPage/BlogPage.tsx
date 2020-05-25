import PageTemplate from "../../templates/pageTemplate";
import Head from "next/head";
import { summary } from "../../../content/profile";

const BlogPage = () => (
    <PageTemplate>
        <Head>
            <title>Blog - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content={summary.about} />
        </Head>
        Blog is under construction!
    </PageTemplate>
)

export default BlogPage