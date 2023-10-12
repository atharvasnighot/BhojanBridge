export default () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  return (
    <div className="container mx-auto flex justify-center p-6">
      <h1 className="text-2xl text-black font-mono font-bold">Esimated feed Count: {randomNumber} people</h1>
    </div>
  )
}
