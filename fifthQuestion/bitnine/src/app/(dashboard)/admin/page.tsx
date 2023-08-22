
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import AdminNavBar from "./AdminNavBar";
import AdminBody from "./AdminBody";
import AdminFooter from "./AdminFooter";

const page = async () => {
    const session = await getServerSession(authOptions)
    const user = session?.user?.username || null;
    return (
        <>
            <AdminNavBar />
            <AdminBody user={user} />
            <AdminFooter />
        </>
        );


}

export default page;