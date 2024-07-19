import type { ReactNode } from "react";

import { ClerkProvider } from "@clerk/nextjs";
import QueryProviders from "./query-client-provider";
import { ThemeProvider } from "./theme-provider";
const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider
			disableTransitionOnChange
			enableSystem
			attribute="class"
			defaultTheme="system"
		>
			<ClerkProvider
				appearance={{
					variables: {
						colorPrimary: "hsl(221.2 83.2% 53.3%)",
					},
				}}
			>
				<QueryProviders>{children}</QueryProviders>
			</ClerkProvider>
		</ThemeProvider>
	);
};

export default Providers;
