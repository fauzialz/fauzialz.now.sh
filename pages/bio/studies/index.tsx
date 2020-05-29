import PageTemplate from "../../../components/templates/pageTemplate";
import Head from "next/head";
import { summary, sortedStdy, study } from "../../../content/profile";
import Breadscrumb from "../../../components/atoms/breadcrumb";
import Center from "../../../components/atoms/center";
import TimelineHead from "../../../components/atoms/timelineHead";
import TimeCard from "../../../components/atoms/timeCard";
import { subMenu } from "../../../content/router";

const Studies = () => (
    <PageTemplate>
        <Head>
            <title>Formal Education Record - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content="Record of Fauzi Al Aziz Fromal Education" />
        </Head>
        <Center>
            <Breadscrumb />  
        </Center>
        <TimelineHead>
            Formal Education Record
        </TimelineHead>
        {sortedStdy.map(study => (
            <TimeCard
                key={study.school_name}
                start={study.start}
                end={study.end}
                title={study.school_name}
                subTitle={study.degree && `${study.degree.level} degree, ${study.major}`}
                link={study.route && (subMenu.edu.href + study.route)}
            >
                {study.summary}
            </TimeCard>
        ))}
    </PageTemplate>
)

export default Studies