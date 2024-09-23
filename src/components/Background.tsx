
export function Background() {
	return (
		<div className="fixed h-full w-full bg-slate-950 -z-10">
			<div className={`absolute bottom-0 left-0 right-0 top-0 
				bg-gray-900
				`}
			>
			</div>
		</div>
	)
}

// bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]