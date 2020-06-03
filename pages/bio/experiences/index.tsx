import PageTemplate from "../../../components/templates/pageTemplate";
import Head from "next/head";
import { summary, sortedExp } from "../../../content/profile";
import Breadscrumb from "../../../components/atoms/breadcrumb";
import Center from "../../../components/atoms/center";
import TimelineHead from "../../../components/atoms/timelineHead";
import TimeCard from "../../../components/atoms/timeCard";
import { subMenu } from "../../../content/router";
import { Fragment } from "react";

const workSummary = `In case you want to see my formal work experience record, the simplified list are shown.`

const TechStack = ({tech_stack}: {tech_stack: string[]}) => (
    <Fragment>
        <div className="stack">
            {tech_stack.map( stack => (
                <div key={stack}>{stack}</div>
            ))}
        </div>
        <style jsx>{`
            .stack {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                margin-left: -7px
            }
            .stack div {
                margin-top: 7px;
                padding: 2px 6px;
                background-color: #fed562;
                font-size: 12.5px;
                margin-left: 8px;
                border-radius: 4px;
                width: fit-content;
            }
        `}</style>
    </Fragment>
)

const Experiences = () => (
    <PageTemplate>
        <Head>
            <title>Formal Work Experience Record - {summary.first_name} {summary.last_name}</title>
            <meta name="description" content="Record of Fauzi Al Aziz Fromal Work Experience" />
        </Head>
        <Center>
            <Breadscrumb />
        </Center>
        <TimelineHead title="FORMAL WORK RECORD" >
            <div className="summary">
                {workSummary}
            </div>
        </TimelineHead>
        <div className="list">
            {sortedExp.map( exp => (
                <TimeCard
                    key={exp.name}
                    start={exp.start}
                    end={exp.end}
                    title={exp.name}
                    subTitle={exp.as}
                    link={subMenu.exp.href + '/' + exp.id}
                >
                    <div className="content">
                        {exp.description}
                        {exp.jobDesc &&
                            <ul className="jobdesk">
                                {exp.jobDesc.map( job => (
                                    <li key={job.title}>
                                        <div className="title">{job.title}</div>
                                        <div className="desc">{job.description}</div>
                                        {job.tech_stack && <TechStack tech_stack={job.tech_stack} />}
                                    </li>
                                ))}
                            </ul>
                        }
                        {exp.tech_stack && <TechStack tech_stack={exp.tech_stack} />}
                    </div>
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
                margin-bottom: 30px;
            }
            .content {
                line-height: 1.5;
                white-space: pre-wrap;
                font-size: 14px;
                margin: 24px 0px;
            }
            .jobdesk {
                margin-top: 20px;
                padding-left: 24px;
            }
            li {
                padding: 12px 14px;
                padding-top: 10px;
                line-height: 1.6;
                border: 1px solid #eeeeee;
                margin-bottom: 12px;
                border-radius: 5px;
            }
            li:last-child {
                margin-bottom: 0px;
            }
            .title {
                font-size: 14px;
                font-weight: 600;
            }
            .desc {
                margin-top: 4px;
                font-size: 14px;
            }

            @media( max-width : 800px ) {
                .content {
                    font-size: 13px;
                    margin-top: 10px;
                }
                .jobdesk {
                    list-style: none;
                    padding-left: 0px;
                }
                li {
                    width: 100%;
                    margin-left: 0px;
                }
            }
        `}</style>
    </PageTemplate>
)

export default Experiences