import React, { useState } from 'react'

export default function useToggle(status) {
  const [value, setValue] = useState(status);

  const toggle = () => setValue(!value);

  return [value, toggle];
}
