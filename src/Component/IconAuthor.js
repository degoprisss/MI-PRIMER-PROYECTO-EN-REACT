import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';

import {faTwitter} from '@fortawesome/free-brands-svg-icons'

function IconAuthor(props) {
    return (
        <div className="contaier-icono-author">
            <a className="icono__contacto" href="https://www.facebook.com/diego.mesaluna/">
                <FontAwesomeIcon className='fa-2x i' icon={faTwitter}/>
            </a>

            <p><cite>{props.Author}</cite> </p>
        </div >
    )
}

export default IconAuthor;