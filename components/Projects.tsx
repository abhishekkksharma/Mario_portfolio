import MappedProjects from './MappedProjets';
import {StackRazeImg1,StackRazeImg2,AtomImg1,AtomImg2,AtomImg3} from "@/assets/Projects/projectImages"

const projects = [
  {
    name: "Atom",
    content:
      "Atom is a supportive mental-health ecosystem created for individuals with emotional needs, offering compassionate assistance through an AI-powered chatbot and guided self-assessments for depression.",
    link: "https://mental-health-management-system-chi.vercel.app/",
    githubLink: "https://github.com/shr5ya/ATOM---Mental-Health-Ecosystem",
    tech: ["React.js", "Tailwind CSS", "Supabase"],
    images: [AtomImg1,AtomImg2,AtomImg3],
  },
  {
    name: "Stackraze",
    content:
      "Stackraze is a developer community platform for sharing knowledge, connecting with developers, and collaborating through posts, messaging, and location-based features.",
    link: "https://stackraze.vercel.app/",
    githubLink: "https://github.com/shr5ya/Stackraze---A-Dev-Community-Platform",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    images: [StackRazeImg1,StackRazeImg2],
  },
];

function Projects() {
  return (
    <div>
      <MappedProjects projects={projects} />
    </div>
  )
}

export default Projects