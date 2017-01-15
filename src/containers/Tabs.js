import React from 'react'


export default function Tabs({ tab, onClick }) {

  const tabs = [
    { key: 'early', title: 'Partie 1' },
    { key: 'late', title: 'Partie 2' },
    { key: 'now', title: 'Now' },
  ]

  return (
    <div className='btn-group'>

      {tabs.map(({ key, title}) => {
        return (
          <button
            key={key}
            onClick={() => onClick(key)} 
            className={'btn btn-primary pointer'+(tab === key ? '':' active')}
          >
            <i name="sidebar" />
            <span>{title}</span>
          </button> 
         )
      })}

    </div>
  )

}