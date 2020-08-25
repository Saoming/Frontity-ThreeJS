import React from "react"
import { connect } from "frontity";


const Link = ({
    state,
    actions,
    link,
    className,
    children,
    "aria-current": ariaCurrent
}) => {
    const onClick = event => {
        if (link.startsWith("http")) return;
        event.preventDefault();
        
        actions.router.set(link);

        if(state.theme.isMobileMenuOpen) {
            actions.theme.closeMobileMenu();
        }
    }
    return (
        <a
            href={link}
            onClick= {onClick}
            className={className}
            ariaCurrent={ariaCurrent}
        >
           {children} 
        </a>
    )
}
export default connect(Link)