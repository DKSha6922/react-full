
const Header = () => {
    let customCss= "err";
    const isLoggedin=false;
    const greeting = isLoggedin?<p>Welcome User</p>:<p>Try again Log in</p>
    const items = ["items1", "items2", "items3"]
  return (
    <>
    <div>
      <h1 className="bannerText">hello</h1>
      <p className="slogan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti dicta distinctio expedita laudantium facere facilis hic magni vel? Illum ea autem tempora eos voluptates soluta facere commodi quas dolorum.</p>
      </div>

      <p className={customCss} style={{fontSize:"20px",fontStyle:"italic"}}>10+10={10+10}</p>
{greeting}

{/*jsx list handling */}
<ul>
    {items.map((item,index)=>(
<li key={index}>{item}</li>
    ))}
</ul>
    </>
  )
}

export default Header
