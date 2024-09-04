//task 2.5


const payments = [{
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe", // Name of the student
    payedAmount: 1600, // Amount payed with this transaction
    year: 2020, // The payment year
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1500,

    year: 2020
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023
  }
];


const studentPayment = payments.reduce((acc , {studentName , payedAmount,studentId})=>{
    if(!acc[studentName]){
	    acc[studentName] = {studentName, amount:[],studentId}
    }
	    acc[studentName].amount.push(payedAmount)
    return acc
},{})

const result = Object.values(studentPayment).map(({studentName , amount,studentId})=>{
    const TotalPayedAmount = amount.reduce((sum , payedAmount)=> sum += payedAmount)
        return {studentName , studentId, TotalPayedAmount}
})


console.log(result)