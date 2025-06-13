import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground":
						"hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground":
						"hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
				// Custom colors for the campaign with your specified color codes
				mihuru: {
					gold: "#ffcc03",
					"gold-light": "#ffcc03",
					blue: "#2da5c6",
					"blue-light": "#2da5c6",
					dark: "#002d3a",
					green: "#03646a",
					text: "#eaf6fc",
					orange: "#ff9046",
					goldAccent: "hsl(var(--gold-accent))",
				},
			},
			fontFamily: {
				serif: ["Playfair Display", "serif"],
				sans: ["Poppins", "sans-serif"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				float: {
					"0%, 100%": {
						transform: "translateY(0)",
					},
					"50%": {
						transform: "translateY(-10px)",
					},
				},
				shimmer: {
					"0%": {
						backgroundPosition: "-500px 0",
					},
					"100%": {
						backgroundPosition: "500px 0",
					},
				},
				"pulse-glow": {
					"0%, 100%": {
						opacity: "1",
						boxShadow: "0 0 20px 3px rgba(255, 204, 3, 0.7)",
					},
					"50%": {
						opacity: "0.7",
						boxShadow: "0 0 40px 8px rgba(255, 204, 3, 0.9)",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				float: "float 3s ease-in-out infinite",
				shimmer: "shimmer 2s linear infinite",
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
			},
			backgroundImage: {
				"festive-pattern":
					"url('https://itraveleoblogdiag865.blob.core.windows.net/websiteimages/assets/images/marketing-bg.png')",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
