import './App.css'
import './Header.css'
import axios from 'axios'

function Header() {
  const handleClick = async () => {
    try {
      const response = await axios.get('ваш_путь_к_API')
      console.log(response.data)
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleClick();
  };

  return (
    <>
      <header>
        <div className="menu-container">
          <div class="burger-menu" role="button"></div>
        </div>
        <form class="custom-input" action="/" method="get" onSubmit={handleSubmit} noValidate>
          <input class="search" placeholder="" />
          <span type="button" class="icon fa fa-search" onClick={handleClick} />
        </form>
        <div class="profile-icon" role="button"></div>
      </header>
    </>
  )
}

export default Header
