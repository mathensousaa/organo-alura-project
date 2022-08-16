import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import CampoTexto from '../TextField';
import './Form.css';

const Form = (props) => {

    const courses = [
        'Análise e desenvolvimento de Sistemas',
        'Administração',
        'Pedagogia',
        'Design de interiores'
    ]

    /* Criar estado VAZIO do componente
    Sempre que queremos que o componente reaja a alguma alteração no 
    valor de uma variável e se renderize novamente, precisamos indicar
    isto utilizando o useState 
    */
    const [name, setName] = useState('')
    const [semester, setSemester] = useState('')
    const [image, setImage] = useState('')
    const [course, setCourse] = useState('')

    // Funcao para quando clicar no botao submit retornar valores inseridos nos inputs
    const whenSave = (event) => {
        event.preventDefault()
        props.toStudentRegistered ({
            name,
            semester,
            image,
            course
        })
    }

    //Retornar inputs com suas respectivas propriedades (obrigatorio, label, placeholder,  valor(dados inseridos nos inputs), e funcao whenChanged que toda vez que o valor for alterado ele atualiza o estado do componente)
    return (
        <section className='form'>
            <form onSubmit={whenSave}>
                <h2>Preencha os dados para criar o card de aluno</h2>
                <CampoTexto
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <CampoTexto 
                    required={true}
                    label="Semestre"
                    placeholder="Digite seu semestre atual"
                    value={semester}
                    whenChanged={value => setSemester(value)}
                />
                <CampoTexto 
                    required={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    whenChanged={value => setImage(value)}
                />
                <Dropdown 
                    required={true} 
                    label="Curso" 
                    itens={courses}
                    value={course}
                    whenChanged={value => setCourse(value)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;