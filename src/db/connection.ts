import pgPromise from 'pg-promise';

const pgp = pgPromise();

export const db = pgp({connectionString: 'postgres://postgres:handoko@localhost:5432/van-express-db'})

