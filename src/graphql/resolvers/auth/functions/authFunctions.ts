import { eq, } from "drizzle-orm"
import { users } from "../../../../schema/user";
import { db } from "../../../../db/db";


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
        // check if user exist in db if exist then return success false otherwise add the user with pass encrypt
        const [findUser] = await db.select().from(users).where(eq(users.username, username))
        if (findUser) {
            return { success: false, message: "User already exist" }
        } else {
            await db.insert(users).values({
                username,
                password: Bun.password.hashSync(password, { algorithm: "bcrypt", cost: 10 }),
            })
            return { success: true, message: "User created" }
        }
    } catch (err) {
        return { success: false, message: "Something went wrong" }
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