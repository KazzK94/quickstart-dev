
export function Header({ title, subtitle }: { title: string, subtitle: string }) {
	return (
		<header className="text-center mb-8">
			<h1 className="text-3xl font-bold mb-2 text-white">{title}</h1>
			<p className="text-lg text-white/80">
				{subtitle}
			</p>
		</header>
	)
}