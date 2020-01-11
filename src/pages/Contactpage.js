import React from 'react';
import Hero from "../components/hero";
import contact from "../images/contactBcg.jpeg";
import Title from "../components/title";

export default function Contactpage() {
    return (
        <div>
            <Hero img={contact}/>
            <section className="py-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">

                    {/* Title */}
                    <Title title="contact us" />

                    <form className="mt-5" action="https://formspree.io/arjun.tkv7@gmail.com" method="POST">
                        
                        {/* name */}
                        <div className="form-group">
                        <input type="text" name="firstName" className="form-control" placeholder="john smith"/>
                        </div>

                        {/* email */}
                        <div className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="email@email.com"/>
                        </div>

                        {/* subject */}
                        <div className="form-group">
                        <input type="text" name="subject" className="form-control" placeholder="important!!!!"/>
                        </div>

                        {/* message */}
                        <div className="form">
                        <textarea name="message" className="form-control" rows="10" placeholder="hello there buddy"/>
                        </div>

                        {/* submit */}
                        <div className="form-group mt-3">
                        <input type="submit" value="Send" className="form-control bg-primary text-white"></input>
                        </div>

                    </form>
                    </div>
                </div>
            </section>
        </div>

    )
}
