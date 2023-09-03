import { createServer } from "http";

const PORT = process.env.PORT || 8080;
const server = createServer((_, response) => {
  response.writeHead(200, {
    "Content-Type": "application/json",
  });

  response.write(
    JSON.stringify({ mensagem: "Hello world Joval Junior" })
  );

  response.end();
});

server.listen(PORT, () => console.log(`Listening ${PORT}`));