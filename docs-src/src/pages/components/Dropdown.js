import React, {Component} from 'react'
import ExampleSection from '../../ExampleSection'
import scope from '../../ExampleScope'

const examples = {
    'Dropdown': require('raw!../../examples/Dropdown/Basic.js.example')
}

export default class Dropdown extends Component {
  render() {
    return <div>
      <ExampleSection title="Dropdown" examples={examples} depth={1} scope={scope} />
    </div>
  }
}
