import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { UserService } from "../services/user.service";

export async function myFirstFunction(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const user = await UserService.getUser();

    return { body: `Hello, ${user}!` };
};

app.http('myFirstFunction', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: myFirstFunction
});
