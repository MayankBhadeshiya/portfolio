import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { profile } from "@/data/profile";
import { getNextProject, getProject } from "@/data/projects";
import { strings } from "@/constants/strings";
import Nav from "@/components/nav";
import ProjectDetail from "@/components/projectDetail";
import Contact from "@/components/contact";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return profile.projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.name}${strings.meta.titleSeparator}${profile.name}`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <a className="skip-link" href="#main">
        {strings.a11y.skipToContent}
      </a>
      <Nav />
      <main id="main">
        <ProjectDetail project={project} next={getNextProject(slug)} />
      </main>
      <Contact />
    </>
  );
}
