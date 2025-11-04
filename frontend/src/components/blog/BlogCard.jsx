export default function BlogCard({ post }){
  return (
    <div className="bg-white dark:bg-gdsc-surface rounded p-4 card-shadow">
      <h4 className="font-semibold">{post.title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{post.excerpt}</p>
      <div className="mt-3 text-xs text-gray-500">{post.date}</div>
    </div>
  )
}
