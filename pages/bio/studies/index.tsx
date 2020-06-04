import PageTemplate from "../../../components/templates/pageTemplate";
import Head from "next/head";
import { summary, sortedStdy } from "../../../content/profile";
import Breadscrumb from "../../../components/atoms/breadcrumb";
import Center from "../../../components/atoms/center";
import TimelineHead from "../../../components/atoms/timelineHead";
import TimeCard from "../../../components/atoms/timeCard";
import { subMenu } from "../../../content/router";

export const eduDetail = 'formal education helps me a lot in an indirect way. It opens up the gate of understanding and makes my learning process became easier.'
const eduSummary = `I didn't learn much about code during my formal education years. Even though this is not the reason, I can say that college didn't have an exact curriculum for represents technology that we use in today's industries. However, since I start to learn code, my ${eduDetail}`

const Studies = () => (
    <PageTemplate>
        <Head>
            <title>Formal Education Record - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content="Record of Fauzi Al Aziz Fromal Education" />
        </Head>
        <Center>
            <Breadscrumb />  
        </Center>
        <TimelineHead title="FORMAL EDUCATION RECORD" >
            <div className="summary">
                {eduSummary}
            </div>
        </TimelineHead>
        <div className="list">
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
        </div>
        
        <style jsx>{`
            .summary {
                font-weight: 400;
                margin-top: 10px;
                margin-bottom: 24px;
                color: #363636;
                max-width: 600px;
                line-height: 1.6;
            }
            .list {
                margin-bottom: 60px;
            }
        `}</style>
    </PageTemplate>
)

export default Studies