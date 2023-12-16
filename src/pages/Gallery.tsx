
import { Grid } from 'semantic-ui-react';
export default function Gallery() {
    return (
        <div style={{ width: '1280px' }}>
            <h1>
              Dance Covers
            </h1>
            <div className='parent-video'>
                <div className='child-video'>
                    <div className="iframe-container">
                        <iframe
                            width="1920"
                            height="1080"
                            src="https://www.youtube.com/embed/T2iLTTeZamQ"
                            allowFullScreen={true}
                        ></iframe>
                    </div>
                    
                </div>
                <div className='child-video'>
                    <div className="iframe-container">
                        <iframe
                            width="1920"
                            height="1080"
                            src="https://www.youtube.com/embed/fMCAPjdptrA"
                            allowFullScreen={true}
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className='parent-video'>
                <div className='child-video'>
                    <div className="iframe-container">
                        <iframe
                            width="1920"
                            height="1080"
                            src="https://www.youtube.com/embed/Xls1luLQnJ4"
                            allowFullScreen={true}
                        ></iframe>
                    </div>
                    
                </div>
                <div className='child-video'>
                    <div className="iframe-container">
                        <iframe
                            width="1920"
                            height="1080"
                            src="https://www.youtube.com/embed/3TpMZja_zfQ"
                            allowFullScreen={true}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>

        
    );
}
