export const DATE_TIME = 'dd/MM/yyyy hh:mm aaa'
export const DATE = 'dd/MM/yyyy'
export const TIME = 'hh:mm aaa'
export const DB_DATE = 'yyyy-MM-dd'

export const EVENT_LOCATIONS = {
  ['1.0']: {
    COMPLETE_ONBOARDING: { image: 'onboarding', x: 540, y: 140 },
    SHOW_ON_MAP_TOGGLED: { image: 'dashboard', x: 505, y: 140 },
    PROFILE_TOGGLED: { image: 'dashboard', x: 60, y: 240 },

    HIKING_PAUSED: { image: 'running', x: 530, y: 140 },
    HIKING_RESTARTED: { image: 'running', x: 530, y: 140 },
    ACTIVITY_TOGGLED: { image: 'running', x: 530, y: 222 },

    DIMENSION_TOGGLED: { image: 'running', x: 205, y: 240 },
    DIMENSION_TOGGLED_FAILED: { image: 'running', x: 205, y: 240, error: true },

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
