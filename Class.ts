class student {
    name : string
    rollno : string
    branch : string
    year : string

    constructor(name: string, rollno: string, branch: string, year: string){
        this.name = name
        this.rollno = rollno
        this.branch = branch
        this.year = year
    }
    printInfo(){
        console.log(`name = ${this.name}`)
        console.log(`name = ${this.rollno}`)
        console.log(`name = ${this.branch}`)
        console.log(`name = ${this.year}`)

    }
}

const s1 = new student ('Raviraj','1804064','CSE','4')
const s2 = new student ('Mayur','1803056','IT','3')
s1.printInfo()
s2.printInfo()