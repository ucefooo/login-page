import Image from "next/image";
import Link from "next/link";

interface AdminBodyProps {
    user: string | null;
  }

const AdminBody = ({user}:AdminBodyProps) => {
    return (
        <div className="flex flex-col items-center justify-center w-[60%] space-y-14">
            {user ? 
                <div className="text-slate-600 text-4xl"><h1>Hello, you are signed-in, Weclome {user}</h1></div> 
            : 
                <div className="text-slate-600 text-4xl"><h1>Hello, Weclome GUEST, Please SIGN-IN</h1></div>
            }
            <Image src='/AgenSQL-Logo.png' alt='logo' width={301} height={60}></Image>
            <h1>An integration of Bitnine’s DB technology and PG expertise</h1>
            <div className="space-y-14">
                <div className="text-slate-600">
                    <p>AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of expertise
                    and knowledge accumulated through database research and development.</p>
                </div>
                <div className="text-slate-600">
                    <p>The enterprise package, along with AgensSQL engine, is an all-in-one solution that ensures
                    the efficiency and scalability of data management.</p>
                </div>
                <div className="text-slate-600">
                    <p>Get AgensSQL now for stable operation and management services at a reduced
                    maintenance cost.</p>
                </div>
            </div>
            <div className="flex items-center justify-around space-x-28">
                <div className="bg-blue-800 px-4 py-4 text-white rounded-lg"><Link href='/'>Contact</Link></div>
                <div className="bg-blue-800 px-4 py-4 text-white rounded-lg"><Link href='/'>Brochure</Link></div>
                <div className="bg-blue-800 px-4 py-4 text-white rounded-lg"><Link href='/'>Blog</Link></div>
            </div>
        </div>
    )
}

export default AdminBody;