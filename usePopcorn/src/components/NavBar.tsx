import type { ReactNode } from "react"

const Logo = () => {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  )
}

export const NavBar = ({ children }: { children: ReactNode }) => {

  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  )
}
