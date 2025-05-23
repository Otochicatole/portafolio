import CardProject from "../../../components/common/card-project.tsx";
import { projects } from "../../../components/arrays/array-projects.tsx";


export const Projects = () => {
    return (
        <>
            <h2 className="text-2xl lg:text-4xl">Proyectos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                {projects.map((project) => (
                    <CardProject key={project.id} project={project}/>
                ))}
            </div>
        </>
    )
}