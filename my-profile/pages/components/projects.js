import projectsDB from "data/projects.json";

const projects = [...projectsDB];

export default function Projects() {
  return (
    <section
      className="bg-second text-black bg-contain space-y-5 pb-8 justify-center"
      aria-label="projects"
    >
      <h3 className="text-1 font-bold p-4 divide-y divide-black text-center  text-white">
        PROJECTS
      </h3>
      <div className="flex flex-wrap justify-center lg:flex-row xl:flex-row">
        {projects.map((project) => {
          return (
            <div className="py-3 w-3/4 flex-col gap-x-4 align-middle content-center items-center justify-center lg:flex lg:flex-col xl:flex xl:flex-col">
              <a
                key={project.id}
                id="project"
                href={project.link}
                target="_blank"
                type="button"
                className="pointer lg:mx-56 xl:mx-56 border p-4 items-center justify-center font-medium text-white rounded-lg bg-first transition duration:500 ease-in-out hover:bg-third transform hover:-translate-y-1 hover:scale-110"
              >
                {project.name}
              </a>
              <p className="text-lx text-white pt-4">{project.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
