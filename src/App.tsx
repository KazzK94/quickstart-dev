
import { Background } from './components/Background'
import { Header } from './components/Header'
import { QuickStartGuide } from './components/QuickStartGuide'

export default function App() {
	return (
		<>
			<Background />

			<div className="max-w-[1080px] mx-auto px-4 py-8">
				<Header
					title='Dev&apos;s Quick Start Guide'
					subtitle='Your cheat sheet for quickly starting new projects'
				/>
				<QuickStartGuide />
			</div>
		</>
	)
}
