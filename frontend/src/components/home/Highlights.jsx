export default function Highlights(){
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-8">
      <div className="bg-white dark:bg-gdsc-surface p-4 rounded card-shadow">
        <h4 className="font-semibold">Workshops</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Hands-on sessions to learn modern tech.</p>
      </div>
      <div className="bg-white dark:bg-gdsc-surface p-4 rounded card-shadow">
        <h4 className="font-semibold">Hackathons</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Team up and ship projects.</p>
      </div>
    </div>
  )
}
