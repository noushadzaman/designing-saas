import { useAnimate, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import Pointer from "./Pointer";
import DesignExample1Image from "@/assets/images/design-example-1.png";
import DesignExample2Image from "@/assets/images/design-example-2.png";

export default function HeroElements() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { y: [0, 16, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 0.5 },
            ],
            [
                rightDesignScope.current,
                { y: 0, x: 0 },
                { duration: 0.5, delay: 0.5 },
            ],
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 0.5 },
            ],
            [
                rightPointerScope.current,
                { y: 0, x: 175 },
                { duration: 0.5, delay: 0.5 },
            ],
            [
                rightPointerScope.current,
                { y: [0, 20, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, []);

    return (
        <div>
            <motion.div
                ref={leftDesignScope}
                initial={{ opacity: 0, y: 100, x: -100 }}
                drag={true}
                className="hidden lg:block absolute -left-40 top-16"
            >
                <Image
                    src={DesignExample1Image}
                    alt="Design Example 1 Image"
                    draggable="false"
                />
            </motion.div>
            <motion.div
                ref={leftPointerScope}
                initial={{ opacity: 0, y: 100, x: -200 }}
                className="hidden lg:block absolute left-56 top-96"
            >
                <Pointer name="Andrea" />
            </motion.div>

            <motion.div
                ref={rightDesignScope}
                initial={{ opacity: 0, y: 100, x: 100 }}
                drag
                className="hidden lg:block absolute -right-72 -top-16"
            >
                <Image
                    src={DesignExample2Image}
                    alt="Design Example 2 Image"
                    draggable="false"
                />
            </motion.div>
            <motion.div
                ref={rightPointerScope}
                initial={{ opacity: 0, x: 275, y: 100 }}
                className="hidden lg:block absolute right-80 -top-4"
            >
                <Pointer name="Bryan" color="red" />
            </motion.div>
        </div>
    );
}
