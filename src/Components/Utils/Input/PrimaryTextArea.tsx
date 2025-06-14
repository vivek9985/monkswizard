import Paragraph from "../Paragraph/Paragraph";

interface TPrimaryTextAreaProps {
    label?: string
    placeholder: string
    name?: string
    rows?: number
    className?: string
}

export default function PrimaryTextArea({ label = "", placeholder = "placeholder", name = "", rows, className = "" }: TPrimaryTextAreaProps) {
    return (
        <div>
            {label &&
                <Paragraph variant="para-11" className="text-black mb-1">
                    <label>{label}</label>
                </Paragraph>
            }
            <textarea rows={rows} placeholder={placeholder} name={name} required className={`w-full bg-neutral-50 border-[1px] border-neutral-300 py-2.5 px-3 rounded-lg text-neutral-800 placeholder:text-[#A7A5A6] text-[16px] leading-[170%] font-[family-name:var(--font-outfit)] font-normal focus:outline-none ${className}`} />
        </div>
    )
}


