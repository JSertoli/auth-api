import { sql } from "./database";
import { userProps } from "./models";

export class UserService {

    registerUser({ email, password }: userProps) {

        return sql`
            INSERT INTO users(email, password)
            VALUES(${email}, ${password})
        `;
    }
}