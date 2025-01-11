export const DATE_TIME = 'dd/MM/yyyy hh:mm aaa'
export const DATE = 'dd/MM/yyyy'
export const TIME = 'hh:mm aaa'
export const DB_DATE = 'yyyy-MM-dd'

export const EVENT_LOCATIONS = {
  ['1.0']: {
    COMPLETE_ONBOARDING: { image: 'onboarding', x: 650, y: 165 },
    SHOW_ON_MAP_TOGGLED: { image: 'dashboard', x: 610, y: 165 },
    PROFILE_TOGGLED: { image: 'dashboard', x: 90, y: 280 },

    HIKING_PAUSED: { image: 'running', x: 640, y: 165 },
    HIKING_RESTARTED: { image: 'running', x: 640, y: 165 },
    ACTIVITY_TOGGLED: { image: 'running', x: 640, y: 260 },

    DIMENSION_TOGGLED: { image: 'running', x: 262, y: 281 },
    DIMENSION_TOGGLED_FAILED: { image: 'running', x: 262, y: 281, error: true },

    SYNC_TRAIL_DATA_STARTED: {
      image: 'running',
      x: 0,
      y: 0,
      run_on_background: true,
    },
    SYNC_TRAIL_DATA_FAILED: {
      image: 'running',
      x: 0,
      y: 0,
      error: true,
      run_on_background: true,
    },
  },
}
