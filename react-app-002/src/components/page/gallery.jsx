import React from 'react';
import img0 from '../layouts/img/zero.jpg'
import img1 from '../layouts/img/kitty1.jpg'
import img2 from '../layouts/img/anime1.jpg'
import img3 from '../layouts/img/power1.jpg'
import img4 from '../layouts/img/cs2.jpg'
import img5 from '../layouts/img/spk1.jpg'
import img6 from '../layouts/img/angel1.jpg'
import img7 from '../layouts/img/an1.jpg'
import img8 from '../layouts/img/meet2.jpg'
import img9 from '../layouts/img/wer1.jpg'
import img10 from '../layouts/img/ty1.jpg'
import img11 from '../layouts/img/wr1.jpg'
import img12 from '../layouts/img/m2.jpg'
import img13 from '../layouts/img/r2.jpg'
import img14 from '../layouts/img/g2.jpg'

import '../layouts/css/gallery.css'
export default function Gallery(){
    return(<>
     <section id="gheader">
            <header>
                <p>Gallery of our favorite customers</p>
                <hr />
            </header>
        </section>
        <section id="gmain">
            <article class="row-1">
                <img class="img-1" src={img0} alt="" />
                <img class="img-1" src={img1} alt="" />
                <img class="img-1" src={img2} alt="" />
                <img class="img-1" src={img3} alt="" />
            </article>
            <article class="row-2">
                <img class="img-2" src={img4} alt="" />
                <img class="img-1" src={img5} alt="" />
                <img class="img-1" src={img6} alt="" />
            </article>
            <article class="row-3">
                <img class="img-1" src={img7} alt="" />
                <img class="img-2" src={img8} alt="" />
                <img class="img-1" src={img9} alt="" />
            </article>
            <article class="row-4">
                <img class="img-1" src={img10} alt="" />
                <img class="img-1" src={img11} alt="" />
                <img class="img-2" src={img12} alt="" />
            </article>
            <article class="row-5">
                <img class="img-2" src={img13} alt="" />
                <img class="img-2" src={img14} alt="" />
            </article>
        </section>
    
    
    
    
    
    
    
    
    </>)
}

