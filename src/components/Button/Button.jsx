
export const Button = ({funcion, texto, peso}) => {
  const onClick = () => {
    funcion(peso);
  }

  return (
    <>
      <button onClick={onClick} className={`bg-[green] p-3 rounded-md text-white font-montserrat hover:bg-green-400 transition-all delay-2`}>
        {texto}
      </button>
    </>
  )
}
