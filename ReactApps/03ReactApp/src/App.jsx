import './App.css'
import Resume from './Pages/Resume.jsx'

function App() {
  const data = {
    name: "Nitin Chaturvedi",
    address: "Bhopal, MP, India",
    mail: "nitin@example.com",
    phone: "9876543210",
    careerObjective: "To secure a challenging position where I can effectively contribute my skills.",
    institutionG: "XYZ University",
    yearG: "2025",
    cgpaG: "8.5",
    institutionH: "ABC Higher Secondary School",
    yearH: "2020",
    cgpaH: "85%",
    institutionS: "PQR High School",
    yearS: "2018",
    cgpaS: "88%",
    software: "VS Code, Git, Figma",
    languages: "C++, JavaScript, Python",
    dbms: "MySQL, MongoDB",
    internship1Org: "Tech Solutions Pvt Ltd",
    internship1Desc: "Worked on full-stack web development using React and Node.js",
    internship2Org: "AI Labs",
    internship2Desc: "Developed ML models for predictive analytics",
    project1Title: "Resume Builder App",
    project1Objective: "To simplify resume creation using React",
    project1Desc: "Built an interactive resume generator with live preview and PDF export",
    project2Title: "E-Commerce Dashboard",
    project2Objective: "To visualize sales and user data efficiently",
    project2Desc: "Created admin dashboard with charts and analytics",
    workshops: "Completed workshop on Cloud Computing and AI Ethics",
    extraCurricular: "Volunteered for college tech fest and coding hackathons"
  }

  return (
    <Resume {...data} />
  )
}

export default App
