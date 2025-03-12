import { Field } from "formik";
import * as Yup from "yup";
export const VaildationExp=Yup.object({
    email: Yup.string().email("Invalid email address").required("Please Enter Your Email"),
    password: Yup.string().required("Please Enter Your Password"),
  })

  export const Placeholder = (field)=>{
    return `Enter ${field?.toLowerCase()}`;
}
export const Check = {
    require: (field) => `${field.toLowerCase()} is required `,
    CheckValid: (field) => `${field.toLowerCase()} should be in invalid`,
}