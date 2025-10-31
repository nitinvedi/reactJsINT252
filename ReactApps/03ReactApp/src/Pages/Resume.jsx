import React from 'react';
import Image from '../Components/Image.jsx';

export default function Resume(props) {
  return (
    <div className="text-sky-950 w-3/4 mx-auto p-10 rounded-xl shadow-lg space-y-8">

      <h1 className="text-center text-5xl font-bold mb-6">Curriculum Vitae</h1>

      <div className="flex justify-between items-start">
        <div className="space-y-2 text-lg">
          <p><strong>Name:</strong> {props.name}</p>
          <p><strong>Address:</strong> {props.address}</p>
          <p><strong>Email:</strong> {props.mail}</p>
          <p><strong>Phone No:</strong> {props.phone}</p>
        </div>

        <div className="w-32 h-22 overflow-hidden border-2 border-black-700">
          <Image />
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-2 underline">CAREER OBJECTIVE</h2>
        <p className="text-lg">{props.careerObjective}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 underline">EDUCATIONAL QUALIFICATIONS</h2>
        <table className="w-full border border-black-700 border-collapse text-center">
          <thead className="bg-black-200">
            <tr>
              <th className="border border-black p-2">Degree / Certificate</th>
              <th className="border border-black p-2">Institution / Board</th>
              <th className="border border-black p-2">Year</th>
              <th className="border border-black p-2">CGPA / Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2">Graduation</td>
              <td className="border border-black p-2">{props.institutionG}</td>
              <td className="border border-black p-2">{props.yearG}</td>
              <td className="border border-black p-2">{props.cgpaG}</td>
            </tr>
            <tr>
              <td className="border border-black p-2">HSC</td>
              <td className="border border-black p-2">{props.institutionH}</td>
              <td className="border border-black p-2">{props.yearH}</td>
              <td className="border border-black p-2">{props.cgpaH}</td>
            </tr>
            <tr>
              <td className="border border-black p-2">SSC</td>
              <td className="border border-black p-2">{props.institutionS}</td>
              <td className="border border-black p-2">{props.yearS}</td>
              <td className="border border-black p-2">{props.cgpaS}</td>
            </tr>
          </tbody>
        </table>
      </section>


      <section>
        <h2 className="text-2xl font-semibold mb-2 underline">TECHNICAL SKILLS</h2>
        <p><strong>Software:</strong> {props.software}</p>
        <p><strong>Languages:</strong> {props.languages}</p>
        <p><strong>DBMS:</strong> {props.dbms}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 underline">INTERNSHIP</h2>
        <p><strong>Organisation:</strong> {props.internship1Org}</p>
        <p><strong>Description:</strong> {props.internship1Desc}</p>
        <p><strong>Organisation:</strong> {props.internship2Org}</p>
        <p><strong>Description:</strong> {props.internship2Desc}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 underline">PROJECTS UNDERTAKEN</h2>
        <div className="space-y-4">
          <div>
            <p><strong>Project:</strong> {props.project1Title}</p>
            <p><strong>Objective:</strong> {props.project1Objective}</p>
            <p><strong>Description:</strong> {props.project1Desc}</p>
          </div>
          <div>
            <p><strong>Project:</strong> {props.project2Title}</p>
            <p><strong>Objective:</strong> {props.project2Objective}</p>
            <p><strong>Description:</strong> {props.project2Desc}</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 underline">WORKSHOPS / CERTIFICATIONS / SEMINARS</h2>
        <p>{props.workshops}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 underline">EXTRA CURRICULAR ACTIVITIES</h2>
        <p>{props.extraCurricular}</p>
      </section>
    </div>
  );
}
