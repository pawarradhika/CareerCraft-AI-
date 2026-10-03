import { PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon,  } from 'lucide-react'
import { FilePenLineIcon } from 'lucide-react'
import React from 'react'
import { useEffect, useState } from 'react'
import {dummyResumeData} from '../assets/assets'

const Dashboard = () => {

const colors =["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"]
const [allResumes, setAllResumes] = useState([])

const loadResumes = async () => {
  setAllResumes(dummyResumeData)
}

useEffect(()=>{
  loadResumes()
}, [])


  return (
    <div className='bg-slate-50'>
      <div className='max-w-7xl mx-auto px-4 pt-4 pb-8'>
        <p className='text-2xl font-semibold text-slate-700 mb-3 ml-25'>
          Welcome, Radhika
        </p>

        <div className='flex gap-4 ml-25'>
          <button className='w-full sm:w-36 bg-white h-48 flex flex-col items-center justify-center rounded-xl gap-3 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
            <PlusIcon className='size-11 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full transition-all duration-300' />
            <p className='text-sm font-medium group-hover:text-indigo-600 transition-all duration-300'>
              Create Resume
            </p>
          </button>

          <button className='w-full sm:w-36 bg-white h-48 flex flex-col items-center justify-center rounded-xl gap-3 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
            <UploadCloudIcon className='size-11 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full transition-all duration-300' />
            <p className='text-sm font-medium group-hover:text-purple-600 transition-all duration-300'>
              Upload Existing
            </p>
          </button>
        </div>
<hr className='border-slate-300 my-6 sm:w[305px]' />
<div className="grid grid-cols-2 sm:flex flex-wrap gap-4 ml-25">
  {allResumes.map((resume, index) => {
    const baseColor = colors[index % colors.length];
    return(
      <button key={index} className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer' style={{background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`}}>

        <FilePenLineIcon className='size-7 group-hover:scale-105 transition-all' style={{color: baseColor}} />
        <p className='text-sm group-hover:scale-105 transition-all px-2 text-center' style={{color: baseColor}}>
          {resume.title}
        </p>
        <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center' style={{color: baseColor
          +'90'
        }}>
          Updates on {new Date(resume.updatedAt).toLocaleDateString()}
        </p>
<div className='absolute top-1 right-1 group-hover:flex items-center hidden' >
<TrashIcon className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors'/>
<PencilIcon className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors' />

</div>
      </button>
    )
  })}
</div>

      </div>
    </div>
  )
}

export default Dashboard
