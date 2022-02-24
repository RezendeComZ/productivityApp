const Header = ({ msg }) => {
  return (
    <header>
    <h4>Apenas um Header. {msg}</h4>
    </header>
  )
}

Header.defaultProps = {
  msg: 'Mensagem padrão.'
}

export default Header
