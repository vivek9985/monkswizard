// import Link from "next/link";
import Paragraph from "../Utils/Paragraph/Paragraph";
import Heading from "../Utils/Heading/Heading";
import Image from "next/image";
import Badge from "../Utils/Badge/Badge";
import Link from "next/link";

interface TBlogWidgetProps {
    image: string;
    title: string;
    authorProfile: string;
    authorName: string;
    category: string;
    link: string;
    date: string;
    className?: string;
}


export default function BlogWidget({ image, authorProfile, authorName, title, category, link, date, className }: TBlogWidgetProps) {
    return (
        <div className={`group ${className}`}>
            <div className="rounded-[20px] overflow-hidden">
                <Image className="w-full h-full object-cover group-hover:scale-110 duration-300" src={image} alt="" width={358} height={268} />
            </div>
            <div className="my-4 flex items-center justify-between">
                <Badge variant="light" className="rounded-lg">{category}</Badge>
                <Paragraph variant="para-12" className="text-neutral-700">{date}</Paragraph>
            </div>
            <Link href={`/blog/${link}`}>
                <Heading variant="h5" className="inline text-black hover:text-success-600 duration-300">{title}</Heading>
            </Link>
            <div className="flex items-center gap-3 mt-4">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                    <Image className="w-full h-full object-cover" src={authorProfile} alt="" width={36} height={36} />
                </div>
                <Paragraph variant="para-11" className="text-neutral-500">{authorName}</Paragraph>
            </div>
        </div>
    )
}