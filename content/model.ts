export interface Summary {
    alias: string
    first_name: string
    last_name: string
    title_short: string
    title_long: string
    born: Date
    about: string
    slogan: string
    city: string
    country: string
    email: string
    phone?: string
}

export interface Social {
    title: string
    link: string
}

export interface StudyActivity {
    name: string
    as?: string
    description: string
    start?: Date
    end?: Date
    important: boolean
    type: 'one_time' | 'period' | 'award'
}

export interface Study {
    level: number
    detailed: boolean
    school_name: string
    faculty?: string
    major?: string
    degree?: {
        level: 'Associate ' | "Bachelor's" | "Master's" | 'Doctoral'
        short: string,
        long: string
    }
    gpa?: number
    city: string
    nation?: string
    start: Date
    end: Date
    summary: string
    route: string
    activities?: StudyActivity[]
}

export interface ExperienceJobDesc {
    title: string,
    description: string,
    tech_stack?: string[]
    link?: string[],
    Inner_link?: string
}

export interface Experience extends StudyActivity {
    location: string,
    id: string,
    jobDesc?: ExperienceJobDesc[]
    tech_stack?: string[]
    link?: string[]
    companySite? : string
    disclaimer?: string
}

export interface RouteObj {
    href: string
    title: string
}