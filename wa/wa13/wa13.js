// Problem 1
const employee1 = {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true
};

const employee2 = {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true
};

const employee3 = {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false
};

console.log("// Problem 1");
console.log(employee1, employee2, employee3);

// Problem 2
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: [employee1, employee2, employee3]
};

console.log("// Problem 2");
console.log(company);

// Problem 3
const newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
};

company.employees.push(newEmployee);

console.log("// Problem 3");
console.log(company);

// Problem 4
let totalSalary = 0;
for (const emp of company.employees) {
    totalSalary += emp.salary;
}

console.log("// Problem 4");
console.log("Total salary for all employees:", totalSalary);

// Problem 5
function applyRaises(companyData) {
    for (const emp of companyData.employees) {
        if (emp.raiseEligible) {
            emp.salary *= 1.10;
            emp.raiseEligible = false;
        }
    }
}

applyRaises(company);

console.log("// Problem 5");
console.log(company);

// Problem 6
const workingFromHome = ['Anna', 'Sam'];

for (const emp of company.employees) {
    emp.wfh = workingFromHome.includes(emp.firstName);
}

console.log("// Problem 6");
console.log(company);
