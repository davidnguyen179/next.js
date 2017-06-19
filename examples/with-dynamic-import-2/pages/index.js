import React from 'react'
import dynamic from 'next/dynamic'

const Button = dynamic(import('../components/Button'))

export default class Index extends React.Component {
  static getInitialProps ({ query }) {
    return { query }
  }

  render () {
    return (
      <div>
        <Button />
        <Button />
      </div>
    )
  }
}
