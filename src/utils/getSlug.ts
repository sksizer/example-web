export default function getSlug(entry : BlogEntry ) : string {
    const slug = entry.data.slug ?
        entry.data.slug :
        entry.id
    console.log(slug);
    return slug;
}