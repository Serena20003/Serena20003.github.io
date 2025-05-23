import { useState } from 'react';
import { supabase } from './supabase-client';
import Star from './Components/Star';

const Contact = () => {
    const [newRating, setNewRating] = useState({rating: -1, suggestions: "", email: ""});
    const [colors, setColors] = useState(["gray", "gray", "gray", "gray", "gray"]);
    const [stars, setStars] = useState(-1);
    const submittedForm = async (e) => {
        e.preventDefault();
        console.log(newRating);
        if (newRating.rating === -1)
        {
            document.getElementById("contact_error").hidden = false;
        }
        else
        {
            document.getElementById("contact_error").hidden = true;
            const {error} = await supabase.from("ratings").insert(newRating).single();
            if (error)
                console.error(error)
        }
    }

    const UpdateRating = (newStar) => {
        setStars(newStar);
        setNewRating((prev) => ({...prev, rating: newStar}));
    }
    return ( 
        <>
        <div className='title' id="Contact">Contact</div>
        <div className='body'>
            <p>I love getting to know new people!</p>
            <p>You can reach me through: <a href="mailto:scli@usc.edu">Email</a> or <a href="https://www.linkedin.com/in/serena-li-a068661a7/">LinkedIn</a></p>
            <form className='contact_card_container' onSubmit={submittedForm}>
                <div className='card' style={{"grid-template-rows": "max-content"}}>
                    <div className='contact_card_sub_grid'>
                        <div>Leave your rating of my website:</div>
                        <div>
                            {
                            colors.map((color, index) => <Star color={(index <= stars) ? "orange" : "gray"} onclick={() => UpdateRating(index)}/>)
                            }
                            <div className="contact_card_clear" onClick={()=>UpdateRating(-1)}>clear</div>
                        </div>
                    </div>
                    <div className='contact_card_sub_grid'>
                        <div>Any suggestions for improvements (accessibility, efficiency, etc):</div>
                        <textarea className="contact_card_textarea" onChange={(e) => setNewRating((prev)=>({...prev, suggestions: e.target.value}))}/>
                    </div>
                    <div className='contact_card_sub_grid'>
                        <div>Drop your email if you'd like:</div>
                        <input className="contact_card_input" type="text" onChange={(e) => setNewRating((prev)=>({...prev, email: e.target.value}))}/>
                    </div>
                    <div className='contact_submit_container'>
                        <button className='contact_card_submit'>Submit</button>
                        <div id="contact_error" hidden>This form needs a rating to submit!</div>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
}
 
export default Contact;