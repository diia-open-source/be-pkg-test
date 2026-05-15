import { createRequire } from 'node:module'
import path from 'node:path'

import { globSync } from 'glob'

const currentFile = import.meta.filename
const currentDir = import.meta.dirname
const require = createRequire(import.meta.url)

const documents: Record<string, unknown> = {}
const { name: selfFileName } = path.parse(currentFile)

for (const fileName of globSync(`${currentDir}/**.js`)) {
    const { name: fileNameWithoutExtension } = path.parse(fileName)

    if (fileNameWithoutExtension !== selfFileName) {
        documents[fileNameWithoutExtension] = require(fileName).default // nosemgrep: eslint.detect-non-literal-require
    }
}

export default documents
