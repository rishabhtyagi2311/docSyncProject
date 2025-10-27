import express from "express"
import *  as trpcExpress from '@trpc/server/adapters/express' 
import appRouter from "./routers/_app"


const app = express()

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router :  appRouter
    })
)

app.listen(3000)