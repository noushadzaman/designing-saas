import Button from "@/components/Button";
import DesignExample1Image from "@/assets/images/design-example-1.png";
import DesignExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="hidden lg:block absolute pointer-events-none -left-40 top-16">
                    <Image
                        src={DesignExample1Image}
                        alt="Design Example 1 Image"
                    />
                </div>
                <div className="hidden lg:block absolute pointer-events-none -right-72 -top-16">
                    <Image
                        src={DesignExample2Image}
                        alt="Design Example 2 Image"
                    />
                </div>
                <div className="hidden lg:block absolute left-56 top-96">
                    <Pointer name="Andrea" />
                </div>
                <div className="hidden lg:block absolute right-80 -top-4">
                    <Pointer name="Bryan" color="red" />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-t from-purple-400 to-purple-400 rounded-full text-neutral-800 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldn&apos;t slow you down. Layers
                    combination that keeps you in your creative flow. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                    vitae nemo molestias incidunt numquam, amet a.
                </p>

                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1 w-full"
                        name=""
                        id=""
                    />
                    <Button
                        className="whitespace-nowrap"
                        variant="primary"
                        type="submit"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
