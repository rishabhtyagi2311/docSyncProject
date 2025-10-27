import {z} from "zod"

export const userSignUp = z.object({
    firstName : z.string,
    lastName : z.string,
    email : z.email,
    password : z.string
})