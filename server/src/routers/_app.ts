import { userOnboardingRouter } from "./userOnboardingRouter";
import { maintainerOnboardingRouter } from "./maintainerOnboardingRouter";
import { router } from "../trpc";
import { userSignUp } from "../types/user";


const appRouter = router({

    userOnboarding : userOnboardingRouter,
    maintainerOnboarding : maintainerOnboardingRouter
})

export default appRouter