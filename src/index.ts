// src/index.ts
export function helloWorld(): string {
  return "Hello from my private package!";
}

export function lambdaHelper(event: any): any {
  console.log("Processing event:", event);
  return { statusCode: 200, body: "Success" };
}
