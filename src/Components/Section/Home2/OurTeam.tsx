import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import TeamCardTwo from "@/Components/Card/TeamCardTwo";
// import TeamMemberOne from "../../../../public/images/team-member-two.png";


export default function OurTeam() {
    return (
        <section className="bg-success-50 py-15 md:py-20 lg:py-[100px] xl:py-[120px]">
            <Container>
                <div className="flex flex-col gap-4 xl:gap-0 xl:flex-row items-center xl:justify-between">
                    <div className="w-11/12 md:w-8/12 lg:w-8/12 xl:max-w-[556px]">
                        <Badge variant="light" className="rounded-lg mx-auto xl:ml-0">Our Team </Badge>
                        <Heading variant="h2" className="mt-3 text-center xl:text-left">
                            Special Team Experts
                        </Heading>
                    </div>
                    <div className="xl:max-w-[430px] mx-auto xl:mr-0 text-center xl:text-left">
                        <Paragraph>
                            Meet our dedicated team of experts, committed to delivering innovative solutions tailored to your unique needs.
                        </Paragraph>
                    </div>
                </div>
                <div className="w-[280px] sm:w-10/12 md:w-[600px] lg:6/12 xl:w-full mx-auto mt-12 xl:mt-[60px] grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
                   <TeamCardTwo image="/images/team-member-one.png" name="Owen Parker" position="Sr. Java Engineer" />
                   <TeamCardTwo image="/images/team-member-two.png" name="Abdullah Noman" position="Product Designer" />
                   <TeamCardTwo image="/images/team-member-three.png" name="Nandi Hayes" position="Product Designer" />
                   <TeamCardTwo image="/images/team-member-four.png" name="Adnan Chowdhury" position="Product Designer" />
                </div>
            </Container>

        </section>
    );
}
