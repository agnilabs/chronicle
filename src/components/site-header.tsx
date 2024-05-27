import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import type { Route } from "next";
import Link from "next/link";
import CustomConnectButton from "./thirdweb/connect-button/ConnectButton";

export function SiteHeader() {
	return (
		<header className="fixed top-0 left-0 right-0 z-40 w-full border-b bg-background">
			<div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
				<MainNav items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-1">
						<CustomConnectButton />
						<Link
							href={siteConfig.links.github as Route}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={buttonVariants({ size: "icon", variant: "ghost" })}
							>
								<Icons.gitHub className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<Link
							href={siteConfig.links.X as Route}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={buttonVariants({ size: "icon", variant: "ghost" })}
							>
								<Icons.twitterX className="h-5 w-5 fill-current" />
								<span className="sr-only">Twitter</span>
							</div>
						</Link>
						<ModeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
