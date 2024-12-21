import { type IntegrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function IntegrationsColumn(props: {
    integrations: IntegrationsType;
    className?: string;
}) {
    const { integrations, className } = props;

    return (
        <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
            {integrations.map((int) => (
                <div
                    key={int.name}
                    className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                >
                    <div className="flex justify-center">
                        <Image
                            src={int.icon}
                            className="size-24 pointer-events-none"
                            width={500}
                            height={500}
                            alt={int.name}
                        />
                    </div>
                    <h3 className="text-3xl text-center mt-6">{int.name}</h3>
                    <p className="text-center text-white/50 mt-2">
                        {int.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
