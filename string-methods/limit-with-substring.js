export function subString(str: string, limit: number): string {
	const len = str.length
	if (len > limit) {
		return str.substring(0, limit) + '...'
	}
	return str
}
