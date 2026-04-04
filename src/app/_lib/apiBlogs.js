import supabase from "./supabase";

export async function getAllBlogs() {
    let { data: Blogs, error } = await supabase
        .from('Blogs')
        .select('*')
    if (error) {
        throw error;
    }
    return { Blogs, error };
}

export async function getBlogBySlug(slug) {
    let { data, error } = await supabase
        .from('Blogs')
        .select("*")
        .eq('slug', slug)
    if (error) {
        throw error;
    }
    const blog = data[0];

    return { blog, error };
}
