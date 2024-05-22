import { eq, } from "drizzle-orm"
import { db } from "../db/db"
import { users } from "../schema/user"

const getUserByCredentials = async ({ username, password }) => {
    try {

        const [findUser] = await db.select().from(users).where(eq(users.username, username))

        console.log("findUser", findUser);

        return { username: findUser.username, password: findUser.password, id: findUser.id }

    } catch (err) {
        return
    }
}
const createUser = async ({ username, password }) => {
    try {
        const saveUser = await db.insert(users).values({
            username: username,
            role: "admin",
            rights: "*",
            password: password
        })
        console.log("saved");

        // if (saveUser) {
        // }
        return { success: true, message: "User signup successful" }
        // return { success: false, message: "User signup failed" }

    } catch (err) {
        console.log(err);

        return { success: false, message: err.message }
    }
}

// LOGIN
const loginUser = async ({ username, password }) => {
    try {
        console.log("user", username);

        const [findUser] = await db.select().from(users).where(eq(users.username, username))

        console.log("findUser", findUser);
        const isPassCorrect = Bun.password.verifySync(password, findUser.password || "")
        if (!isPassCorrect) {
            return { success: false, message: "Password incorrect" }
        }

        return { success: true, message: "Password correct", data: findUser }
    } catch (err) {
        return { success: false, message: "Something went wrong", data: err }
    }
}
export {
    createUser,
    loginUser,
    getUserByCredentials
}