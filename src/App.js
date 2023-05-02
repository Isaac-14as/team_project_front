import logo from './logo.svg';
import './App.css';

import Dz_1 from './components/dz_1/dz_1'
import Header from './components/header/header'
import Profile from './components/profile/profile'
import StudentScheduleOfLessons from './components/student_schedule_of_lessons/student_schedule_of_lessons'
import GradeListOfDisciplines from './components/grade_list_of_disciplines/grade_list_of_disciplines'
import ChangeProfile from './components/change_profile/change_profile'
import GradeTable from './components/grade_table/grade_table'


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/dz_1" element={<Dz_1 />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/student_schedule_of_lessons" element={<StudentScheduleOfLessons />} />
          <Route path="/grade_list_of_disciplines" element={<GradeListOfDisciplines />} />
          <Route path="/profile/change_profile" element={<ChangeProfile />} />
          <Route path="/grade_list_of_disciplines/grade_table_profile" element={<GradeTable />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
