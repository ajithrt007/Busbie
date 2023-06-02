import mongoose from "mongoose";
const { Schema } = mongoose;

const employeeSchema = new Schema({
  employeeDetails: {
    Name: String,
    PEN: String,
    PresentGrade: String,
    GradationNo: String,
    DOB: String,
    DOE: String,
    Unit: String,
    required: true,
  },
});
const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
