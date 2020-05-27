import Head from "next/head"
import { summary } from "../content/profile"
import { sign } from "crypto"
import { useEffect } from "react"

const PrintCV = () => {
    useEffect(() => {
        window.print()
    }, [])

    return (
        <div>
            <Head>
                <title>Resume - {summary.first_name} {summary.last_name}</title>
            </Head>
            <b>This feature is not yet available</b>
        </div>
    )
}

export default PrintCV