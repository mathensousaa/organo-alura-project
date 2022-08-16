import { useState } from 'react';
import Banner from './components/Banner';
import Course from './components/Course';
import Form from './components/Form';

function App() {

  const courses = [
    {
      name: 'Análise e desenvolvimento de sistemas',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Administração',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Pedagogia',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'Design de interiores',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    }
  ]

  const [students, setStudents] = useState([])

  const toNewStudentAdded = (student) => {
    console.log(student)
    setStudents([...students, student])
  }

  return (
    <div className="App">
      <Banner />
      <Form toStudentRegistered={student => toNewStudentAdded(student)}/>
      
      {courses.map(course => <Course key={course.name} name={course.name} primaryColor={course.primaryColor} secondaryColor={course.secondaryColor}/>)}
    </div>
  );
}

export default App;