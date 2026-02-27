import path from 'node:path'

import { globSync } from 'glob'

const documents: Record<string, unknown> = {}
const { name: selfFileName } = path.parse(__filename)

for (const fileName of globSync(__dirname + '/**.js')) {
    const { name: fileNameWithoutExtension } = path.parse(fileName)

    if (fileNameWithoutExtension !== selfFileName) {
        // eslint-disable-next-line security/detect-non-literal-require
        documents[fileNameWithoutExtension] = require(fileName).default // nosemgrep: eslint.detect-non-literal-require
    }
}

export default documents
