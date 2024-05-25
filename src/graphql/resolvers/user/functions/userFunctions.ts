import { db } from "../../../../db/db"
import { users } from "../../../../schema/user"

export const getAllUsers = async () => {
    try {
        const allUsers = await db.select().from(users)
        return { success: true, message: "Found", data: allUsers }
    } catch (err) {
        return { success: false, message: err.message }
    }
}