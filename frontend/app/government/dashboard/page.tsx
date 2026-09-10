import Sidebar from "@/components/Sidebar";
export default function Dashboard(){
 return <div className="sidebar-layout"><Sidebar/><main className="main">
  <div className="section-title"><div><div className="eyebrow">Government dashboard</div><h1>Innovation Procurement</h1></div></div>
  <div className="grid">
   {[["24","Open Challenges"],["184","Startup Applications"],["14","Active Pilots"],["8","Successful Pilots"]].map(([v,l])=><div className="card" key={l}><div className="muted">{l}</div><div className="stat">{v}</div></div>)}
  </div>
  <div className="card" style={{marginTop:20}}><h2>Active Challenges</h2><table className="table"><thead><tr><th>Challenge</th><th>Sector</th><th>Applications</th><th>Status</th></tr></thead><tbody>
   <tr><td>AI-Based Municipal Waste Response Optimization</td><td>Waste Management</td><td>12</td><td><span className="badge">PUBLISHED</span></td></tr>
   <tr><td>Predictive Flood Risk Monitoring</td><td>Disaster Management</td><td>8</td><td><span className="badge">PUBLISHED</span></td></tr>
  </tbody></table></div>
 </main></div>
}
