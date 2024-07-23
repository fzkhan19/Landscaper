import Providers from "@/components/layout/Providers";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { JSON_LD, METADATA } from "@/constants/Metadata";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = METADATA;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={nunito.className}>
				<Providers>
					<Navbar />
					<main className="no-scrollbar m-0 overflow-x-hidden overflow-y-scroll scroll-smooth p-0">
						<script
							// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
							dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
							type="application/ld+json"
						/>
						{children}
					</main>
					<footer>
						<Footer />
					</footer>
				</Providers>
			</body>
		</html>
	);
}
