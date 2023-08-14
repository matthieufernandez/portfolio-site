type Tech = {
    id: number,
    name: string,
    img: string,
}

type TechStack = Array<Tech>

type Project = {
    id: number,
    name: string,
    description: string, 
    link: string,
    img: string,
    video: string | null
}

type Projects = Array<Project>