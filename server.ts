import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { criptography } from "./middlewares/cryptography";
import { UserService } from "./users-service";

const server = fastify();

const { registerUser } = new UserService();

server.post("/register", async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = request.body as { email: string, password: string };

    const encodedPassword = criptography(password);

    await registerUser({ email: email, password: encodedPassword }).catch((error) => { reply.status(500).send(error) });

    return reply.status(201).send();
});

server.listen({ port: 3333 });