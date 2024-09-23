
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, CopyIcon, CheckIcon } from "lucide-react"
import { frameworks } from '@/data/frameworks'

import { Framework } from '@/types'

export function QuickStartGuide() {
	return (
		<Tabs defaultValue={frameworks[0].name.toLowerCase()} className="w-full">
			<TabsList className="grid w-full grid-cols-2 gap-1 bg-white/40">
				{frameworks.map((framework) => (
					<FrameworkTab key={framework.name} framework={framework} />
				))}
			</TabsList>
			{frameworks.map((framework) => (
				<FrameworkGuide key={framework.name} framework={framework} />
			))}
		</Tabs>
	)
}

function FrameworkTab({ framework }: { framework: Framework }) {
	return (
		<TabsTrigger
			key={framework.name}
			value={framework.name.toLowerCase()}
			className='text-gray-900 data-[state=active]:text-black data-[state=active]:bg-gray-200'>
			<span className="flex items-center gap-2">
				<Code className="size-4" />
				{framework.name}
			</span>
		</TabsTrigger>
	)
}

function FrameworkGuide({ framework }: { framework: Framework }) {
	return (
		<TabsContent key={framework.name} value={framework.name.toLowerCase()}>
			<Card className='bg-gray-800 text-white'>
				<CardHeader>
					<CardTitle className='text-2xl'>{framework.name}</CardTitle>
					<CardDescription className='text-white/80'>Quick setup guide for {framework.name} with shadcn/ui and Tailwind CSS</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					{framework.steps.map((step, index) => (
						<Step key={index} command={step.command} label={step.label} isUrl={step.isUrl} />
					))}
				</CardContent>
			</Card>
		</TabsContent>
	)
}

export function Step({ label, command, isUrl }: { label: string, command: string, isUrl: boolean | undefined }) {
	return (
		<div>
			<Label className='text-md'>{label}</Label>
			<div className="flex mt-1">
				{
					isUrl
						? (
							<GuideLink url={command} />
						)
						: (
							<GuideCommand command={command} />
						)
				}

			</div>
		</div>
	)
}

function GuideLink({ url }: { url: string }) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="text-sm hover:underline px-3 py-2 border rounded w-full shadow-sm text-blue-400 bg-gray-700 border-gray-600">
			{url}
		</a>
	)
}

function GuideCommand({ command }: { command: string }) {

	const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopiedCommand(text)
			setTimeout(() => setCopiedCommand(null), 1000)
		})
	}

	return (
		<>
			<Input readOnly value={command} className='bg-gray-700 text-white border-gray-600' />
			<Button
				onClick={() => copyToClipboard(command)}
				className="ml-2 bg-gray-500/90 hover:bg-gray-500/75"
				aria-label={`Copy command: ${command}`}
			>
				{copiedCommand === command ? (
					<CheckIcon className="w-4 h-4 text-green-500" />
				) : (
					<CopyIcon className="w-4 h-4" />
				)}
			</Button>
		</>
	)
}