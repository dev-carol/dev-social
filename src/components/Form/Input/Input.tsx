
type Props ={
   type?: 'text' | 'email' | 'password';
   name: string;
   id: string;
   placeholder: string;
}


const Input = ({type = 'text', name, id, placeholder}: Props) => {
   return (
    <input type={type} name={name} id={id} placeholder={placeholder}
    className="w-full outline-none
    hover:border-brandPrimary/900
     bg-white px-2 py-2 border-b-2 border-brandPrimary/600  rounded-[4px]
     placeholder:text-gray-500"
    />
   )
} 

export default Input;