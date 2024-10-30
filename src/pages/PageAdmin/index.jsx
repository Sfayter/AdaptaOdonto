import './style.scss'

export default function PageAdmin() {
    return (
        <div className='admin-page'>
            <section className='login'>
                <form className='labels'>
                <img className='logo-odonto' alt="" src="/assets/images/AdaptaOdonto_logo.png"/>
                    <input type="email" id="email" name="email" required placeholder='Email'></input>
                    <input type="password" id="password" name="password" required placeholder='Senha'></input>
                    <button className='bt-entrar' type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}