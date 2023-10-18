import {Navbar} from "@/components/header";
import {Footer} from "@/components/footer"
import {About} from "@/components/about";
import {Sections} from "@/components/sections";
import {Nouveautes} from "@/components/nouveautes";
import menuC from "@/img/menuC.jpg";
import '../app/globals.css'

import Image from 'next/image';
import {Product} from "@/components/product";
import bande from "@/img/bande.jpg";

export default function Home() {
  return (
    <main>
        <header>
            <Navbar/>
        </header>

        <div className="bande relative">
            <Image
                src={bande}
                width={0}
                height={0}
                alt="bande décorative"
                style={{ width: '100%', height: '25rem', objectFit: 'none' }}
            />
            <h1 className="text-2xl absolute text-white z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4">
                Une promenade poétique entre Terre et Mer inspirée par la beauté de la Bretagne
            </h1>
        </div>

        <Nouveautes/>

        <Sections/>

        <Footer/>
    </main>
  )
}