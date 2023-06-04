import { connectMongoDB } from "@/libs/MongoConnect";
import Employee from "@/model/EmployeeSchema";

connectMongoDB();

export default async function handler(req, res) {
  //   res.status(201).send("Hi there");
  // if (req.method !== "POST") {
  //   res.status(405).send({ msg: "Only post request are allowed" });
  //   return;
  // }

  const { name, emp } = req.body;

  try {
    await connectMongoDB();
    Employee.create({ name, emp }).then((data) => {
      console.log(data);
      res.status(201).send(data);
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, msg: "Something went wrong" });
  }
}
export default function handler(req, res) {
    res.json({
      time: new Date().toJSON(),
    });
  }