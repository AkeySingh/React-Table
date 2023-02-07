import { NavItemContainer, NavItem } from './nav-component.style'

const NavComponent = () => {
  return (
    <div>
      <NavItemContainer>
        <NavItem>Basic</NavItem>
        <NavItem>Sorting </NavItem>
        <NavItem>Filter </NavItem>
        <NavItem>Server Side Pagination </NavItem>
      </NavItemContainer>
    </div>
  )
}

export default NavComponent
