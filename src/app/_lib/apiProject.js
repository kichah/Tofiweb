import supabase from "./supabase";

export async function getProjects() {
    let { data: projects, error } = await supabase
        .from('Projects')
        .select('*')
    if (error) {
        throw error;
    }
    return { projects, error };
}

export async function getProjectById(id) {
    let { data, error } = await supabase
        .from('Projects')
        .select("*")
        .eq('id', id)
    if (error) {
        throw error;
    }
    const project = data[0];

    return { project, error };
}
