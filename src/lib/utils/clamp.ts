/**
 * Clamps a value between a min and max.
 */
export const clamp = (value: number, min: number, max: number) =>
	Math.max(Math.min(value, max), min)
