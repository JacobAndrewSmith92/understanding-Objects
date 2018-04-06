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