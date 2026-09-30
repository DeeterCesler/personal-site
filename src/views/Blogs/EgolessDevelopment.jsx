import React from 'react';
import BlogContainer from "../../components/BlogContainer";
import WaveCanvas from "../../components/WaveCanvas";

const EgolessDevelopment = () => {
    return(
        <>
            <WaveCanvas />
            <BlogContainer title="Egoless Development" publishedDate="September 30, 2026" shortRef="egoless-development">
                <p>"AI can program better than most developers."</p>
                <p><b>As far as I know, AI can program better than <i>any</i> developer.</b></p>
                <p>I would love to be wrong about this, because I want to meet the impressive individual who is the <a href="https://www.poetryfoundation.org/poems/42897/john-henry" target="_blank" rel="noreferrer noopener">John Henry</a> of our time.</p>
                <p>I came up as a developer in the tail end of the "tech boot camp" era. Companies needed developers of any level who were skilled enough to learn quickly.</p>
                <p>The low-level code monkey tasks have now been solved. I now do <i>not</i> recommend new developers pursue this as a career unless they have some unique advantage business-wise to finding work (i.e. nepotism or some other kind of favoritism). It is simply a <a href="https://www.investopedia.com/the-college-majors-with-the-highest-unemployment-rates-in-today-s-job-market-12132114" target="_blank" rel="noreferrer noopener">much more difficult time to find software jobs</a>.</p>
                <p>Even for senior-level talent, AI can produce faster, more thorough, and higher quality code. That leaves senior-level architecture decisions to the developer, which are also largely determined by business need.</p>
                <p>Simply put, the landscape has changed.</p>
                <p>The talent developers spent years building is now worth much less.</p>
                <h2>The Next Frontier for Developers Is in Other Silos</h2>
                <p>What AI will not do (as of today) is make business decisions, aesthetic choices, and against-the-grain judgment calls.</p>
                <p>IBM knew this in 1979:</p>
                <img
                    className="blog-image"
                    src="/pics/ibm-computer-mandate.jpg"
                    alt="A 1979 IBM training slide reading: A computer can never be held accountable, therefore a computer must never make a management decision."
                />
                <p>Hiding away and tapping out code now has less value.</p>
                <p>The balance is shifting towards speed, aesthetics, and objective business value.</p>
                <p>There are still technical silos a developer can retreat to (e.g. cloud and infrastructure). However, no matter what role you're in, expect to either shift towards a hyper-specialist or talented lateral thinker.</p>
                <p>Hyper-specialists know more about a unique process better than anyone else. It's quicker and safer to ask them about it than AI ironically because the stakes are so high. E.g. fixing an AWS error that is taking the entire production environment down, or knowing about treatment options for a rare disease and how it interacts with other conditions.</p>
                <p>Specialists may or may not be technical, but the less technical (or higher stakes) the less chance you will be constantly chased by the automation wave.</p>
                <p>The other option is the hyper-lateral thinker. If you are above-average talent in several different domains, <i>and</i> you have a way to put all of them to use, you are hard to replicate.</p>
                <h2>You Are Now a Consultant</h2>
                <p>Every role is now a consulting role. Be expected to give your opinion, sometimes when it's not asked, because proactive improvement is the default in the AI arms-race environment.</p>
                <p>If you <a href="https://www.youtube.com/watch?v=PP91WmrgpBE" target="_blank" rel="noreferrer noopener">stack talents as Scott Adams says</a>, then you make yourself rare. What's the next skill you want to develop? Management, sales, design, devops, marketing? Seemingly unconnected talents now matter more.</p>
                <p>For example, what does marketing have to do with code? Since the cost of code is approaching zero, you can now afford to think differently about programming. Launch an app that will only be used for one day at a conference? That used to cost maybe tens of thousands of dollars, weeks of waiting, and negotiating with potential vendors. Now it can cost you an ambitious afternoon.</p>
                <p>Don't wait until the next Fable model makes your current skill less valuable. Build a new skill that it will complement.</p>
            </BlogContainer>
        </>
    )
}

export default EgolessDevelopment;
