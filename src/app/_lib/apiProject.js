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