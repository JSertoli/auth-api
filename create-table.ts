import { sql } from './database';

// sql`DROP TABLE users`.then(() => console.log('Table dropped!'));

sql`
        CREATE TABLE users(
            id          SERIAL PRIMARY KEY,
            email       TEXT,
            password    TEXT
        );
    `.then(() => console.log('Table created!'));