import Paragraph from "../Paragraph/Paragraph";

interface TPrimaryInputProps {
    label?: string
    placeholder: string
    type?: "text" | "email" | "number"
    name?: string
    className?: string
}

export default function PrimaryInput({ label = "", placeholder = "placeholder", type = "text", name = "", className = "" }: TPrimaryInputProps) {
    return (
        <div>
            {label &&
                <Paragraph variant="para-11" className="text-black mb-1">
                    <label>{label}</label>
                </Paragraph>
            }
            <input type={type} placeholder={placeholder} name={name} required className={`w-full bg-neutral-50 border-[1px] border-neutral-300 py-2.5 px-3 rounded-lg text-neutral-800 placeholder:text-[#A7A5A6] text-[16px] leading-[170%] font-[family-name:var(--font-outfit)] font-normal focus:outline-none ${className}`} />
        </div>
    )
}


