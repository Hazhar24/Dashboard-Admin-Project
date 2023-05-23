import Dashboard from './Dashboard'
import QuickMenu from './QuickMenu'
import Notfications from './Notfications'
import Staff from './Staff'

export default function SideBar() {
  return (
     <div className='sidebar-main'>
          <Dashboard />
          <QuickMenu />
          <Notfications />
          <Staff />
     </div>
  )
}
