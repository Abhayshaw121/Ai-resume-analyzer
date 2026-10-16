import { useState } from 'react'

function App() {
  const [file, setFile] = useState(null)
  const [jobDescription, setJobDescription] = useState('')

  function handleFileChange(event) {
    setFile(event.target.files[0])
  }

  function handleJobDescriptionChange(event) {
    setJobDescription(event.target.value)
  }

  function handleAnalyze() {
    console.log('Analyze clicked')
    console.log('Resume:', file.name)
    console.log('Job description length:', jobDescription.length)
  }

  const canAnalyze = file !== null && jobDescription.trim() !== ''

  return (
    <div>
      <h1>AI Resume Analyzer</h1>
      <p>Upload your resume and get instant feedback.</p>

      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {file && <p>Selected: {file.name}</p>}

      <br />

      <textarea
        rows="8"
        cols="50"
        placeholder="Paste the job description here..."
        value={jobDescription}
        onChange={handleJobDescriptionChange}
      />

      <br />

      <button onClick={handleAnalyze} disabled={!canAnalyze}>
        Analyze
      </button>
    </div>
  )
}

export default App