import React from 'react'

import * as Styles from './styles'

const AddForm: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <Styles.Form isVisible={isVisible}>hello</Styles.Form>
)

export default AddForm
