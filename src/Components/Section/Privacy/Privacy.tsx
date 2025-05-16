import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";

export default function Privacy() {
    return (
        <section className="py-[110px]">
            <div className="max-w-[800px] mx-auto">
                <Heading variant="h2">Privacy Policy</Heading>
                <div className="flex flex-col gap-10 mt-12">
                    <div>
                        <Heading variant="h6">Collecting Personal Information :</Heading>
                        <Paragraph variant="para-11" className="mt-3">
                            We collect personal data, such as your name, email, contact details, and browsing information, to enhance your experience and improve our services. By accessing or using our website, you consent to the collection and secure handling of this information.
                        </Paragraph>
                    </div>
                    <div>
                        <Heading variant="h6">Sharing Personal Information :</Heading>
                        <Paragraph variant="para-11" className="mt-3">
                            Your personal information is never sold or rented to third parties. We only share data with trusted partners for service delivery, legal compliance, or in the event of a business transfer, ensuring confidentiality and security at all times.
                        </Paragraph>
                    </div>
                    <div>
                        <Heading variant="h6">Payment Terms:</Heading>
                        <Paragraph variant="para-11" className="mt-3">
                           We accept various payment methods, including credit cards and bank transfers. Payments are processed securely, and all applicable taxes or fees will be clearly communicated. Billing cycles and subscription terms are specified during service agreements.
                        </Paragraph>
                    </div>
                    <div>
                        <Heading variant="h6">Privacy Policy:</Heading>
                        <Paragraph variant="para-11" className="mt-3">
                            Our privacy policy outlines how we collect, use, store, and protect your data. It also details your rights regarding your information, including access, correction, and deletion requests, ensuring transparency and trust.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </section>
    )
}