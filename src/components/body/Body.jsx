import './Body.scss';

export default function Body(props) {
  return (
        <section className="body">
            <h2 className="body__h2">
                <span className="body__fillingText body__fillingText--preFilling">Welcome back</span> 
                <span className="body__fillingText body__fillingText--filled"> {props.userName}!</span>  
            </h2>
        </section>
  )
}
