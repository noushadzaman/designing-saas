import Tag from "@/components/Tag";
import FIGICO from "@/assets/images/figma-logo.svg";
import NOTOICO from "@/assets/images/notion-logo.svg";
import SLCKICO from "@/assets/images/slack-logo.svg";
import RLMICO from "@/assets/images/relume-logo.svg";
import FRMRICO from "@/assets/images/framer-logo.svg";
import GITHICO from "@/assets/images/github-logo.svg";
import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
    {
        name: "Figma",
        icon: FIGICO,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: NOTOICO,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: SLCKICO,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: RLMICO,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: FRMRICO,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: GITHICO,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden ">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center gap-16">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Plays well with
                            <span className="text-lime-400"> others</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            Layers seamlessly connects with your favorite too.
                            it easy to plug into any workflow and collaborative
                            platforms.
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] overflow-hidden mt-8 lg:mt-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] grid md:grid-cols-2 gap-4">
                            <IntegrationsColumn integrations={integrations} />
                            <IntegrationsColumn
                                className="hidden md:flex"
                                integrations={integrations.slice().reverse()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
