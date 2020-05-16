export interface Summary {
    alias: string
    first_name: string
    last_name: string
    title: string
    born: Date
    about: string
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
    school_name: string
    faculty?: string
    major?: string
    degree?: {
        short: string,
        long: string
    }
    gpa?: number
    city: string
    nation?: string
    start: Date
    end: Date
    summary: string
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
    jobDesc?: ExperienceJobDesc[]
    tech_stack?: string[]
    link?: string[]
}

export interface RouteObj {
    href: string
    title: string
}