import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
function Cite(props){
    return(
        <blockquote className="cite">
            <FontAwesomeIcon className='fa-1x i' icon={faQuoteLeft}/>
				 {props.Cite} 
            <FontAwesomeIcon className='fa-1x i' icon={faQuoteRight}/>
		</blockquote>
    );
}
export default Cite;