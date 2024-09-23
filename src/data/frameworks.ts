
export const frameworks = [
	{
		name: "React + Vite",
		steps: [
			{
				label: "Initialize Project",
				command: "npm create vite@latest"
			},
			{
				label: "Navigate to Project",
				command: "cd [app-name]"
			},
			{
				label: "Install Dependencies",
				command: "npm install"
			},
			{
				label: "Install Tailwind CSS",
				command: "npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p"
			},
			{
				label: "Configure Tailwind CSS (steps 3 and 4 on Tailwind CSS documentation for usage on Vite):",
				command: "https://tailwindcss.com/docs/guides/vite",
				isUrl: true
			},
			{
				label: 'Before installing shadcn (steps 3, 4 and 5 on shadcn documentation for usage on Vite):',
				command: 'https://ui.shadcn.com/docs/installation/vite',
				isUrl: true
			},
			{
				label: "Install shadcn/ui",
				command: "npx shadcn-ui@latest init"
			},
			{
				label: "Start Development Server",
				command: "npm run dev"
			}
		]
	},
	{
		name: "Next.js",
		steps: [
			{
				label: "Initialize Project",
				command: "npx create-next-app@latest"
			},
			{
				label: "Navigate to Project",
				command: "cd [app-name]"
			},
			{
				label: "Install shadcn/ui",
				command: "npx shadcn-ui@latest init"
			},
			{
				label: "Start Development Server",
				command: "npm run dev"
			}
		]
	}
]