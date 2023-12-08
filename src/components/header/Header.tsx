
function Header(){
    return(
    <>
    <div className="border-b-2 border-b-gray-100 border-dotted">
    <header className="pb-10">
        <h1 className="font-bold p-10 text-2xl">MyPortfolio</h1>
        <ul className="flex flex-row space-x-4 justify-center text-2xl text-white text">
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Contact</a></li>
        </ul>
    </header>
    </div> 
     </>
    )
}
export default Header