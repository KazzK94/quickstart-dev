
export interface Framework {
	name: string
	steps: { label: string; command: string; isUrl?: boolean }[]
}