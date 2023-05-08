import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import React from 'react'
import Header from './Header'

describe('Header', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Header />)
  })

  it('should render correct title', () => {
    render(<Header />)
    screen.getByText('O/E')
  })
})
