
type Props = {
    href: string;
    children: React.ReactNode
}

const NavbarLink = ({children, href}: Props) => {
    return (
      <a href={href} className="font-bold text-base">{children}</a>
    )
 } 
 
export default NavbarLink;