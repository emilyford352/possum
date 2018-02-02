import React from 'react'
import Link from 'gatsby-link'
import Menu from 'possum/lib/Menu'
import Card from 'possum/lib/Card'
import Drawer from 'possum/lib/Drawer'

export default function Navigation() {
  return (
    <Drawer fixed>
      <nav className="rev-Drawer-contents">
        <Card>
          <Menu vertical>
            <Menu.Item text><strong>Grid</strong></Menu.Item>
            <Menu.Item><Link to="/components/grid/">Rows &amp; Columns</Link></Menu.Item>
            <Menu.Item><Link to="/components/ExpandingCol/">Expanding Columns</Link></Menu.Item>
          </Menu>
        </Card>
        <Card>
          <Menu>
            <Menu.Item text><strong>Forms</strong></Menu.Item>
            <Menu.Item><Link to="/components/Button/">Button</Link></Menu.Item>
            <Menu.Item><Link to="/components/Checkbox/">Checkboxes and Fieldsets</Link></Menu.Item>
            <Menu.Item><Link to="/components/Datepicker/">Date picker</Link></Menu.Item>
            <Menu.Item><Link to="/components/Input/">Input</Link></Menu.Item>
            <Menu.Item><Link to="/components/InputGroup/">Input Group</Link></Menu.Item>
            <Menu.Item><Link to="/components/Label/">Label</Link></Menu.Item>
            <Menu.Item><Link to="/components/Radio/">Radio</Link></Menu.Item>
            <Menu.Item><Link to="/components/Select/">Select</Link></Menu.Item>
            <Menu.Item><Link to="/components/Textarea/">Textarea</Link></Menu.Item>
          </Menu>
        </Card>
        <Menu>
          <Menu.Item text><strong>Lists</strong></Menu.Item>
          <Menu.Item><Link to="/components/Emptyable/">Emptyable</Link></Menu.Item>
          <Menu.Item><Link to="/components/Pagination/">Pagination</Link></Menu.Item>

          <Menu.Item text><strong>Formatting</strong></Menu.Item>
          <Menu.Item><Link to="/components/Currency/">Currency</Link></Menu.Item>
          <Menu.Item><Link to="/components/NumberFormatter/">Number Formatter</Link></Menu.Item>
          <Menu.Item><Link to="/components/Pluralize/">Pluralize</Link></Menu.Item>

          <Menu.Item text><strong>Navigation</strong></Menu.Item>
          <Menu.Item><Link to="/components/Menu/">Menu</Link></Menu.Item>
          <Menu.Item><Link to="/components/TopBar/">Top Bar</Link></Menu.Item>

          <Menu.Item text><strong>Cards &amp; Media</strong></Menu.Item>
          <Menu.Item><Link to="/components/Card/">Card</Link></Menu.Item>
          <Menu.Item><Link to="/components/CardLayout/">Card Layout</Link></Menu.Item>
          <Menu.Item><Link to="/components/FlexVideo/">Flex Video</Link></Menu.Item>
          <Menu.Item><Link to="/components/MediaObject/">Media Object</Link></Menu.Item>

          <Menu.Item text><strong>Containers</strong></Menu.Item>
          <Menu.Item><Link to="/components/Accordion/">Accordion</Link></Menu.Item>
          <Menu.Item><Link to="/components/Callout/">Callout</Link></Menu.Item>
          <Menu.Item><Link to="/components/Modal/">Modal</Link></Menu.Item>
          <Menu.Item><Link to="/components/Tabs/">Tabs</Link></Menu.Item>

          <Menu.Item text><strong>Atoms</strong></Menu.Item>
          <Menu.Item><Link to="/components/Badge/">Badge</Link></Menu.Item>
          <Menu.Item><Link to="/components/CloseButton/">Close Button</Link></Menu.Item>
          <Menu.Item><Link to="/components/Icon/">Icon</Link></Menu.Item>

          <Menu.Item text><strong>Utilities</strong></Menu.Item>
          <Menu.Item><Link to="/components/AuthenticityToken/">Authenticity Token</Link></Menu.Item>
          <Menu.Item><Link to="/components/BrowserSupportWarning/">Browser Support Warning</Link></Menu.Item>
          <Menu.Item><Link to="/components/HelpText/">Help Text</Link></Menu.Item>
          <Menu.Item><Link to="/components/Progress/">Progress</Link></Menu.Item>
          <Menu.Item><Link to="/components/Social/">Social</Link></Menu.Item>
          <Menu.Item><Link to="/components/TextAlign/">Text Align</Link></Menu.Item>
          <Menu.Item><Link to="/components/Visibility/">Visibility</Link></Menu.Item>

          <Menu.Item text><strong>Prototyping</strong></Menu.Item>
          <Menu.Item><Link to="/components/Lipsum/">Lorem Ipsum</Link></Menu.Item>

          <Menu.Item text><strong>Dropdowns</strong></Menu.Item>
          <Menu.Item><Link to="/components/Dropdown/">Dropdown</Link></Menu.Item>
        </Menu>
      </nav>
    </Drawer>
  )
}
