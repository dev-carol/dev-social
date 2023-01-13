
type Props = {
    width?: string | number ;
    height?: string | number ;
    children: React.ReactNode
}



const ResponsiveIcon = ({width, height, children}: Props) => {
  return (
    <div style={{width, height}}>{children}</div>
  )
}

export default ResponsiveIcon;