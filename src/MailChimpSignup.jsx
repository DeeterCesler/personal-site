import React from "react";

const MailChimpSignup = () => {
    return(
        <div>
        {/* <!-- Begin Mailchimp Signup Form --> */}
        <div id="mc_embed_signup">
        <form action="https://bageldogmedia.us16.list-manage.com/subscribe/post?u=c1fa698dbe7a1b924b1ae68b9&amp;id=15bfa656ae" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
            <h2>get a weekly idea to push your thinking</h2>
        {/* <div className="indicates-required"><span className="asterisk">*</span> indicates required</div> */}
        <div className="mc-field-group">
            <label htmlFor="mce-EMAIL"></label>
            <input type="email" placeholder="What's your email address?" name="EMAIL" className="required email" id="mce-EMAIL"/>
        </div>
            <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
            </div>    
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div className="mailchimp-style" aria-hidden="true"><input type="text" name="b_c1fa698dbe7a1b924b1ae68b9_15bfa656ae" tabIndex="-1" defaultValue=""/></div>
            <div className="clear"><input className="mailchimp-submit" type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
            </div>
        </form>

        {/* <p>
                <span className="small-boi">
                    <br/>
                    like how to earn $15,000 more this year
                    <br/>
                    why you're not as tough as Teddy Roosevelt
                    <br/>
                    how Russo-American war is still possible
                </span>
                <br/>
                <br/>
                you know, the lighter things
            </p> */}
        </div>
        <br/>
        {/* <!--End mc_embed_signup--> */}
    </div>
    )
}

export default MailChimpSignup;