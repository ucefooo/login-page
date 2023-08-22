import { Facebook, Github, Linkedin, Search, Youtube } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

const AdminNavBar = () => {
    return (
        <div className="flex absolute top-[60px] flex-col w-full h-[10%] bg-black p-3">
            <div className=" h-[15%] flex justify-end items-center p-3">
                <div className="bg-red flex justify-end items-center">
                    <div className="text-white p-2"><Link href="/"><Search size={20} color="#f5f5f5" strokeWidth={1} absoluteStrokeWidth /></Link> </div>
                    <div className="text-white pl-2 pr-8 py-4"><Link href='/'>CONTACT</Link></div>
                    <div className="text-white p-2"><Link href="/"><Github size={20} color="#fffafa" className="rounded-full" strokeWidth={1} absoluteStrokeWidth /></Link> </div>
                    <div className="text-white p-2"><Link href="/"><Youtube size={20} color="#f5f5f5" strokeWidth={1} absoluteStrokeWidth /></Link> </div>
                    <div className="text-white p-2"><Link href="/"><Linkedin size={20} color="#f5f5f5" strokeWidth={1} absoluteStrokeWidth /></Link> </div>
                    <div className="text-white p-2"><Link href="/"><Facebook size={20} color="#f5f5f5" strokeWidth={1} absoluteStrokeWidth /></Link> </div>
                </div>
            </div>
            <div className="h-[70%] flex justify-around items-center">
                <div className="w-[15%] h-[90%] flex items-center justify-center">
                    <Image src='/bitnine-logo_.png' alt='logo' width={235} height={61} objectFit="fill"></Image>
                </div>
                <div className="relative w-[75%] h-[90%] flex justify-around items-center">
                    <div className="text-lg text-yellow-400">PRODUCTS</div>
                    <div className="text-lg text-white hover:text-yellow-400">USE CASES</div>
                    <div className="text-lg text-white hover:text-yellow-400">SERVICES</div>
                    <div className="text-lg text-white hover:text-yellow-400">RESOURCES</div>
                    <div className="text-lg text-white hover:text-yellow-400">BLOG</div>
                    <div className="text-lg text-white hover:text-yellow-400">COMPANY</div>
                    <div className="text-lg text-white hover:text-yellow-400">IR</div>
                    <div className="text-lg text-white hover:text-yellow-400 bg-blue-800 rounded-md px-4 py-2"><button>TRY FREE</button></div>
                </div>
            </div>
        </div>
    )
}

export default AdminNavBar;