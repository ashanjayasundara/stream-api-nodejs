import {createPool} from 'mysql';


export const connectionPool = createPool({
    port:parseInt(process.env.DB_PORT||"3306"),
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_SCHEME,
    connectionLimit:10
});
