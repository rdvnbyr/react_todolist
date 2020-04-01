import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react';
import './LabellSelect.css'



const options = [
    { key: 'family', text: '👨‍👨‍👧‍👦 Family', value: 'family' },
    { key: 'work', text: '👩‍💻 Work', value: 'work' },
    { key: 'school', text: '👨‍🎓 School', value: 'school' },
    { key: 'emergency', text: '🚨 Emergency', value: 'emergency' },
    { key: 'important', text: '⚠️ Important', value: 'important' },
    { key: 'not important', text: '😴 not Important', value: 'not important' },
    { key: 'not emergency', text: '⌛️ not Emergency', value: 'not emergency' },

]

function LabelSelect() {     
    return (
        <Menu className="my-1">
            <Menu.Item className="bg-success">Status</Menu.Item>
            <Dropdown className="border-0" placeholder='Select Status' fluid multiple selection options={options} />
        </Menu>
        
        
        
        
    )
}

export default LabelSelect;
