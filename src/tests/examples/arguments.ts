import { Command } from '../../command'

export const SingleArgumentCommand = new Command({
  name: 'single-argument',

  arguments: {
    name: 'name'
  }
})

export const MultipleArgumentsCommand = new Command({
  name: 'multiple-arguments',

  arguments: {
    name: 'name',
    multiple: true
  }
})

export const PositionalArgumentsCommand = new Command({
  name: 'positional-arguments',

  arguments: [
    {
      name: 'name',
      required: true
    },
    {
      name: 'age',
      type: Number
    }
  ]
})