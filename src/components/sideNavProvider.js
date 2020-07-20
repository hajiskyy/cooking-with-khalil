import React, { useState, createContext } from 'react'

export const sideNavContext = createContext()

export default function SideNavProvider({ children }) {
  const [sideNav, toggle] = useState(false);
  return (
    <sideNavContext.Provider value={[sideNav, toggle]}>
      {children}
    </sideNavContext.Provider>
  )
}
