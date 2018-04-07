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
// Object to hold representative name, district campaigning for, biography, image gallery (head shot, family picture, picture of constituents)

const representativesInfo = Object.create({}, {
        name: {
            enumerable: true,
            writable: true,
            value: "Elizabeth Sanger"
        },
        districtRunning: {
            enumerable: true,
            writable: false,
            value: "5th"
        },
        biography: {
            enumerable: true,
            writable: false,
            value: "Inspiring biography here. Tons of hurdles and trials to overcome..."
        },
        imageGallery: {
            headShot: {
                enumerable: true,
                writable: false,
                value: "https://www.pinterest.com/pin/92464598576802455/"
            },
            familyPhoto: {
                enumerable: true,
                writable: false,
                value: "http://runt-of-the-web.com/awkward-family-photos"
            },
            constituents: {
                enumerable: true,
                writable: false,
                value: "https://www.cbsnews.com/news/house-republicans-on-recess-face-angry-constituents-at-local-town-halls/"
            },
        },
        missionStatement: {
            enumerable: true,
            writable: false,
            value: "Inspiring mission statement here"
        }
})
// const myArray = [];
const modifyRepInfo = (key, value) => {
    representativesInfo[key] = value;
 }

const platformStatements = Object.create({}, {
    taxes: {
        enumerable: true,
        writable: true,
        value: "Profound statement on taxes - Lorem ipsum dolor amet gluten-free fingerstache dreamcatcher blue bottle cronut synth. Stumptown la croix lo-fi banh mi drinking vinegar microdosing portland fixie air plant. Tilde af pitchfork, XOXO shoreditch live-edge succulents copper mug gastropub master cleanse biodiesel farm-to-table. Keytar normcore selvage aesthetic food truck vexillologist. Forage fam lyft listicle leggings tattooed biodiesel bicycle rights street art pinterest keffiyeh locavore celiac retro unicorn. Jianbing celiac actually tbh freegan tumeric."
    },
    jobs: {
        enumerable: true,
        writable: true,
        value: "Profound statement on jobs - Lorem ipsum dolor amet cold-pressed drinking vinegar butcher cronut, you probably haven't heard of them wayfarers fingerstache la croix blue bottle activated charcoal. Taxidermy salvia beard gastropub unicorn craft beer asymmetrical cloud bread normcore pabst cliche tbh four loko. Butcher pabst coloring book meh cardigan palo santo wolf iPhone blog sriracha cloud bread fam ramps."
    }, 
    infrastructure: {
        enumerable: true,
        writable: true,
        value: "Profound statement on infrastructure - Bitters mustache artisan mixtape ennui hoodie succulents copper mug actually vexillologist af venmo ramps flannel bushwick. Art party ethical hella, iPhone edison bulb la croix keytar chicharrones meditation four loko pok pok kickstarter."
    }, 
    healthCare: {
        enumerable: true,
        writable: true,
        value: "Profound statement on healthcare - Etsy gastropub chambray drinking vinegar, next level la croix waistcoat leggings raw denim godard PBR&B tofu four loko put a bird on it. Tofu ugh live-edge, next level marfa wayfarers thundercats drinking vinegar chicharrones williamsburg YOLO paleo."
    },
    crimeAndReinforcement: {
        enuemrable: true,
        writable: true,
        value: "Profound statement on crime and reinforcement - Succulents schlitz hot chicken, mumblecore affogato 90's cold-pressed thundercats poutine roof party irony vegan cred. Farm-to-table tumblr forage, drinking vinegar skateboard pour-over pork belly vice wayfarers dreamcatcher scenester vaporware disrupt synth. Seitan master cleanse gluten-free, cardigan ennui street art adaptogen twee 8-bit kinfolk semiotics jean shorts vexillologist." 
    }
})
// function to update any platform statement
const modifyStatementInfo = (topic, newStatement) => {
    platformStatements[topic] = newStatement;
}

// const reformatStatements = (key, value) => {
//     platformStatements = Object.values(platformStatments);
// }
// Object to hold website for donation forms & register to vote
const urls = Object.create({}, {
    donationForms: {
        enumerable: true, 
        writable: false,
        value: "www.mywebsitefordistrict.com"
    },
    registerToVote: {
        enumerable: true,
        writable: false,
        value: "www.anotherwebsitetoregister.com"
    }
})

const modifyURLS = (key, value) => {
    urls[key] = value;

}
// Empty array to hold date of events
const calendarOfEvents = [];
// Object representing events on the calendar
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
            value: "Capitol Building"
        },
        demographic: {
            enumerable: true,
            writable: false,
            value: "Developers"
        },
        platformStatement: {
            enumerable: true,
            writable: false,
            value: platformStatements.value
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
// Empty arrays to hold values from objects
const volName = [];
const volAddress = [];
const volEmail = [];
const volPhone = [];
const volAvailability = [];
const volActivities = [];

// Object to hold all volunteer information
const volunteerInformation = Object.create({}, {
    volunteerOne: {
        name: {
            enumerable: true,
            writable: false,
            value: "Joseph Stalin Jr."
        }, 
        address: {
            enumerable: true,
            writable: false,
            value: "1235 Best Street way"
        },
        email: {
            enumerable: true,
            writable: false,
            value: "jStal@me.com"
        },
        phoneNumber: {
            enumerable: true,
            writable: false,
            value: "444-444-4444"
        },
        availability: {
            enumerable: true,
            writable: false,
            value: "Phone calls"
        },
        activities: {
            enuemrable: true,
            writable: false,
            value: ""//allVolunteerActivities.phoneCalls
        }
    }
})
// Object to hold all volunteer needs of campaigns
const allVolunteerActivities = Object.create({}, {
    phoneCalls: {
        enuemrable: true,
        writable: false,
        value: "Calling voters"
    },
    takingPolls: {
        enuemrable: true,
        writable: false,
        value: "Taking polls about needs of voter"
    },
    doorToDoor: {
        enuemrable: true,
        writable: false,
        value: "Walking neighborhoods and campaigning"
    }
})





































