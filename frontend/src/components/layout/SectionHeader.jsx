export default function SectionHeader({ title, subtitle }){
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      {subtitle && <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{subtitle}</div>}
    </div>
  )
}
