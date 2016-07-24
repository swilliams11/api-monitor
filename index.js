 
const optionDefinitions = [
  { name: 'verbose', alias: 'v', type: Boolean },
  { name: 'file', type: String, multiple: true, defaultOption: true },
  { name: 'timeout', alias: 't', type: Number }
]

const sections = [
  {
    header: 'A typical app',
    content: 'Generates something [italic]{very} important.'
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  }
]
const usage = getUsage(sections)
console.log(usage)


//get the options from the command line and store in a options variable
const options = commandLineArgs(optionDefinitions);


