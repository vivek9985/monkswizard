import Blog from "@/Components/Section/Blog/Blog";
import PageHeader from "@/Components/Utils/PageHeader";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "MonksWizard - Blog",
};

export default function BlogPage() {
  return (
    <main>
      <PageHeader subtitle="Blog" title="Keep Up With The Latest Blog Posts And Insights" paragraph="We understand the importance of staying at the forefront of industry trends and developments. That's why we're committed to providing our clients with the latest insights." />
      <Blog />
    </main>
  );
}
