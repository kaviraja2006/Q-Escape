import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import OrgSetup from '../pages/org/OrgSetup';
import OrgDashboard from '../pages/org/OrgDashboard';
import QueueCreate from '../pages/org/QueueCreate';
import QueueControl from '../pages/org/QueueControl';
import OrgAnalytics from '../pages/org/OrgAnalytics';
import UserSetup from '../pages/user/UserSetup';
import UserDashboard from '../pages/user/UserDashboard';
import Search from '../pages/user/Search';
import OrgDetail from '../pages/user/OrgDetail';
import QueueDetail from '../pages/user/QueueDetail';
import Favorites from '../pages/user/Favorites';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/org/setup" element={<OrgSetup />} />
        <Route path="/org/dashboard" element={<OrgDashboard />} />
        <Route path="/org/queues/new" element={<QueueCreate />} />
        <Route path="/org/queues/control" element={<QueueControl />} />
        <Route path="/org/analytics" element={<OrgAnalytics />} />
        <Route path="/user/setup" element={<UserSetup />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/org/:orgId" element={<OrgDetail />} />
        <Route path="/queue/:queueId" element={<QueueDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}


