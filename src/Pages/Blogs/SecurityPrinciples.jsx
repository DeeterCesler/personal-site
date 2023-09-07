import React from "react";
import BlogContainer from "../../components/BlogContainer";

const SecurityPrinciples = () => {
    return(
        <BlogContainer title="8 Security Principles EVERY Software Dev Should Know">
            <p>It doesn't matter if you're frontend, backend, or a DevOps engineer. You should know these fundamentals.</p>
            <h3>1. SQL injections: the Most Common Attack</h3>
            <p>Cyber attacks are so hot right now. SQL injections are the most common kind. It's an attempt to send commands directly to your database.</p>
            <p>This doesn't mean they're just changing numbers in the backend. It's biggest danger is slipping in a <a href="https://stackoverflow.com/questions/332365/how-does-the-sql-injection-from-the-bobby-tables-xkcd-comic-work" rel="noreferrer noopener" target="_blank">DROP TABLES</a> and losing literally all of your data forever (unless you had separate backups).</p>
            <p>The solution is simple: <b>sanitize your inputs</b>. How this works is different in each language or framework. Google your target language + "sanitize inputs" to learn how.</p>
            <h3>2. Cross-Site Scripting (XSS)</h3>
            <p>Sanitizing inputs doesn't just protect your database, but prevents another kind of attack: cross-site scripting. In this one, instead of sliding in a database command, a malicious actor sends code for your server to execute.</p>
            <p>XSS can happen on your browser or server side, and the attacks can be anything that code can execute.</p>
            <p>Don't worry about understanding all the ways it can hurt you as much as you're making sure you're simply <b>sanitizing inputs</b>.</p>
            <h3>3. Never, ever, EVER store plaintext passwords</h3>
            <p>I love to help out startups. If someone asks me to demo their app, I'm in. However, one thing will make me never want to help you again.</p>
            <p>I tried an app and it didn't work for me. Okay, that's fine. Then a couple of weeks later, I got an email saying "in case you forgot your password, here it is!" That tells me they don't have serious developers working on their team (and also a good reminder for me to never to re-use passwords). I let them know their mistake.</p>
            <p>A password should <b><i>only</i></b> be stored hashed. A hash is a one-way algorithm that spits out a random-looking string of characters. Hashes can't be reverse-engineered, but the same inputs into the hash will always create the same output of characters. So exposing a hash shouldn't create a security risk.</p>
            <p>The only exception to this is if the hash and salt (one input to the hash) are also exposed. Then, a hacker can input random words until it generates a hash that matches yours. Then they know your password—another reminder to use random letters, numbers, and symbols in your passwords and not dictionary words.</p>
            <p>Basically, just look up <code>bcrypt</code>, learn how it works, and use that <b><i>every time</i></b> when storing passwords.</p>
            <h3>4. Never hardcode your access keys</h3>
            <p>This is a very junior error to make, but it still happens so it's worth mentioning.<br/>
            NEVER hardcode any access keys (e.g. to AWS or another cloud environment). These should <i>always</i> always live in your <code>.env</code> environment variables file.<br/>
            </p>
            <p>Out of all of these security vulnerabilities, this is potentially the most expensive error you can make.</p>
            <h3>5. Run <code>npm audit</code> periodically</h3>
            <p>This is a simple, built-in tool that helps you surface any known security vulnerabilities and the level of severity. There are similar ones in your target language (e.g. <code>cargo audit</code> in Rust).</p>
            <h3>6. Review open source code before your use it</h3>
            <p>Almost nobody does this. <a href="https://thehackernews.com/2022/07/over-1200-npm-packages-found-involved.html" target="_blank" rel="noreferrer noopener">The results can be hilarious.</a> Realistically, the more known the maintainer, the safer it's going to be. The more a piece of open source is regularly used (judging by the weekly downloads chart on its NPM site) the more vetted it will be.</p>
            <p><b>This is not the same as a security audit.</b> If you're going to users credit card info, don't try it until you know for a fact what kind of software you're using.</p>
            <h3>7. Authenticate your Endpoints</h3>
            <p>Unless it's a simple GET request for public data, guard your endpoints with authentication middleware. That could be an authentication token, a session cookie, whatever. But anything to do with creating or deleting data needs authentication. Never expose any POST, PUT or DELETE methods without knowing which user is doing it.</p>
            <h3>8. Principle of Least Privilege (POLP)</h3>
            <p>Speaking of knowing what your users are doing, each user needs the minimum security required to do their job. Whether their job is to post photos of their dog, or manage the database, each only needs the minimum amount of ability to access your application.</p>
            <p>A user does not need to access the admin panel. A develop doesn't (usually) need to access the production database. A database manager doesn't need access to user passwords (which should be hashed anyway, right?).</p>
            <p>This isn't about trust (just kidding, it definitely is), but minimizing unnecessary risks. A user trying to delete a photo should only be able to delete their own photos, no one else's. A developer shouldn't be able to accidentally force-push their branch to master.</p>
        </BlogContainer>
    )
}

export default SecurityPrinciples;