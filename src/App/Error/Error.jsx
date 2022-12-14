import React from "react";
import {  useNavigate,  } from 'react-router-dom'


const Error = ({error}) => {
    const navigate = useNavigate()
    const backIndex = () => {
        navigate("/")
    }
    return(
        <div className="flex-center-column error-container">
            <div className="flex-center-column image-error-container">
                {error == "404" ?
                    <>
                        <img className="image-error" src="./Imagenes/pokeball404.png" alt="imagen del error 404" />
                        <span className="oh-no">Oh no!</span>
                        <span className="error-message">You didn't catch that pokemon yet!</span>
                        <span className="back-index" onClick={backIndex}> Voler al Incio </span>
                   </>
                   :
                   <>                   
                        <img className="image-error" src="img" alt="imagen del error 401" />
                        <span className="error-message">Unauthorize!</span>
                        <span className="back-index" onClick={backIndex}> Voler al Incio </span>
                   </>

                }
             
            </div>
        </div>
    )
}

export default Error