import './Body.scss';

export default function Body({shouldShowMessageProp, name}) { 

  let nameClasses = "body__fillingText body__fillingText--name";

  if(shouldShowMessageProp) {
    nameClasses += " body__fillingText--showName";
  }

  return (
        <section className="body">
            <div className="body__content">
                <span className="body__fillingText body__fillingText--preFilling">Welcome back</span> 
                <div className="body__fillingText body__fillingText--filled">
                  <span 
                    className={nameClasses}
                    > 
                      {name}
                  </span>  
                  <span className="body__fillingText body__fillingText--exclamationMark">!</span>
                </div>
            </div>
        </section>
  )
}
