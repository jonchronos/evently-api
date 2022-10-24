declare namespace NodeJS {
    export interface ProcessEnv {
        HOST: string;
        DB_PASS: string;
        PRIVATE_KEY: string;
    }

}
export type Auth = {
    pk: number | null
    id: string
    full_name: string | null
    email: string | null
    password: string
    status: boolean | null
    google: boolean | null
}