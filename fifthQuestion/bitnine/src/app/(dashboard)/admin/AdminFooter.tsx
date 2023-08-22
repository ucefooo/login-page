import { Facebook, Github, Linkedin, Search, Youtube } from "lucide-react";
import Link from 'next/link';

const AdminFooter = () => {
    return (
        <footer className="footer absolute bg-black flex-col w-full h-[15%] text-white h bottom-0">
            <div className=" h-[85%] flex justify-around items-start p-3">
                <div className="flex flex-col items-center justify-center text-slate-400 space-y-2"><div className="text-slate-300 mb-3">PRODUCTS</div><div>Relational database</div><div>Graph DATABASE</div><div>Graph-based Solution</div></div>
                <div className="flex flex-col items-center justify-center text-slate-400 space-y-2"><div className="text-slate-300 mb-3">USE CASES</div></div>
                <div className="flex flex-col items-center justify-center text-slate-400 space-y-2"><div className="text-slate-300 mb-3">SERVICES</div></div>
                <div className="flex flex-col items-center justify-center text-slate-400 space-y-2"><div className="text-slate-300 mb-3">RESOURCES</div><div>Documentation</div><div>Learn</div></div>
                <div className="flex flex-col items-center justify-center text-slate-400 space-y-2"><div className="text-slate-300 mb-3">SERVICES</div></div>
                <div className="flex flex-col items-center justify-center text-slate-400 space-y-2"><div className="text-slate-300 mb-3">COMPANY</div><div>About Us</div><div>Contact</div></div>
            </div>
             <div className=" h-[15%] flex justify-between items-center p-3">
                <div className="text-slate-500">
                    2023 by Bitnine Global Inc.   All Rights Reserved. 
                </div>
                <div className="bg-red flex justify-end items-center">
                    <div className="text-white p-2"><Link href="/"><Search size={20} color="#f5f5f5" strokeWidth={1} absoluteStrokeWidth /></Link> </div>
                    <div className="text-white pl-2 pr-8 py-4"><Link href='/'>CONTACT</Link></div>
                    <div className="text-white p-2"><Link href="/"><Github size={20} color="#fffafa" className="rounded-full" strokeWidth={1} absoluteStrokeWidth /></Link> </div>
                    <div className="text-white p-2"><Link href="/"><Youtube size={20} color="#f5f5f5" strokeWidth={1} absoluteStrokeWidth /></Link> </div>
                    <div className="text-white p-2"><Link href="/"><Linkedin size={20} color="#f5f5f5" strokeWidth={1} absoluteStrokeWidth /></Link> </div>
                    <div className="text-white p-2"><Link href="/"><Facebook size={20} color="#f5f5f5" strokeWidth={1} absoluteStrokeWidth /></Link> </div>
                </div>
            </div>
        </footer>
    );
    }

export default AdminFooter;