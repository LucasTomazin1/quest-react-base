import './App.css'
import { Paragraph } from './components/paragraph/paragraph'
import { Button } from './components/button/button'

function App() {

  return (
    <>
      <Paragraph textColor="red" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquid voluptate natus possimus qui quas ea voluptatum" />
      <Paragraph textColor="#3428db" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquid voluptate " />
      <Button label={"Botão 1"} />
      <Button label={"Botão 2"} />
    </>
  )
}

export default App