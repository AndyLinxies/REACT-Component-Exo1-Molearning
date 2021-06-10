import React from 'react';


// Le lien "Link 1" Au clique fait un console.log de "Accueil"
// Le lien "Link 2" Au survol de celui-ci affiche dans la console "Galerie"
// Le lien "Link 3" Au double click de celui-ci affiche dans la console "Contact"

function affiche(params) {
    console.log(params)
}

const Nav = () => {
    return (
        <div className="linkZ">
            <button className="link" onClick={()=>affiche('Accueil')}>Link 1</button>
            <button className="link" onMouseOver={()=>affiche('Galerie')} >Link 2</button>
            <button className="link" onDoubleClick={()=>affiche('Contact')}>Link 3</button>
        </div>
    );
};

export default Nav;