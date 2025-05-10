
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#22C55E', // Vibrant green
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#F59E0B', // Soft amber
					foreground: '#1E293B' // Dark slate
				},
				green: {
					DEFAULT: '#22C55E',
					light: '#86EFAC',
					dark: '#16A34A'
				},
				amber: {
					DEFAULT: '#F59E0B',
					light: '#FCD34D',
					dark: '#D97706'
				},
				slate: {
					DEFAULT: '#1E293B',
					light: '#334155',
					dark: '#0F172A'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
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
				},
				'fade-in': {
					from: {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-from-left': {
					from: {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-from-right': {
					from: {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'ping': {
					'75%, 100%': {
						transform: 'scale(2)',
						opacity: '0'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.4)'
					},
					'50%': {
						boxShadow: '0 0 0 10px rgba(34, 197, 94, 0)'
					}
				},
				'leaf-sway': {
					'0%, 100%': {
						transform: 'rotate(-3deg) scale(1)'
					},
					'50%': {
						transform: 'rotate(3deg) scale(1.05)'
					}
				},
				'grow-vine': {
					'0%': {
						height: '0%',
						opacity: '0.3'
					},
					'100%': {
						height: '100%',
						opacity: '1'
					}
				},
				'wave-motion': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease forwards',
				'slide-in-from-left': 'slide-in-from-left 0.5s ease forwards',
				'slide-in-from-right': 'slide-in-from-right 0.5s ease forwards',
				'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
				'scale-in': 'scale-in 0.3s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s infinite',
				'leaf-sway': 'leaf-sway 6s ease-in-out infinite',
				'grow-vine': 'grow-vine 2s ease-out forwards',
				'wave-motion': 'wave-motion 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
