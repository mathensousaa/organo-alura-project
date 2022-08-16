// dumb component

import './Course.css'

const Course = (props) => {

    return (
        <section className='course' style={{ backgroundColor: props.secondaryColor}}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        </section>
    )
}

export default Course