import PageWrapper from '../components/layout/PageWrapper'
import TeamMemberCard from '../components/team/TeamMemberCard'
import { teamMembers } from '../data/teamData'

export default function Team(){
  return (
    <PageWrapper>
      <h2 className="text-2xl font-semibold">Team</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {teamMembers.map(m => <TeamMemberCard key={m.name} member={m} />)}
      </div>
    </PageWrapper>
  )
}
