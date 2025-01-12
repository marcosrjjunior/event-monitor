import { db, getData } from '.'

export const migrate = () => {
  db.prepare(
    `
      CREATE TABLE IF NOT EXISTS events (
        id VARCHAR(100) PRIMARY KEY NOT NULL,
        user_id VARCHAR(100) NOT NULL,
        name VARCHAR(100) NOT NULL,
        version VARCHAR(100) NOT NULL,
        device VARCHAR(100) NOT NULL,
        custom JSONB,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `,
  ).run()

  db.prepare(
    `
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(100) PRIMARY KEY NOT NULL,
        name VARCHAR(100) NOT NULL
      );
    `,
  ).run()
}

const seed = () => {
  insertEvents()
  insertUsers()
}

async function insertEvents() {
  const events = getData('events.json')

  const insertSQL = `
    INSERT INTO events (id, created_at, user_id, name, version, device, custom)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `

  const insert = db.prepare(insertSQL)
  const insertMany = db.transaction(events => {
    for (const event of events)
      insert.run({ ...event, custom: JSON.stringify(event.custom) })
  })

  insertMany(events)
}

async function insertUsers() {
  const users = getData('users.json')

  const insertSQL = `
    INSERT INTO users (id, name)
    VALUES (?, ?);
  `

  const insert = db.prepare(insertSQL)
  const insertMany = db.transaction(users => {
    for (const user of users) insert.run(user)
  })

  insertMany(users)
}

if (!process.argv[2]) {
  migrate()
}

if (process.argv[2]) {
  seed()
}
