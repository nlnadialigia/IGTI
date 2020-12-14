import {promise as fs} from 'fs'

export async function readFile() {
    const data = await fs.readFile('grades.json')

    return data
}
