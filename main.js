const expense = {
    dateCreated: "01/01/2017",
    location: "Bob's Burgers",
    dollarAmount: "14.34",
    purpose: "Lunch with very important client",
    code: "1001A"
}

const employee = {
    firstName: "Michael",
    lastName: "Tambornino",
    role: "Sales Rep",
    accountNumber: "1-8349058340"
}

const expenseReport = {
    dateCreated: "02/01/2017",
    expenses: [
        {
            amount: 14.34,
            dateCreated: "01/01/2017",
            vendor: "Bob's Burgers",
            code: "1001A"
        },
        {
            amount: 51.03,
            dateCreated: "01/03/2017",
            vendor: "Sunoco",
            code: "2213D"
        },
        {
            amount: 7.22,
            dateCreated: "01/07/2017",
            vendor: "Taco Bell",
            code: "1001A"
        }
    ]
}

// Three properties to every property: [configurable, enumerable, writable] * Default value is false

const expense = Object.create({}, {
    dateCreated: {
        enumerable: true,
        writable: false,
        value: "01/01/2017"
    },
    location: {
        enumerable: true,
        writable: false,
        value: "Bob's Burgers"
    },
    dollarAmount: {
        enumerable: true,
        writable: false,
        value: 14.34
    },
    purpose: {
        enumerable: true,
        writable: false,
        value: "Lunch with very important client"
    },
    code: {
        enumerable: false,
        writable: true,
        value: "1001A"
    }
})

// By default, use Object.create 


/*

You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

Your job is to define the different objects and resources, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

Her congressional district (you can use yours here)
Her platform statements for the following issues.
    Taxes
    Jobs
    Infrastructure
    Health care
    Crime and enforcement
URL for donation form
Calendar of events
Volunteer information
    Name
    Address
    Email
    Phone number
    Availability
    What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
Biography
Image gallery
    Head shot
    Picture of family
    Picture of constituents
Mission statement
URL for registering to vote

*/ 

const congressionalDistrict = Object.create({}, {
    district: {
        enumerable: true,
        writable: false,
        value: "5th"
    }
})

const platformStatements = Object.create({}, {
    taxes: {
        enumerable: true,
        writable: false,
        value: "Profound statement on taxes - Lorem ipsum dolor amet gluten-free fingerstache dreamcatcher blue bottle cronut synth. Stumptown la croix lo-fi banh mi drinking vinegar microdosing portland fixie air plant. Tilde af pitchfork, XOXO shoreditch live-edge succulents copper mug gastropub master cleanse biodiesel farm-to-table. Keytar normcore selvage aesthetic food truck vexillologist. Forage fam lyft listicle leggings tattooed biodiesel bicycle rights street art pinterest keffiyeh locavore celiac retro unicorn. Jianbing celiac actually tbh freegan tumeric."
    },
    jobs: {
        enumerable: true,
        writable: false,
        value: "Profound statement on jobs - Lorem ipsum dolor amet cold-pressed drinking vinegar butcher cronut, you probably haven't heard of them wayfarers fingerstache la croix blue bottle activated charcoal. Taxidermy salvia beard gastropub unicorn craft beer asymmetrical cloud bread normcore pabst cliche tbh four loko. Butcher pabst coloring book meh cardigan palo santo wolf iPhone blog sriracha cloud bread fam ramps."
    }, 
    infrastructure: {
        enumerable: true,
        writable: false,
        value: "Profound statement on infrastructure - Bitters mustache artisan mixtape ennui hoodie succulents copper mug actually vexillologist af venmo ramps flannel bushwick. Art party ethical hella, iPhone edison bulb la croix keytar chicharrones meditation four loko pok pok kickstarter."
    }, 
    healthCare: {
        enumerable: true,
        writable: false,
        value: "Profound statement on healthcare - Etsy gastropub chambray drinking vinegar, next level la croix waistcoat leggings raw denim godard PBR&B tofu four loko put a bird on it. Tofu ugh live-edge, next level marfa wayfarers thundercats drinking vinegar chicharrones williamsburg YOLO paleo."
    },
    crimeAndReinforcement: {
        enuemrable: true,
        writable: false,
        value: "Profound statement on crime and reinforcement - Succulents schlitz hot chicken, mumblecore affogato 90's cold-pressed thundercats poutine roof party irony vegan cred. Farm-to-table tumblr forage, drinking vinegar skateboard pour-over pork belly vice wayfarers dreamcatcher scenester vaporware disrupt synth. Seitan master cleanse gluten-free, cardigan ennui street art adaptogen twee 8-bit kinfolk semiotics jean shorts vexillologist." 
    }
})

const urlForDonationsForms = Object.create({}, {
    url: {
        enumerable: true, 
        writable: false,
        value: "www.mywebsitefordistrict.com"
    }
})

const calendarOfEvents = [];

const events = Object.create({}, {
    eventOne: {
        dateCreated: {
            enumerable: true,
            writable: false,
            value: "10/10/18"
        },
        venue: {
            enumerable: true,
            writable: false,
            value: "Nashville Software School"
        },
        demographic: {
            enumerable: true,
            writable: false,
            value: "Developers"
        },
        platformStatement: {
            enumerable: true,
            writable: false,
            value: platformStatements.jobs.value
        }
    },
    eventTwo: {
        dateCreated: {
            enumerable: true,
            writable: false,
            value: "10/12/18"
        },
        venue: {
            enumerable: true,
            writable: false,
            value: ""
        },
        demographic: {
            enumerable: true,
            writable: false,
            value: "Developers"
        },
        platformStatement: {
            enumerable: true,
            writable: false,
            value: platformStatements.jobs.value
        }
    },
    eventThree: {
        dateCreated: {
            enumerable: true,
            writable: false,
            value: "10/17/18"
            },
        venue: {
            enumerable: true,
            writable: false,
            value: "White House"
            },
        demographic: {
            enumerable: true,
            writable: false,
            value: "All groups"
            },
        platformStatement: {
            enumerable: true,
            writable: false,
            value: platformStatements.value
            }            
    }
})

const volunteers = [];

const volunteerInformation = Object.create({}, {

})





































