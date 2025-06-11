import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "Sphero Swarm",
		description:
			"A swarm robotics project using 30+ Sphero robotics to form dynamic, interactive polymer structures.",
		image: "/projects/sphero.gif",
		imagePosition: "object-middle",
		tags: ["Robotics", "Computer Vision", "Project Management"],
		demoUrl: "https://wikipage.purduearc.com/sphero-swarm",
		githubUrl: "#",
	},
  {
		id: 2,
		title: "Squirrel Review",
		description:
			"An AI-powered web app for Purdue CS students, featuring a customized database of problem sets and integrated Linux shell for embedded coding. ",
		image: "/projects/squrriel.png",
		imagePosition: "object-top",
		tags: ["React", "NLP", "C", "AI", "Flask"],
		demoUrl: "https://devpost.com/software/squirrel-review",
		githubUrl: "https://github.com/alankang30/boilermake-xii",
	},
  {
		id: 3,
		title: "Automotive Radar Principles",
		description:
			"Self-written paper detailing the principles of automotive radar systems, including signal processing and target detection.",
		image: "/projects/radar.png",
		imagePosition: "object-middle",
		tags: ["MIMO", "Automotive Radar", "Matlab", "Signal Processing"],
		demoUrl: "https://d3ey0ivtc68uxj.cloudfront.net/public/b1042feab1c1ca133c00f53c1a25a250.pdf",
		githubUrl: "#",
	},
	{
		id: 4,
		title: "imAIthination",
		description:
			"A unique educational platform utilizing AI to generate unique images based on math word problems, enhancing learning through visual aids.",
		image: "/projects/imathination.jpeg",
		imagePosition: "object-middle",
		tags: ["NLP", "Image Generation", "CV", "Flask", "SQL"],
		demoUrl: "https://devpost.com/software/imaithination",
		githubUrl: "https://github.com/surface-integral/boilermake-2024",
	},
	{
		id: 5,
		title: "Variations in Cohort Definitions of DR",
		description:
			"Published literature review highlighting and analysing the discrepancies in cohort definitions of diabetic retinopathy (DR) across various studies.",
		image: "/projects/researchpaper.jpg",
		imagePosition: "object-top",
		tags: ["Data Analysis", "Python"],
		demoUrl: "https://doi.org/10.1016/j.xops.2024.100468",
		githubUrl: "#",
	},
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					{" "}
					when I was <span className="text-primary"> bored... </span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Crafted in continuity. Displayed discretely. 
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.id} // Use the unique `id` property from the project object
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
						>
							<div className="h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className={`w-full h-full object-cover ${project.imagePosition} transition-transform duration-500 group-hover:scale-110`}
								/>
							</div>

							<div className="p-6 flex flex-col flex-grow">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag, index) => (
										<span
											key={index} // Add a key for the tags as well (use index if tags are static)
											className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
										>
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-1">
									{" "}
									{project.title}
								</h3>
								<p className="text-muted-foreground text-sm mb-4 flex-grow">
									{project.description}
								</p>

								<div className="flex justify-between items-center mt-auto">
									<div className="flex space-x-3">
										<a
											href={project.demoUrl}
											target="_blank"
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<ExternalLink size={20} />
										</a>
										<a
											href={project.githubUrl}
											target="_blank"
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<Github size={20} />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<a
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank"
						href="https://github.com/priyankasoe"
					>
						Check My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};