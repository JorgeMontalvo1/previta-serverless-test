import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function mySecondFunction(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    const requestBody = await request.text();

    const body = JSON.parse(requestBody);
    console.log('body --> ', body);

    return { body: `Hello, ${body.name}` };
};

app.http('mySecondFunction', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: mySecondFunction
});
