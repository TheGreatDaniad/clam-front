import React from "react";
import { useRouter } from "next/navigation";

import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }: any) {
    const router = useRouter();

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
        >
            <div
                className="fixed inset-0 bg-[#faf6f2cc] backdrop-blur-[40px] z-[-1]"
            />
            <div className="z-10 max-w-5xl mb-6 w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="lg:flex justify-between w-full ">
                    <nav className="lg:flex ">
                        <div className={styles.navItem} onClick={() => router.push("/")}>
                            Home
                        </div>
                        <div
                            className={styles.navItem}
                            onClick={() => router.push("/pricing")}
                        >
                            Pricing
                        </div>
                        <div
                            className={styles.navItem}
                            onClick={() => router.push("/about")}
                        >
                            About
                        </div>
                    </nav>
                </div>

                <div className="font-bold font-sans text-lg fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    PodcastX
                </div>
            </div>

            <div className="mt-8 mx-20 relative w-4/5 h-full mb-auto">

                {children}
            </div>
        </main>
    );
}
