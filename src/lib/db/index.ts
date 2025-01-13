import fs from 'fs'
import path from 'path'

import Database from 'better-sqlite3'

const databasePath = path.join(process.cwd(), 'project.db')

export const db = new Database(databasePath, {})

const readFile = fileName => {
  const filePath = path.join(process.cwd(), 'data', fileName)
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

export const getData = (fileName, page = 1, limit = 99999) => {
  try {
    const data = readFile(fileName)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    return data.slice(startIndex, endIndex)
  } catch (error) {
    console.error('[db.ts:getData]', error)
    throw new Error(`Failed to load data from ${fileName}`)
  }
}
