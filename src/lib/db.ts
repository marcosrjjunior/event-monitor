import fs from 'fs'
import path from 'path'

const readFile = fileName => {
  const filePath = path.join(process.cwd(), 'data', fileName)
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

export const getData = (fileName, page = 1, limit = 10) => {
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

export const count = (fileName, limit = 10) => {
  try {
    const data = readFile(fileName)

    const totalPages = Math.ceil(data.length / limit)

    return totalPages
  } catch (error) {
    console.error('[db.ts:count]', error)
    throw new Error(`Failed to load data from ${fileName}`)
  }
}
