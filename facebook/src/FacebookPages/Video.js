import React from 'react'

const  Video = () => {
    return (
        <div className='video'>
           <div>
           <video class="vd" width="320" height="240" controls>
            <source src="./Pics/10000000_124496113554504_6445202527512066893_n.mp4" type="video/mp4" />
            </video>
            </div>
            <div>
            <video class="vd" width="320" height="240" controls>
            <source src="./Pics/273683691_2711205335850711_3985451384751761789_n.mp4" type="video/mp4" />
            </video>
            </div>
            <div>
            <video class="vd" width="320" height="240" controls>
            <source src="./Pics/pexels-rodnae-productions-8474604.mp4" type="video/mp4" />
            </video>
            </div>
            <div>
            <video class="vd" width="320" height="240" controls>
            <source src="./Pics/293979423_1250536689015092_6752529607956984276_n.mp4" type="video/mp4" />
          </video>
        </div>
        </div>
        
    )
}

export default Video;
