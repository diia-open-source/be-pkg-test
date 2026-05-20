import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const stubsDir = resolve(scriptDir, '..', 'src', 'stubs', 'documents')
const indexPath = join(stubsDir, 'index.ts')

const names = readdirSync(stubsDir)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file) => file.slice(0, -'.ts'.length))
    .sort()

const importsBlock = names.map((name) => `import ${name} from './${name}.js'`).join('\n')
const mapBlock = names.map((name) => `    ${name},`).join('\n')

const content = `${importsBlock}

const documents: Record<string, unknown> = {
${mapBlock}
}

export default documents
`

let existing = ''
try {
    existing = readFileSync(indexPath, 'utf8')
} catch {
    /* index.ts may not exist yet on a fresh build */
}

if (existing === content) {
    console.log(`stubs/documents/index.ts already up to date (${names.length} stubs)`)
} else {
    writeFileSync(indexPath, content)
    console.log(`Regenerated stubs/documents/index.ts with ${names.length} stubs`)
}
