import { sql } from "./database";
import { userProps } from "./models";

export class UserService {

    async registerUser({ email, password }: userProps) {

        sql`SELECT * FROM users WHERE email = ${email};`.then((res) => {
            if (res.length === 0) {
                return sql`
                INSERT INTO users (email, password) VALUES (${email}, ${password});
            `;
            }
        });

    }

    login({ email, password }: userProps) {
        return sql`
        SELECT * FROM users WHERE email = ${email} AND password = ${password};
        `;
    }
}