import { useRef, useState } from "react";

type Props = {
  name: string;
  placeholder?: string;
  id: string;
  label?: string;
};

const FileInput = ({
  name,
  id,
  label,
  placeholder = "Selecione uma foto",
}: Props) => {
  const [previews, setPreviews] = useState<{ name: string; image: any }[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  function renderImage(file: File) {
    return new Promise((resolve, reject) => {
      const render = new FileReader();
      render.readAsDataURL(file);
      render.onload = () => {
        resolve(render.result);
      };
      render.onerror = () => {
        reject();
      };
    });
  }

  function handleInputChange(values: React.ChangeEvent<HTMLInputElement>) {
    setPreviews([]);
    const files = values.target.files || [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      renderImage(file).then((image: any) => {
        setPreviews((prev) => {
          const copy = [...prev];
          copy.push({ name: file.name, image });
          return copy;
        });
      });
    }
  }
  return (
    <>
      {label && <span className="text-sm text-black pb-2">{label}</span>}

      <label
        htmlFor={name}
        className="w-full py-20 bg-white border border-dashed border-orange-500 rounded-[4px] flex flex-col items-center justify-center text-gray-500 cursor-pointer
    outline-none hover:bg-gray-100 hover:shadow-none focus:bg-brandPrimary/700 focus:shadow-none active:bg-gray-200 focus:ring-2 active:shadow-none ring-brandPrimary/100  text-base px-4  shadow-md transition-all duration-150
    "
      >
              <span className="text-gray-500 text-lg">{placeholder}</span>
        {previews?.length >= 0 && (
          <div className="w-full flex flex-col gap-2">
            {previews.map((preview, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-start  px-4  gap-2"
              >
                <img
                  src={preview.image}
                  alt={preview.name}
                  className="w-[200px] h-[200px]
            bg-no-repeat bg-contain rounded-md"
                />
                 <span className="text-gray-900 text-sm">{preview.name}</span>
              </div>
            ))}
          </div>
        )}
      </label>
      <input
        ref={inputRef}
        onChange={handleInputChange}
        type="file"
        name={name}
        id={id}
        className="hidden"
        multiple
        accept="image/jpg, image/jpeg, image/png"
      />
    </>
  );
};

export default FileInput;
