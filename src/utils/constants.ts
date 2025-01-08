export const DATE_TIME = 'dd/MM/yyyy hh:mm aaa'

// [COMPLETE_ONBOARDING, SYNC_TRAIL_DATA, ACTIVITY_TOGGLED, DIMENSION_TOGGLED, HIKING_PAUSED, HIKING_RESTARTED, SHOW_ON_MAP_TOGGLED, PROFILE_TOGGLED]
export const EVENT_LOCATIONS = {
  ['1.0']: {
    COMPLETE_ONBOARDING: { image: 'onboarding', x: 650, y: 165 },
    SHOW_ON_MAP_TOGGLED: { image: 'dashboard', x: 610, y: 165 },
    PROFILE_TOGGLED: { image: 'dashboard', x: 90, y: 280 },

    HIKING_PAUSED: { image: 'running', x: 640, y: 165 },
    HIKING_RESTARTED: { image: 'running', x: 640, y: 165 },
    DIMENSION_TOGGLED: { image: 'running', x: 260, y: 280 },
    ACTIVITY_TOGGLED: { image: 'running', x: 640, y: 260 },

    SYNC_TRAIL_DATA: {
      image: 'running',
      x: 0,
      y: 0,
      run_on_background: true,
    },
  },
}
