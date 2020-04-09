import { Handler, Context } from "aws-lambda";
import { Hello } from "./model/Hello";

const lambda: Handler = async (event: any, context: Context): Promise<Hello> => {
    console.log("AWS lambda Logging Hello World function");
    console.log("body received: ", event.body);
    const newHello: Hello = { message: "Hello World" };
    return newHello;
}

export default lambda;
