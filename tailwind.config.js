/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], // enable `.dark` class toggling
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Brand colors from logo
				'loop-blue': {
					'50': '#f0f4f8',
					'100': '#d1dce6',
					'200': '#a3b9cd',
					'300': '#7596b4',
					'400': '#4773a0',
					'500': '#2c5aa0',
					'600': '#1e3a5f',
					'700': '#162d47',
					'800': '#0e1f2f',
					'900': '#061017'
				},
				'loop-orange': {
					'50': '#fef5f0',
					'100': '#fce4d6',
					'200': '#f9c9ad',
					'300': '#f5ae84',
					'400': '#f2935b',
					'500': '#e67e22',
					'600': '#cc6f1e',
					'700': '#a55a18',
					'800': '#7e4512',
					'900': '#57300c'
				},
				// Updated navy to match logo colors
				navy: {
					'50': '#f0f4f8',
					'100': '#d1dce6',
					'200': '#a3b9cd',
					'300': '#7596b4',
					'400': '#4773a0',
					'500': '#2c5aa0',
					'600': '#1e3a5f',
					'700': '#162d47',
					'800': '#0e1f2f',
					'900': '#061017',
					'950': '#03080c'
				},
				// Updated teal to orange from logo
				teal: {
					'50': '#fef5f0',
					'100': '#fce4d6',
					'200': '#f9c9ad',
					'300': '#f5ae84',
					'400': '#f2935b',
					'500': '#e67e22',
					'600': '#cc6f1e',
					'700': '#a55a18',
					'800': '#7e4512',
					'900': '#57300c'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				border: 'hsl(var(--border))',
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
