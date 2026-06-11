import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-8 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
                    {SOCIAL_LINKS.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground capitalize hover:underline hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div>
                    <p className="leading-none text-muted-foreground">
                        Design &amp; built by Matyas Odehnal
                    </p>
                    <a
                        href={GENERAL_INFO.siteUrl}
                        className="text-sm text-muted-foreground hover:underline hover:text-white"
                    >
                        {GENERAL_INFO.siteUrl.replace('https://', '')}
                    </a>
                    <p className="mt-4 text-[10px] leading-tight text-muted-foreground/40">
                        Fork credit:{' '}
                        <a
                            href="https://www.tajmirul.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-muted-foreground/70"
                        >
                            tajmirul.site
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
