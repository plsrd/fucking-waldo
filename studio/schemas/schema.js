
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import level from './level'
import character from './character'
import levelScore from './levelScore'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    level,
    character,
    levelScore,
  ]),
})
