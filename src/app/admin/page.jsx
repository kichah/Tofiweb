import ProjectsView from '@/components/admin/ProjectsView'
import { getProjects } from '../_lib/apiProject'

export default async function AdminProjectsPage() {
  const { projects } = await getProjects()

  return (
    <div className="py-12">
      <ProjectsView projects={projects} />
    </div>
  )
}
