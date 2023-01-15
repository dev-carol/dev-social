type Props = {
  rows?: number;
  name: string;
  id: string;
  placeholder: string;
  label?: string;
};

const TextArea = ({ rows= 5,name, id, placeholder, label }: Props) => {
  return (
   <>
     {
      label &&  <label htmlFor={name} className="text-sm text-black pb-2">{label}</label>
     }
  
    <textarea
  rows={rows}
      name={name}
      id={id}
      placeholder={placeholder}
      className="w-full outline-none
    hover:border-brandPrimary/900
     bg-white px-2 py-2 border-b-2 border-brandPrimary/600  rounded-[4px]
     placeholder:text-gray-500"
    />
       </>
  );
};

export default TextArea;
