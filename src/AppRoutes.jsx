import { Route, Routes } from 'react-router-dom';

import NotFoundPage from './components/ui/NotFoundPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import DepartmentDetailPage from './pages/DepartmentDetailPage.jsx';
import DepartmentsPage from './pages/DepartmentsPage.jsx';
import DonatePage from './pages/DonatePage.jsx';
import HomePage from './pages/HomePage.jsx';
import JoinPage from './pages/JoinPage.jsx';
import MissionVisionPage from './pages/MissionVisionPage.jsx';
import OurApproachPage from './pages/OurApproachPage.jsx';

export default function AppRoutes({ onOpenPartner, onOpenDonate }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage onOpenPartner={onOpenPartner} onOpenDonate={onOpenDonate} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/mission-vision" element={<MissionVisionPage />} />
      <Route path="/departments" element={<DepartmentsPage />} />
      <Route path="/departments/:slug" element={<DepartmentDetailPage />} />
      <Route path="/our-approach" element={<OurApproachPage />} />
      <Route path="/join-the-change" element={<JoinPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
