import React, {useState, ChangeEvent} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import TextField from '../../../TextField';

function CadastreoCategoria() {
  
  const valoresIniciais = {
    nome:' ',
    descricao:'',
    cor:'',
  }
  const [values, setValues] = useState(valoresIniciais)
  const [categoria, setCategoria] = useState([])

  function handleValues(chave, valor){
    setValues({
      ...values,
      [chave]: valor,

    })
  }

  function handleChange(infosDoEvent){
    handleValues(
      infosDoEvent.target.getAttribute('name'),
      infosDoEvent.target.value
    )
  }

  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria:{values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvent){
          infosDoEvent.preventDefault()
          setCategoria([
            ...categoria,
            values.nome
          ])

          setValues(valoresIniciais)
        }}>
          
          <FormField 
            type={"text"}
            label={"Nome da Categoria:"}
            name={"nome"}
            value={values.nome}
            onChange={handleChange}
          />


          <TextField 
            type={"textarea"}
            label={"Descrição:"}
            name={"descricao"}
            value={values.descricao}
            onChange={handleChange}
          />  

        <FormField 
            type={"color"}
            label={"Cor:"}
            name={"cor"}
            value={values.cor}
            onChange={handleChange}
          />

          <button>
            Cadastrar
          </button>
          
        </form>


        <ul>
          {categoria.map((categoria, indice)=>{
            return(
              <li key={`${categoria.nome}${indice}`}>
                {categoria}  
              </li>
            )
          })}
        </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  )
}

export default CadastreoCategoria; 