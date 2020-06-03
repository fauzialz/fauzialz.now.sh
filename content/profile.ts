import { Summary, Study, Experience, Social } from "./model"

export const summary: Summary = {
    alias: 'fauzialz',
    first_name: 'Fauzi',
    last_name: 'Al Aziz',
    title_short: 'Web Development',
    title_long: 'self-taught designer and full-stack code typist',
    born: new Date(2012, 10, 8),
    slogan: 'Commit and push\nwas a life lessons I learn from Git.',
    about: "I started learning web development since 2018 and have made several things. I'm very obsessed with making something clean and aesthetic.",
    city: 'Jakarta',
    country: 'Indonesia',
    email: 'alaziz.fauzi@gmail.com'
}

export const social: Social[] = [
    {title: 'Twitter', link: 'https://twitter.com/fauzialz'},
    {title: 'Instagram' , link:'https://www.instagram.com/fauzialz/'},
    {title: 'LinkedIn', link:'https://www.linkedin.com/in/fauzi-al-aziz-107145137/'}
]

export const study: Study[] = [
    {
        level: 0,
        detailed: false,
        school_name: 'MIN 13 Muktisari',
        city: 'Ciamis',
        start: new Date(2002, 5),
        end: new Date(2008, 3),
        summary: 'The school was MI PUI Cigebot back there.'
    },
    {
        level: 1,
        detailed: false,
        school_name: 'MTsN 4 Ciamis',
        city: 'Ciamis',
        start: new Date(2008, 4),
        end: new Date(2011, 1),
        summary: 'The school was MTsN Buniseuri back there.'
    },
    {
        level: 2,
        detailed: false,
        school_name: 'SMA Informatika Ciamis',
        city: 'Ciamis',
        start: new Date(2011, 1),
        end: new Date(2014, 6), // Juli 2014
        summary: 'Regular high school with the addition of a computer science curriculum. In this period of time, I learn to design more than programming'
    },
    {
        level: 3,
        detailed: true,
        school_name: 'Telkom University',
        faculty: 'Faculty of Informatics',
        major: 'Computational Science',
        degree: {
            level: "Bachelor's",
            short: 'S.Si.Kom.',
            long: 'Sarjana Sains Komputer'
        },
        gpa: 3.56,
        city: 'Bandung',
        start: new Date(2014, 7),
        end: new Date(2018, 7),
        route: '/bachelor',
        summary: 'Not writed yet',
        activities: [
            {
                name: 'UKM Aksara Jurnalistik',
                as: 'Vice Chairman',
                start: new Date(2016, 10),
                end: new Date(2017, 10),
                important: true,
                description: '',
                type: 'period'
            },
            {
                name: 'Charity of Computational Science Students Association',
                as: 'Chief Executive Officer',
                start: new Date(2015, 4),
                important: false,
                description: '',
                type: 'one_time'
            },
            {
                name: '3th Senior Residents',
                as: 'Staff',
                start: new Date(2015, 5),
                end: new Date(2016, 4),
                important: false,
                description: '',
                type: 'one_time'
            },
            {
                name: 'First Structured Programming Lab',
                as: 'Practice Assistant',
                start: new Date(2015, 7),
                end: new Date(2016, 1),
                important: true,
                description: 'Work for one semester to help a practitioner in the First Structured Programming Class lab.',
                type: 'period'
            },
            {
                name: 'BMKG Slimatology Station, Bandung',
                as: 'Student Intern',
                start: new Date(2017, 4),
                end: new Date(2017, 7),
                important: true,
                description: 'The internship mentor gave me a projact to make animations about water cycle.',
                type: 'period'
            },
            {
                name: 'Kopertis Scholarship 2016',
                as: 'Scholarship Grantee',
                start: new Date(2016, 3),
                important: false,
                description: '',
                type: 'award'
            },
            {
                name: 'Kopertis Scholarship 2017',
                as: 'Scholarship Grantee',
                start: new Date(2017, 6),
                important: false,
                description: '',
                type: 'award'
            }
        ]
    }
]

export const experience: Experience[] = [
    {
        id: 'xsis',
        name: 'PT Xsis Mitra Utama',
        as: 'Software Engineer',
        start: new Date(2018, 8),
        important: true,
        type: 'period',
        location: 'Jakarta',
        tech_stack: ['Node.Js', 'React', 'Angular', 'Vue'],
        description: 'PT Xsis Mitra Utama is a vendor company base on IT solutions for industries. Providing skilled resources in programming.\n\nAs an employee of this company, I have been trained to mastering JavaScript programming language both in client side (frontend) and server side (backend). So basically I am a fullstuck programmer. My skill-set including Node.Js, React.Js, Angular, and Vue.Js. In the idle time, I keep learning to elevate my knowledge and mastering my craft.'
    },
    {
        id: 'mapan',
        name: 'Mapan - PT RUMA',
        as: 'Application Support Engineer',
        start: new Date(2018, 11),
        important: true,
        type: 'period',
        location: 'Jakarta',
        disclaimer: 'Work under PT. Xsis Mitra Utama',
        description: 'Mapan is an Indonesia-based company that focuses on providing network of thousands of lower income communities with better access to valuable products and services using technology. Our main product right now is Arisan.\n\nIn this company, I work under PT. Xsis Mitra Utama and placed in Supply Chain Team under Tech Division. What I do as a Support Engineer are:',
        companySite:'https://www.mapan.id/',
        jobDesc: [
            {
                title: 'Daily Ticketing',
                description: 'Solve daily Zendesk ticket: Collaborate with Engineer to Investigate and solve problems in Tech Logistic area, mainly fixing errors in the data by following the complex logistic business flow.',
            },
            {
                title: 'Maintain and Manage Logistic Database',
                description: 'Working with Query in MySQL and PostgreSQL to provide data or maintain and manage Logistic Database.',
                tech_stack: ['MySQL', 'PostgreSQL']
            },
            {
                title: 'Scripting',
                description: 'Operate or create new Python scripts (Django Framework) to manage or fix errors on complex relations of data.',
                tech_stack: ['Python', 'Django']
            },
            {
                title: 'Dashboard Permana',
                description: 'Adding new features to an existing tool used by the internal of Mapan that builds with Go (Beego Framework) and JavaScript (jQuery) in MVC architecture.',
                tech_stack: ['Go', 'Beego', 'JavaScript', 'jQuery', 'HTML', 'CSS']
            },
            {
                title: 'Integratation with Google Drive API',
                description: 'Create a Python script to automate upload every new file to Google Drive to be viewed by Branch Manager and a Cron to delete it daily.',
                tech_stack: ['Python', 'Google API']
            },
            {
                title: 'POC Mapan Direct Purchase',
                description: 'Collaborate with Product Manager and Backend Engineer to build POC Mapan Direct Purchase Web App using React.',
                tech_stack: ['JavaScript', 'React', 'SASS']
            },
            {
                title: 'Gojek WOBI Web App',
                description: 'Collaborate with Gojek Engineer to build a web app that concurrently inserts order to Gojek logistic partner app using React.',
                tech_stack: ['JavaScript', 'React', 'SASS'],
                Inner_link: '/portofolio/wobi'
            }
        ]
    }
]

let exp = [...experience]
let stdy = [...study]

export const sortedExp = exp.sort((a, b) => ((b.start.getFullYear() + b.start.getMonth()) - (a.start.getFullYear() + a.start.getMonth())))
export const sortedStdy = stdy.sort((a, b) => ((b.level) - (a.level)))