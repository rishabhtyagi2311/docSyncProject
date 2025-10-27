
import { router, publicProcedure } from "../trpc";
import { userSignUp } from "../types/user";
import { client } from "../prisma/prisma";

export const userOnboardingRouter  = router({
    
    signUp : publicProcedure
    .input(userSignUp)
    .query(
        async (opts) => {
            // do the db stuff here
            return {
                "message" : "user signed up in dummy mode"
            }
        }
    )
  
}) 