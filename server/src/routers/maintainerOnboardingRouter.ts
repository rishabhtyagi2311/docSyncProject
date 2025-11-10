
import { router, publicProcedure } from "../trpc";
import { maintainerSignUp} from "../types/maintainer";
import { client } from "../../prisma/prisma";

export const maintainerOnboardingRouter  = router({
    
    signUp : publicProcedure
    .input(maintainerSignUp)
    .query(
        async (opts) => {
            // do the db stuff here
            return {
                "message" : "maintainer signed up in dummy mode"
            }
        }
    )
  
}) 