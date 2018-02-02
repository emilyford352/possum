import React, {Component, Children, cloneElement} from 'react'
import classNames from 'classnames'


class DropDownItem extends Component {
  render() {
    return (
        <li role="presentation">
            <a role="menuitem" href="#">HTML</a>
        </li>

    )
  }
}

export default class Accordion extends Component {

  static defaultProps = {
    active: null,
    dropdownTitle: 'Dropdown',
    numberOfRows: 1
  };

  render() {
    return (
        <div className="dropdown">
            <span>{this.props.dropdownTitle}</span>
            <div className="dropdown-content dropdown-on-mouseover">
                <p> hi </p>
            <DropDownItem/>
            </div>
        </div>
    )
  }
}

//DO HOVER DROPDOWN & CLICK DROPDOWN & STYLE ITTT!!