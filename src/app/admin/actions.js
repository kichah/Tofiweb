'use server'

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function deleteProject(id) {
  const supabase = await createClient()
  const { error } = await supabase.from('Projects').delete().eq('id', id)
  if (error) console.error("Error deleting project:", error)
  revalidatePath('/admin')
  revalidatePath('/')
  revalidatePath('/projects')
}

export async function deleteBlog(id) {
  const supabase = await createClient()
  const { error } = await supabase.from('Blogs').delete().eq('id', id)
  if (error) console.error("Error deleting blog:", error)
  revalidatePath('/admin/blogs')
  revalidatePath('/blog') // or wherever public blogs live
}

export async function upsertProject(formData) {

  const supabase = await createClient()

  const rawTags = formData.get('tags') || '';
  const tagsArray = rawTags.split(',').map(t => t.trim()).filter(Boolean);

  const id = formData.get('id') // if exists, it's an update

  // Handle Card Image Upload
  const imgFile = formData.get('img');
  let finalImg = formData.get('existing_img') || null;

  if (imgFile && imgFile.size > 0) {
    const fileExt = imgFile.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.floor(Math.random() * 1000)}.${fileExt}`
    const { data, error } = await supabase.storage.from('projects-images').upload(fileName, imgFile)
    if (!error) {
      const { data: publicUrlData } = supabase.storage.from('projects-images').getPublicUrl(fileName)
      finalImg = publicUrlData.publicUrl
    } else {
      console.error("Storage upload error img:", error)
    }
  }

  // Handle Full Web Image Upload
  const fullImgFile = formData.get('fullimg');
  let finalFullImg = formData.get('existing_fullimg') || null;

  if (fullImgFile && fullImgFile.size > 0) {
    const fileExt = fullImgFile.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.floor(Math.random() * 1000)}.${fileExt}`
    const { data, error } = await supabase.storage.from('projects-images').upload(fileName, fullImgFile)
    if (!error) {
      const { data: publicUrlData } = supabase.storage.from('projects-images').getPublicUrl(fileName)
      finalFullImg = publicUrlData.publicUrl
    } else {
      console.error("Storage upload error fullimg:", error)
    }
  }

  const projectData = {
    title: formData.get('title'),
    category: formData.get('category'),
    detail: formData.get('detail'),
    description: formData.get('description'),
    tags: tagsArray,
    img: finalImg,
    fullimg: finalFullImg,
    web_link: formData.get('web_link') || null,
    github_link: formData.get('github_link') || null
  }

  if (id) {
    const { error } = await supabase.from('Projects').update(projectData).eq('id', id)
    if (error) console.error(error)
  } else {
    const { error } = await supabase.from('Projects').insert([projectData])
    if (error) console.error(error)
  }

  revalidatePath('/admin')
  revalidatePath('/')
  revalidatePath('/projects')
  return { success: true }
}

export async function upsertBlog(formData) {
  const supabase = await createClient()

  const id = formData.get('id')

  // Handle Cover Image Upload
  const imgFile = formData.get('img');
  let finalImg = formData.get('existing_img') || null;

  if (imgFile && imgFile.size > 0) {
    const fileExt = imgFile.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.floor(Math.random() * 1000)}.${fileExt}`
    const { data, error } = await supabase.storage.from('dev-blogs-images').upload(fileName, imgFile)
    if (!error) {
      const { data: publicUrlData } = supabase.storage.from('dev-blogs-images').getPublicUrl(fileName)
      finalImg = publicUrlData.publicUrl
    } else {
      console.error("Storage upload error blog img:", error)
    }
  }

  const blogData = {
    title: formData.get('title'),
    short_desc: formData.get('short_desc'),
    description: formData.get('description'),
    author: formData.get('author'),
    tag: formData.get('tag'),
    img: finalImg,
    slug: createSlug(formData.get('title'))
  }

  if (id) {
    const { error } = await supabase.from('Blogs').update(blogData).eq('id', id)
    if (error) console.error(error)
  } else {
    const { error } = await supabase.from('Blogs').insert([blogData])
    if (error) console.error(error)
  }

  revalidatePath('/admin/blogs')
  revalidatePath('/blog')
  return { success: true }
}
