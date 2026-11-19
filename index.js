export function hello(name = "mundo") {
  return `hola ${name}`;
}

export async function handler(event) {
  const name = event?.name || "mundo";
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: hello(name) })
  };
}