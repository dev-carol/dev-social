import NavbarLink from "../NavbarLink/NavbarLink";

type Props = {
   items: {label: string; href: string;}[];
}

const NavbarLinks = ({items}: Props)=> {
   return (
    <div className="flex items-center justify-center gap-4 text-white">
      {items.map((item,index) =>(
     <NavbarLink key={index} href={item.href}>{item.label}</NavbarLink>
      ))}
   
   
    </div>
   )
} 

export default NavbarLinks;

