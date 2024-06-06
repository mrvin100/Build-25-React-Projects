import { useState } from 'react';
import data from './data'
import './style.css'

export default function Accordion() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    const handleMultiSelection = (getCurrentId) => {
        let cpMultiple = [...multiple]
        const findIndexOfCurrentId = cpMultiple.indexOf(getCurrentId)
        if (findIndexOfCurrentId === -1) cpMultiple.push(getCurrentId)
        else cpMultiple.splice(findIndexOfCurrentId, 1)
        setMultiple(cpMultiple)
    }
    return (
        <section className="container accordion container">
            <button className='btn' onClick={() => setEnableMultiSelection(!enableMultiSelection)}>{!enableMultiSelection ? 'Enable' : 'Disable'} multi accordion</button>
            <div className="box_container">
                {data && data.length ? data.map((item) => (
                    <div className='box' key={item.id}>
                        <h3 className='heading'
                            onClick={
                                enableMultiSelection
                                    ? () => handleMultiSelection(item.id)
                                    : () => handleSingleSelection(item.id)
                            }>{item.question} <i className="bx bx-plus"></i></h3>
                        {
                            enableMultiSelection ? multiple.indexOf(item.id) !== -1 && (<p>{item.answer}</p>) : selected === item.id && (<p>{item.answer}</p>)
                        }
                        {/* {selected === item.id || multiple.indexOf(item.id) !== -1 ? <p>{item.answer}</p> : null} */}
                    </div>)) : (<div>No data found !</div>)}
            </div>
        </section>
    )
}