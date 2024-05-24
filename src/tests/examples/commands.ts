import { Command } from '../../command'

export const BasicCommand = new Command({
  name: 'basic',

  arguments: [
    {
      name: 'name'
    }
  ]
})