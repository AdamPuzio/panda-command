import { Command } from '../../command'

export const BasicCommand = new Command({
  name: 'basic'
})

export const OptsOnlyCommand = new Command({
  name: 'opts-only',
  silent: true,
  options: [{
    name: 'boolean',
    description: 'Example boolean option',
    type: Boolean,
    validate: async (val) => typeof val === 'boolean'
  }, {
    name: 'string',
    description: 'Example string option',
    type: String,
    validate: async (val) => typeof val === 'string'
  }, {
    name: 'number',
    description: 'Example number option',
    type: Number,
    validate: async (val) => typeof val === 'number'
  }]
})

export const ArgAndOptsCommand = new Command({
  name: 'args-and-opts',
  arguments: {
    name: 'name'
  },
  options: [{
    name: 'boolean',
    description: 'Example boolean option',
    type: Boolean
  }, {
    name: 'string',
    description: 'Example string option',
    type: String
  }, {
    name: 'number',
    description: 'Example number option',
    type: Number
  }]
})

export const MultiArgsCommand = new Command({
  name: 'multi-args',
  arguments: {
    name: 'name',
    multiple: true
  }
})