export { default as MacScrollbar } from './components/MacScrollbar.svelte'
export { default as ThemeToggle } from './components/ThemeToggle.svelte'
export { default as OnMount } from './components/OnMount.svelte'

export { initTheme, toggleTheme, applyTheme, theme } from './theme'

export { mobile, screenH, screenW, scrollY, mouse, mobileThreshold } from './stores'

export { log, wait, localStorageStore, asyncLocalStorageStore, mapRange, clamp } from './utils'

export { default as Fractils } from './stores/Device.svelte'

export { clickOutside, visibility } from './actions'

// import './actions/visibility/events.d'
export type {
	VisibilityEventDetail,
	VisibilityOptions,
	VisibilityEvent,
	ScrollDirection,
	Direction,
	Event,
} from './actions/visibility/'

// import './actions/clickOutside/events.d'
export type { ClickOutsideEventDetail, ClickOutsideEvent } from './actions/clickOutside/types'
