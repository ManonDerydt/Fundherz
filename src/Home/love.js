import React, {useState} from 'react';
import Fade from "react-reveal/Fade";

class Love extends React.Component {

    render() {

        return (
            <div className="content-love">
                <h2 className="title-love">
                    Tellement de raisons <br/><span className="violet-color">d’❤️ Fundherz</span>
                </h2>

                <div className="d-flex-desktop first-love">
                    <Fade bottom delay={100}>
                        <div className="btn-love btn-1-l">⚡️ Mise en place rapide</div>
                    </Fade>
                    <Fade bottom delay={300}>
                        <div className="btn-love btn-4-l">⚖️ On obtient vos financements nécessaires</div>
                    </Fade>
                </div>

                <div className="d-flex-desktop second-love">
                    <Fade bottom delay={500}>
                        <div className="btn-love btn-2-l">🚀 Une Facturation adaptée à votre profil</div>
                    </Fade>
                    <Fade bottom delay={700}>
                        <div className="btn-love btn-3-l">🔭 Visibilité et promotion</div>
                    </Fade>
                    <Fade bottom delay={900}>
                        <div className="btn-love btn-5-l">🎨 Une équipe dédiée à votre succès</div>
                    </Fade>

                </div>
            </div>
        )
    }
}

export default Love

