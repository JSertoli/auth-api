import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { criptography } from "./middlewares/cryptography";
import { UserService } from "./users-service";

const server = fastify();

const { registerUser, login } = new UserService();

server.post("/register", async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = request.body as { email: string, password: string };

    const encodedPassword = criptography(password);

    await registerUser({ email: email, password: encodedPassword }).then((res) => { res == undefined ? reply.status(400).send("This user already exists!") : null });

    return reply.status(201).send();
});

server.post("/login", async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = request.body as { email: string, password: string };

    const encodedPassword = criptography(password);

    const userLogin = await login({ email: email, password: encodedPassword });

    if (userLogin.length === 0) {
        return reply.status(401).send("This user not exist!");
    }

    return reply.status(200).send("User logged in successfully!");
});

server.listen({ port: 3333 });